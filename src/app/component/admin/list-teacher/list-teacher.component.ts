import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Teacher } from 'src/app/models/teacher';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent implements OnInit {
  displayedColumns = ['fullName', 'gender', 'phone', 'email', 'address', 'username', 'action'];
  DataSource: MatTableDataSource<Teacher>;
  userData: any[] = [];
  id:any;
  teacher1=new Teacher("Quyên","Nữ","123456789","thai.quyen@gmail.com","Quang nam","ThaiQuyen");
  teacher2=new Teacher("Hai","Nam","123456789","haitan28102408@gmail.com","Quang nam","haiTan");
  constructor(private route: ActivatedRoute,private adminService:AdminService) {}

  ngOnInit() {
    // this.getAllTeacher();
    this.userData.push(this.teacher1);
    this.userData.push(this.teacher2);
    this.DataSource = new MatTableDataSource(this.userData);
  }
  getAllTeacher(): void {
    this.adminService.getAllTeacher().subscribe((res) => {
      this.userData = res;
      this.DataSource.data = this.userData;
    }
    )
  }
  public doFilter = (value: string) => {
    this.DataSource.filter = value.trim().toLocaleLowerCase();
  }

}
