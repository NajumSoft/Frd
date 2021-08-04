import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  AngularFirestore
} from '@angular/fire/firestore';
import {
  AngularFireStorage,
  AngularFireStorageReference
} from '@angular/fire/storage';


import {
  Observable
} from 'rxjs';
import {
  finalize
} from 'rxjs/operators';

import Swal from 'sweetalert2';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {
  defaulImgUrl: string = "../../../assets/Images/Image Uploader Placeholder.png";
  @ViewChild('fint') f: ElementRef;
  constructor(private fb: FormBuilder,
    private afs: AngularFirestore,
    private afStorage: AngularFireStorage,

  ) {}
  files = [];
  prograssBar = 0;
  ref: AngularFireStorageReference;
  refImage: AngularFireStorageReference;
   refSoft: AngularFireStorageReference;
  ifile = "";
  uploadStatus = true;
  imageFile: File;
  softFile: File;
  downloadURL: Observable < string >
    fileSize: any;
  imgArray: any;
  uploaderForm: FormGroup;

  ngOnInit() {



    this.uploaderForm = this.fb.group({
      appName: ['', Validators.required],
      by: ['', Validators.required],
      imageUrl: ['', Validators.required],
      size: ['', Validators.required],
      downloadLink: ['', Validators.required],
      descriptions: ['', Validators.required],
      downloads: ['', Validators.required],
      views: ['', Validators.required],
      version: ['', Validators.required],
      operatingSystem: ['', Validators.required],
      license: ['', Validators.required],
      filePath: ['', Validators.required],
      categories: ['', Validators.required],

    })
  }



  submitForm() {

  console.log(this.uploaderForm.value);
     for (var i = 0; i < this.files.length; i++)
      {
      let j = this.files[i].name;
      let v = (j.split('.')[1]);

        let fileUrl = `${'app'}/` + `${new Date().getDate()+"-"+new Date().getUTCMonth()}/` + `${this.files[i].name}`;
        //this.ref =  this.afStorage.ref(fileUrl);
        if ( v == 'png' || v == 'jpeg' || v == 'jpg') {
          this.refImage = this.afStorage.ref(fileUrl);

          this.afStorage.upload(fileUrl, this.files[i]).snapshotChanges().pipe(
   
            finalize(async() => {
      
                console.log('this.is image finialize');
                await this.refImage.getDownloadURL().subscribe(e => {
                  this.uploaderForm.value.imageUrl = e;      
        
                  // this.afs.collection('freedownlaods247').add(this.uploaderForm.value);
                  console.log(this.uploaderForm.value.imageUrl);
                  
                });            
  
              this.prograssBar = 0;
      
                  
            })).subscribe(d => {
            console.log('subscribe');    
          })   
        }
        if ( v == 'exe' || v =='pdf' || v == 'zip' || v == 'iso'|| v == 'rar') {
          this.refSoft = this.afStorage.ref(fileUrl);
          this.afStorage.upload(fileUrl, this.files[i]).snapshotChanges().pipe(
   
            finalize(async() => {
      
  
                console.log('this.is exe finialize');
               await this.refSoft.getDownloadURL().subscribe(e => {
                  this.uploaderForm.value.downloadLink = e;      
              
                  this.afs.collection('freedownlaods247').add(this.uploaderForm.value);
                  console.log(this.uploaderForm.value.downloadLink);
                  Swal.fire('tranfer complete !');
                  this.uploaderForm.reset();

                });        
              
  
              this.prograssBar = 0;
      
                  
            })).subscribe(d => {
                      this.uploaderForm.value.size = 1024/(d.totalBytes/1024)+"MB"; 
                      this.prograssBar = Math.round((d.bytesTransferred/d.totalBytes*100));
          })  
        }
            
      
     }
 

  }

  imageUploaderFunc() {
 
  
  }


  fileUploaderFunc(event) {

 

    for (var h = 0; h < event.target.files.length; h++) {

      this.files.push(event.target.files[h]);
      console.log(this.files);
    

    }
    this.imageUploaderFunc();

  }


}
