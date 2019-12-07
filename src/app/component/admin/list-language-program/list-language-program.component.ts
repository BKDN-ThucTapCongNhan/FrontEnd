import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { LanguageProgram } from 'src/app/models/languageProgram';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-list-language-program',
  templateUrl: './list-language-program.component.html',
  styleUrls: ['./list-language-program.component.css']
})
export class ListLanguageProgramComponent implements OnInit {

  displayedColumns = ['name', 'brief'];
  DataSource: MatTableDataSource<LanguageProgram>;
  userData: any[] = [];
  id:any;
  languageProgram1=new LanguageProgram("Advantage","AD");
  languageProgram2=new LanguageProgram("Hai","Nam");
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
      this.userData.push(this.languageProgram1);
      this.userData.push(this.languageProgram2);
      this.DataSource = new MatTableDataSource(this.userData);


  }
  public doFilter = (value: string) => {
    this.DataSource.filter = value.trim().toLocaleLowerCase();
  }
}
