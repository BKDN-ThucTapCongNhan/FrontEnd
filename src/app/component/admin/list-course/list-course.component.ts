import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Student } from 'src/app/models/student';
import { Course } from 'src/app/models/course';
import { ActivatedRoute } from '@angular/router';
import { LanguageProgram } from 'src/app/models/languageProgram';
import { Level } from 'src/app/models/level';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  displayedColumns = ['name', 'languageProgram', 'level', 'fee', 'action'];
  DataSource: MatTableDataSource<Course>;
  userData: any[] = [];
  id: any;
  // course1 = new Course("Java part_time", new LanguageProgram("Java", "java123"), new Level("Basic", "Bs"), 0, 24500, "abc");
  // course2 = new Course("PHP part_time", new LanguageProgram("PHP", "php123"), new Level("Basic", "Bs"), 0, 24500, "abc");
  constructor(private route: ActivatedRoute, private adminService: AdminService) { }

  getAllCourse(): void {
    this.adminService.getAllCourse().subscribe((res) => {
      this.userData = res;
      this.DataSource = new MatTableDataSource(res.data.courses);
    }
    )
  }
  ngOnInit() {
    this.getAllCourse();
    // this.id = this.route.snapshot.params["id"]
    // if (this.id != null) {
    //   this.userData.push(this.course1);
    //   this.DataSource = new MatTableDataSource(this.userData);
    // } else {
    //   this.userData.push(this.course1);
    //   this.userData.push(this.course2);
    //   this.DataSource = new MatTableDataSource(this.userData);
    // }

  }
  public doFilter = (value: string) => {
    this.DataSource.filter = value.trim().toLocaleLowerCase();
  }


}
