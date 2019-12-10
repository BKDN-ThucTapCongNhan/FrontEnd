import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListStudentComponent } from './component/admin/list-student/list-student.component';
import { CreateAccountComponent } from './component/admin/create-account/create-account.component';
import { LoginComponent } from './component/login/login/login.component';
import { ListClassComponent } from './component/admin/list-class/list-class.component';
import { ListTeacherComponent } from './component/admin/list-teacher/list-teacher.component';
import { ListCourseComponent } from './component/admin/list-course/list-course.component';
import { UserProfileComponent } from './component/admin/user-profile/user-profile.component';
import { CreateLevelComponent } from './component/admin/create-level/create-level.component';
import { FileUploadComponent } from './component/admin/file-upload/file-upload.component';
import { CreateLanguageProgramComponent } from './component/admin/create-language-program/create-language-program.component';
import { ListLevelComponent } from './component/admin/list-level/list-level.component';
import { ListLanguageProgramComponent } from './component/admin/list-language-program/list-language-program.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashboardAdminComponent } from './component/admin/dashboard-admin/dashboard-admin.component';
import { CreateClassComponent } from './component/admin/create-class/create-class.component';
import { StudentLayoutComponent } from './layout/student-layout/student-layout.component';
import { HomeStudentComponent } from './component/student/home-student/home-student.component';
import { CalendarComponent } from './component/student/calendar/calendar.component';
import { DocumentComponent } from './component/student/document/document.component';
import { SchoolManagerComponent } from './component/student/school-manager/school-manager.component';
import { TeacherLayoutComponent } from './layout/teacher-layout/teacher-layout.component';
import { DashboardTeacherComponent } from './component/teacher/dashboard-teacher/dashboard-teacher.component';
import { CalendarTeacherComponent } from './component/teacher/calendar-teacher/calendar-teacher.component';
import { ListStudentOfTeacherComponent } from './component/teacher/list-student-of-teacher/list-student-of-teacher.component';
import { StudentManagementComponent } from './component/teacher/student-management/student-management.component';
import { ExerciseComponent } from './component/student/exercise/exercise.component';
import { LoginAdminComponent } from './component/login/login-admin/login-admin.component';
import { EditLevelComponent } from './component/admin/edit-level/edit-level.component';


const routes: Routes = [
  {
    path: "login", component: LoginComponent
  },
  {
    path: "loginAdmin", component: LoginAdminComponent
  },
  {
    path: "", component: LoginComponent
  },
  {
    path: "logout", component: LoginComponent
  },

  {
    path: "admin", component: AdminLayoutComponent, children: [
      {
        path: "listStudent", component: ListStudentComponent
      },
      {
        path: "listStudent", component: ListStudentComponent
      },
      {
        path: "createAccount", component: CreateAccountComponent
      },

      {
        path: "listClass", component: ListClassComponent
      },
      {
        path: "listTeacher", component: ListTeacherComponent
      },
      {
        path: "view-class/:id", component: ListStudentComponent
      },
      {
        path: "viewClassOfTeacher/:id", component: ListClassComponent
      },
      {
        path: "viewCourse", component: ListCourseComponent
      },
      {
        path: "user-profile", component: UserProfileComponent
      },
      {
        path: "createLevel", component: CreateLevelComponent
      },
      {
        path: "uploadFile", component: FileUploadComponent
      },
      {
        path: "createLanguageProgram", component: CreateLanguageProgramComponent
      },
      {
        path: "listCourse", component: ListCourseComponent
      },
      {
        path: "listLevel", component: ListLevelComponent
      },
      {
        path: "listLanguageProgram", component: ListLanguageProgramComponent
      },
      {
        path: "dashboard", component: DashboardAdminComponent
      },
      {
        path: "createClass", component: CreateClassComponent
      },
      {
        path:"level/:id",component:EditLevelComponent
      }
    ]
  },
  {
    path: "student", component: StudentLayoutComponent, children: [
      {
        path: "home", component: HomeStudentComponent
      },
      {
        path: "calendar", component: CalendarComponent
      },
      {
        path: "document", component: DocumentComponent
      },
      {
        path: "schoolManager", component: SchoolManagerComponent
      },
      {
        path:"excrcise",component:ExerciseComponent
      }
    ]
  },
  {
    path:"teacher",component:TeacherLayoutComponent,children :[
      {
        path:"dashboard",component:DashboardTeacherComponent
      },
      {
        path:"calendar",component:CalendarTeacherComponent
      },
      {
        path:"view-class/:id",component:ListStudentOfTeacherComponent
      },
      {
        path:"schoolManager",component:StudentManagementComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
