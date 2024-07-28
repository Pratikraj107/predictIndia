import { Component, Input } from '@angular/core';
import {Firestore,collection,addDoc,collectionData,doc,getDoc, updateDoc, deleteDoc} from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-market-home',
  templateUrl: './market-home.component.html',
  styleUrls: ['./market-home.component.css']
})
export class MarketHomeComponent {
 market:any;
  pollid: any;
  @Input() tab: any | undefined;
  constructor(private firestore: Firestore, private router: Router){
    this.getPoll();

  }

  getPoll(){
    const collectionInstanse = collection(this.firestore,'poll');
    setTimeout(()=>{
      this.tab =  sessionStorage.getItem("tabdetails");
      console.log(this.tab);
      if(this.tab){
        collectionData(collectionInstanse,{idField:'id'}).subscribe((res)=>{
          this.market = res;
          this.market =  this.market.filter((item:any)=>{
            return item.pollCategory.toLowerCase() == this.tab;
          });
          if(this.market.length >3){
            this.market= this.market.slice(2);
          }
        
          console.log(this.market);
          console.log(this.market[0].id);
        })
      }
    },100);
   
 
   }

   marketDetails(id:any,pollname:any){
    console.log(id);
    this.router.navigate(['details'],{queryParams:{id:id,pollname:pollname}});
   }

   pollEntry(){
    this.router.navigate(['poll-entry']);
   }
}
