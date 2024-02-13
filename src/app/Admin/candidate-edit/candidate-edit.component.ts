import { Component } from '@angular/core';
import {Firestore,collection,addDoc,collectionData,doc,getDoc, updateDoc, deleteDoc} from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-edit',
  templateUrl: './candidate-edit.component.html',
  styleUrls: ['./candidate-edit.component.css']
})
export class CandidateEditComponent {

  displayedColumns: string[] = ['candidateName', 'candidateDetails','candidatePicture'];
  dataSource: any[] = [ ];
  pollId : any;
  constructor(private firestore: Firestore, private router: Router){
    this.pollId = sessionStorage.getItem('pollId');
  }

}
