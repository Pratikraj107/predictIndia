import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Firestore,collection,addDoc,collectionData,doc, updateDoc, deleteDoc,
  serverTimestamp, increment} from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent implements OnInit{
  candidateForm!: FormGroup;
  id: any;
  downloadURl: any;
  storage = inject(Storage);

  constructor(private firestore :Firestore,private route: ActivatedRoute){
    this.id = sessionStorage.getItem("pollId");
    console.log(this.id);
    this.getCandidate();
  }

  ngOnInit(){
    this.candidateForm = new FormGroup({
       'candidateName' : new FormControl(),
       'candidateDetails': new FormControl(),
       'candidatePicture': new FormControl()
    });
  }
  
  OnSubmit(){

  }

  
  uploadImage(event: Event){
    
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      const path = URL.createObjectURL(file); // Create an object URL for the file

      // Get the blob of the image
      const blob = new Blob([file], { type: file.type });
      let res = "candidateImages/"+path.replace("blob:http://localhost:4200/","");
      console.log('File path:', res);
      console.log('File blob:', blob);
      this.uploadCandidateImage(blob, res);
    }
   }
   async uploadCandidateImage(blob:Blob,filePath:any){
     
      const storageRef = ref(this.storage, filePath );
      const uploadTask = await uploadBytes(storageRef, blob);
       this.downloadURl = await getDownloadURL(uploadTask.ref);
      console.log(this.downloadURl);
   }

  addCandidate(candidateForm: any){

    candidateForm.value.candidatePicture = this.downloadURl;

    const collectionInstanse = collection(this.firestore,'candidate');
    
    let CandidateData = candidateForm.value;
    CandidateData.pollId = this.id
    CandidateData.Vote = 0;
    CandidateData.VotePerDay = 0;
    console.log(CandidateData);
    addDoc(collectionInstanse,CandidateData )
    .then(()=>{

    })
    .catch(()=>{
        
    })
     this.candidateForm.reset();
  }

  getCandidate(){
    const collectionInstanse = collection(this.firestore,'candidate');

    collectionData(collectionInstanse,{idField:'id'}).subscribe((res)=>{
      console.log(res);
    })
   }

  async updateVote(){
    const id = 'p2Z8iHKZ797JTNFHkOZA'
    const docInstance = doc(this.firestore,'candidate',id);
    const updatedData ={
      vote : 1
    }
    await updateDoc(docInstance,{
      Vote: increment(1)
    });

  this.saveVote();
 }



 async saveVote( ) {
  const candidateId = 'p2Z8iHKZ797JTNFHkOZA';
  const today = new Date();
  const currentDate = '2023-10-21';
  console.log(Date.now());
  const candidateRef = doc(this.firestore, 'candidate', candidateId);
  const VotePerDay = `VotePerDay.${currentDate}`;

  // Try to increment the vote count for the given date
  try {
      await updateDoc(candidateRef, {
          [VotePerDay]: increment(1)
      });
  } catch (error) {
      // Handle error (e.g., document might not exist yet or other issues)
      console.error("Error saving vote: ", error);
  }
}

}
