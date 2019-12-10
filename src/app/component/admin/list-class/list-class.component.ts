import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Class } from 'src/app/models/class';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.css']
})
export class ListClassComponent implements OnInit {

  displayedColumns = ['name', 'startDay', 'endDay', 'action'];
  DataSource: MatTableDataSource<Class>;
  userData: any[] = [];

  constructor(private route: ActivatedRoute, private adminService: AdminService, private router: Router) { }

  getAllClass(): void {
    this.adminService.getAllClass().subscribe((res) => {
      this.userData = res;
      this.DataSource = new MatTableDataSource(res.data.listClass);
    }
    )
  };
  ngOnInit() {
    this.getAllClass();
  }
  updateAccount(id: string) {
    this.router.navigateByUrl("/admin/editClass/:id");
  }
  public doFilter = (value: string) => {
    this.DataSource.filter = value.trim().toLocaleLowerCase();
  }
}
