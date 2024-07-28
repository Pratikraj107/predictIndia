import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormArray, FormGroup } from '@angular/forms';
import {Firestore,collection,addDoc,collectionData,doc,getDoc, updateDoc, deleteDoc} from '@angular/fire/firestore';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';

@Component({
  selector: 'app-poll-form',
  templateUrl: './poll-form.component.html',
  styleUrls: ['./poll-form.component.css']
})
export class PollFormComponent implements OnInit {
   pollForm!: FormGroup;
   id: any;
   downloadURl: any;
   storage = inject(Storage);
   
   constructor(private firestore :Firestore){
 
    this.getPoll();
    this.getPollById();
    // this.updatePoll(id);
   }
   ngOnInit(){
    this.id = '5DEwQrAdu2HUblOwDAWp';
     this.pollForm = new FormGroup({
        'pollName' : new FormControl(),
        'pollDetails': new FormControl(),
        'pollCategory': new FormControl(),
        'pollPicture': new FormControl()
     });
   }

   OnSubmit(){
    console.log(this.pollForm);
   }

   uploadImage(event: Event){
    
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      const path = URL.createObjectURL(file); // Create an object URL for the file

      // Get the blob of the image
      const blob = new Blob([file], { type: file.type });
      let res = "pollImages/"+path.replace("blob:http://localhost:4200/","");
      console.log('File path:', res);
      console.log('File blob:', blob);
      this.uploadPollImage(blob, res);
    }
   }
   async uploadPollImage(blob:Blob,filePath:any){
     
      const storageRef = ref(this.storage, filePath );
      const uploadTask = await uploadBytes(storageRef, blob);
       this.downloadURl = await getDownloadURL(uploadTask.ref);
      console.log(this.downloadURl);
   }

   addPoll(pollForm:any){
    pollForm.value.pollPicture = this.downloadURl;
    const collectionInstanse = collection(this.firestore,'poll');
     console.log(pollForm.value);
    addDoc(collectionInstanse,pollForm.value )
    .then(()=>{

    })
    .catch(()=>{
        
    })
   }

   getPoll(){
    const collectionInstanse = collection(this.firestore,'poll');

    collectionData(collectionInstanse,{idField:'id'}).subscribe((res)=>{
      console.log(res);
    })
   }

   getPollById(){
    const id = '5DEwQrAdu2HUblOwDAWp';
    const docInstance = doc(this.firestore,'poll', id);

    getDoc(docInstance)
    .then((doc)=>{
     console.log(doc.data(), doc.id);
    })
   }

   updatePoll(id: string){
      const docInstance = doc(this.firestore,'poll',id);
      const updatedData ={
        pollDetails :'updated poll details'
      }
      updateDoc(docInstance,updatedData)
      .then(()=>{
        console.log("Success updated")
      })
      .catch(()=>{

      })
   }

   deleteDoc(id:any){
    const docInstance = doc(this.firestore,'poll',id);
    deleteDoc(docInstance)
    .then(()=>{

    })
   }
   
   
}
