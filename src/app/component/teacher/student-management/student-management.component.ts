import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Exercise } from 'src/app/models/exercise';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent implements OnInit {
  documentName: String;
  filesToUpload: Array<File> = [];
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
  displayedColumns = ['name', 'linkGitHub','nameExercise', 'point', 'send'];
  DataSource: MatTableDataSource<Exercise>;
  userData: any[] = [];
  id:any;
  exercise=new Exercise("Quyên","https://github.com/BKDN-ThucTapCongNhan/FrontEnd","FrontEnd",7,true);
  exercise1=new Exercise("Hải","https://github.com/BKDN-ThucTapCongNhan/BackEnd","BackEnd",8,true);

  constructor(private route: ActivatedRoute,private adminService:AdminService) {}

  getAllStudent(): void {
    this.adminService.getAllAccounts().subscribe((res) => {
      this.userData = res;
      this.DataSource.data = this.userData;
    }
    )
  }
  ngOnInit() {
      this.userData.push(this.exercise);
      this.userData.push(this.exercise1);
      this.DataSource = new MatTableDataSource(this.userData);
  }
  public doFilter = (value: string) => {
    this.DataSource.filter = value.trim().toLocaleLowerCase();
  }
}
