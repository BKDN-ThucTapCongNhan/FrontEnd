import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './share/material/material.module';
import { ListStudentComponent } from './component/admin/list-student/list-student.component';
import { ListTeacherComponent } from './component/admin/list-teacher/list-teacher.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login/login.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CreateAccountComponent } from './component/admin/create-account/create-account.component';
import { ListClassComponent } from './component/admin/list-class/list-class.component';
import { ListCourseComponent } from './component/admin/list-course/list-course.component';
import { UserProfileComponent } from './component/admin/user-profile/user-profile.component';
import { RouterModule } from '@angular/router';
import { CreateLevelComponent } from './component/admin/create-level/create-level.component';
import { CreateLanguageProgramComponent } from './component/admin/create-language-program/create-language-program.component';
import { FileUploadComponent } from './component/admin/file-upload/file-upload.component';
import {FileSelectDirective} from "ng2-file-upload";
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListLevelComponent } from './component/admin/list-level/list-level.component';
import { ListLanguageProgramComponent } from './component/admin/list-language-program/list-language-program.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashboardAdminComponent } from './component/admin/dashboard-admin/dashboard-admin.component';
import { CreateClassComponent } from './component/admin/create-class/create-class.component';
import { StudentLayoutComponent } from './layout/student-layout/student-layout.component';
import { TeacherLayoutComponent } from './layout/teacher-layout/teacher-layout.component';
import { HomeStudentComponent } from './component/student/home-student/home-student.component';
import { CalendarComponent } from './component/student/calendar/calendar.component';
import { DocumentComponent } from './component/student/document/document.component';
import { SchoolManagerComponent } from './component/student/school-manager/school-manager.component';
import { DashboardTeacherComponent } from './component/teacher/dashboard-teacher/dashboard-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    ListStudentComponent,
    ListTeacherComponent,
    LoginComponent,
    CreateAccountComponent,
    ListClassComponent,
    ListCourseComponent,
    UserProfileComponent,
    CreateLevelComponent,
    CreateLanguageProgramComponent,
    FileUploadComponent,
    FileSelectDirective,
    ListLevelComponent,
    ListLanguageProgramComponent,
    AdminLayoutComponent,
    DashboardAdminComponent,
    CreateClassComponent,
    StudentLayoutComponent,
    TeacherLayoutComponent,
    HomeStudentComponent,
    CalendarComponent,
    DocumentComponent,
    SchoolManagerComponent,
    DashboardTeacherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgMatSearchBarModule,
    FlexLayoutModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
