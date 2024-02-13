import { Component } from '@angular/core';
import {Firestore,collection,addDoc,collectionData,doc,getDoc, updateDoc, deleteDoc} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from '@angular/fire/auth'

@Component({
  selector: 'app-poll-table',
  templateUrl: './poll-table.component.html',
  styleUrls: ['./poll-table.component.css']
})
export class PollTableComponent {

  displayedColumns: string[] = ['pollName', 'pollDetails','pollPicture','action','delete'];
  dataSource: any[] = [ ];
   
  constructor(private firestore: Firestore, private router: Router){
    this.getPoll();
  }

  onButtonClick(element: any) {
    console.log('Button clicked for:', element);
    const id = element.id;
    sessionStorage.setItem("pollId", id);
    this.router.navigate(['/admin/candidate-form']);
  }

  onDeleteClick(element: any){
    const id = element.id;
    const docInstance = doc(this.firestore,'poll',id);
    deleteDoc(docInstance)
    .then(()=>{

    })
  }

  getPoll(){
    const collectionInstanse = collection(this.firestore,'poll');

    collectionData(collectionInstanse,{idField:'id'}).subscribe((res)=>{
      this.dataSource = res;
      console.log(res);
    })
   }

}
