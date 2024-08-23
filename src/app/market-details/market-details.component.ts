import { Component } from '@angular/core';
import {Firestore,collection,addDoc,collectionData,doc,getDoc, updateDoc, deleteDoc,increment, query, where, getDocs} from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart,registerables } from 'chart.js';
import { Observable } from 'rxjs';
import { VoteLoginDialogComponent } from '../vote-login-dialog/vote-login-dialog.component';
Chart.register(...registerables);

@Component({
  selector: 'app-market-details',
  templateUrl: './market-details.component.html',
  styleUrls: ['./market-details.component.css']
})
export class MarketDetailsComponent {
  pollID: any ; 
  chart:any = [];
  candidateName: any;
  numberofvotes: any;
  monthvotes: any;
  monthlyvotes: any;
  pollName: any;
  token:any;
  userid:any;
  totalVotes: number = 0;
  isUserVoted:boolean = false;
  //  piechart:any = document.getElementById('piechart');

  constructor(private firestore: Firestore, private router: Router,
    private activatedrouter:ActivatedRoute, public dialog: MatDialog){
    this.getCandidate();
  }

  ngOnInit(){
    this.token = sessionStorage.getItem("token");
    this.userid = sessionStorage.getItem("userid");
    this.pollID= this.activatedrouter.snapshot.queryParamMap.get('id');
    this.pollName = this.activatedrouter.snapshot.queryParamMap.get('pollname');
    console.log("pollId", this.pollID);
    this.checkUserVote(this.userid, this.pollID);
    // this.RenderChart();
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','vote'];
  marketdetails:any;
  dataSource:any;
  position:number = 0;

  getCandidate(){
    const collectionInstanse = collection(this.firestore,'candidate');

    collectionData(collectionInstanse,{idField:'id'}).subscribe((res)=>{
      console.log(res);
      this.dataSource = res;
     this.dataSource= this.dataSource.filter((item:any)=>{
        return item.pollId == this.pollID;
      });

      this.candidateName = this.dataSource.map((item:any)=>{
        return item.candidateName;
      });
      this.numberofvotes = this.dataSource.map((item:any)=>{
        return item.Vote;
      });
      this.monthvotes =  this.dataSource.map((item:any)=>{
        return item.VotePerMonth;
      });
  
     this.numberofvotes.map((item:any)=>{
      this.totalVotes = item +this.totalVotes
      }  )
      console.log("Votes",this.totalVotes);
      for(let i in this.monthvotes){
        this.monthlyvotes = Object.keys(this.monthvotes)
      }
      console.log(this.candidateName);
      console.log(this.monthlyvotes);
      this.RenderChart();
    
    })
   }

  //  checkUserVote() {
  //   const userInstanse = collection(this.firestore,'Votes');
  //   collectionData(userInstanse,{idField:'id'}).subscribe((res)=>{
  //     console.log(res);
  //   })
  // }

  checkUserVote(userId:any, pollId:any) {
    const votesRef = collection(this.firestore, 'Votes');
    const q = query(votesRef, where('userId', '==', userId), where('pollId', '==', pollId));
  
    getDocs(q).then(querySnapshot => {
      const votes:any = querySnapshot.docs.map(doc => doc.data());
      if(votes[0].userId){
        this.isUserVoted = true;
        console.log(this.isUserVoted);
      }
      console.log(votes[0].userId); // This will log only the votes that match the given userId and pollId
    });
  }

   async updateVote(id:any){
    // const id = 'p2Z8iHKZ797JTNFHkOZA'
    this.checkUserVote(this.userid, this.pollID);
    if(this.token){
      if(!this.isUserVoted){
        const docInstance = doc(this.firestore,'candidate',id);
        const updatedData ={
          vote : 1
        }
        await updateDoc(docInstance,{
          Vote: increment(1)
        });
      this.addUserDetails();
      this.saveVote(id);
      this.checkUserVote(this.userid, this.pollID);
      }else{
        alert("loude vote kar liya hai tu")
      }
   
    }else{
      this.dialog.open(VoteLoginDialogComponent, {
        width: '250px',
      });
    }

 }

 async saveVote(id:any ) {
  const candidateId = 'p2Z8iHKZ797JTNFHkOZA';
  const today = this.getFormattedDate();
  const currentDate = this.getFormattedDate();
  const month = this.getMonth();
  console.log(month);
  const candidateRef = doc(this.firestore, 'candidate', id);
  const VotePerDay = `VotePerDay.${currentDate}`;
  const VotePerMonth = `VotePerMonth.${month}`;

  // Try to increment the vote count for the given date
  try {
      await updateDoc(candidateRef, {
          [VotePerDay]: increment(1),
          [VotePerMonth]: increment(1)
      });
  } catch (error) {
      // Handle error (e.g., document might not exist yet or other issues)
      console.error("Error saving vote: ", error);
  }
  this.getCandidate()
}

addUserDetails(){
  let Votes ={
    pollId : this.pollID,
    userId: this.userid
  }
  const collectionInstanse = collection(this.firestore,'Votes');
  
  addDoc(collectionInstanse,Votes)
  .then(()=>{

  })
  .catch(()=>{
      
  })
 }
getFormattedDate(): string {
  const today = new Date();
  const year = today.getFullYear().toString();
  const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Add 1 because months are 0 indexed
  const day = today.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

getMonth():string{
  const today = new Date();
  let month = (today.getMonth() + 1).toString().padStart(2, '0');
  month = month.toString();
  return this.getMonthAbbreviation(month);
}

 getMonthAbbreviation(monthNumber: any): any {
  const monthMap: { [key: string]: any } = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec'
  };

  return monthMap[monthNumber] || 'Invalid month';
}

RenderChart(){
  new Chart("piechart", {
    type: 'bar',
    data: {
      // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      labels: this.candidateName,
      datasets: [{
        label: '# of Votes',
        data: this.numberofvotes,
        backgroundColor:[
         'rgb(255, 153, 51)',
         'rgb(115, 147, 179)',
         'rgb(8, 143, 143)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
            labels: {
                // This more specific font property overrides the global property
                font: {
                    size: 30
                }
            }
        }
    }
    }
  });

  new Chart("linechart", {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr'],
      // labels: this.candidateName,
      datasets: [{
        label: this.candidateName[0],
        data:[
          this.monthvotes[0]!.Jan,
          this.monthvotes[0]!.Feb,
          this.monthvotes[0]!.Mar,
        ] ,
        backgroundColor:[
         'rgb(255, 153, 51)',
         'rgb(115, 147, 179)',
         'rgb(8, 143, 143)'
        ],
        borderWidth: 1
      },{
        label: this.candidateName[1],
        data:[
          this.monthvotes[1]!.Jan,
          this.monthvotes[1].Feb,
          this.monthvotes[1]!.Mar,
        ] ,
        backgroundColor:[
         'rgb(255, 153, 51)',
         'rgb(115, 147, 179)',
         'rgb(8, 143, 143)'
        ],
        borderWidth: 1
      },{
        label: this.candidateName[2],
        data:[
          this.monthvotes[2]!.Jan,
          this.monthvotes[2]!.Feb,
          this.monthvotes[2]!.Mar,
        ] ,
        backgroundColor:[
         'rgb(255, 153, 51)',
         'rgb(115, 147, 179)',
         'rgb(8, 143, 143)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

}
