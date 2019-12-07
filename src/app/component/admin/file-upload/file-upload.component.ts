import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  documentName: String;
  filesToUpload: Array<File> = [];
  ngOnInit() { }
  upload() {
    const formData: any = new FormData();
    const arrayFiles: Array<File> = this.filesToUpload;
    console.log(this.documentName);
    console.log(arrayFiles);

    for (let i = 0; i < arrayFiles.length; i++) {
      formData.append("uploads[]", arrayFiles[i], arrayFiles[i]['name']);
    }
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //this.product.photo = fileInput.target.files[0]['name'];
  }
}
