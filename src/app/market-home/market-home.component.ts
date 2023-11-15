import { Component } from '@angular/core';
import {Firestore,collection,addDoc,collectionData,doc,getDoc, updateDoc, deleteDoc} from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-market-home',
  templateUrl: './market-home.component.html',
  styleUrls: ['./market-home.component.css']
})
export class MarketHomeComponent {
 market:any;
  constructor(private firestore: Firestore, private router: Router){
    this.getPoll();
  }

  getPoll(){
    const collectionInstanse = collection(this.firestore,'poll');

    collectionData(collectionInstanse,{idField:'id'}).subscribe((res)=>{
      this.market = res;
      console.log(res);
    })
   }
}
