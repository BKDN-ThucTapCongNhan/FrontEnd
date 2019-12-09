import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Student } from 'src/app/models/student';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-list-student-of-teacher',
  templateUrl: './list-student-of-teacher.component.html',
  styleUrls: ['./list-student-of-teacher.component.css']
})
export class ListStudentOfTeacherComponent implements OnInit {

  displayedColumns = ['fullName', 'gender', 'phone', 'email', 'address', 'username'];
  DataSource: MatTableDataSource<Student>;
  userData: any[] = [];
  id:any;
  student1=new Student("Quyên","Nữ","123456789","thai.quyen@gmail.com","Quang nam","ThaiQuyen");
  student2=new Student("Hai","Nam","123456789","haitan28102408@gmail.com","Quang nam","haiTan");
  constructor(private route: ActivatedRoute,private adminService:AdminService) {}

  getAllStudent(): void {
    this.adminService.getAllAccounts().subscribe((res) => {
      this.userData = res;
      this.DataSource.data = this.userData;
    }
    )
  }
  ngOnInit() {
    // this.getAllStudent();
    this.id=this.route.snapshot.params["id"]
    if(this.id!=null) {
      this.userData.push(this.student1);
      this.DataSource = new MatTableDataSource(this.userData);
    } else {
      this.userData.push(this.student1);
      this.userData.push(this.student2);
      this.DataSource = new MatTableDataSource(this.userData);
    }

  }
  public doFilter = (value: string) => {
    this.DataSource.filter = value.trim().toLocaleLowerCase();
  }

}
