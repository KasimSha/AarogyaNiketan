import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/adminLogin.component';
//import { AdminComponent } from './components/admin.component';
//import { AdminUiComponent } from './components/AdminUi.component';
import { HomeComponent } from './components/home.component';
import { HospitalComponent } from './components/hospital.component';
import { HospitalListComponent } from './components/hospitalList.component';
import { HospitalList2Component } from './components/hospitalList2.component';
import { LoginComponent } from './components/login.component';
import { UserComponent } from './components/user.component';
import { UserListComponent } from './components/userList.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signUp', component: UserComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'hospital', component: HospitalComponent },
  { path: 'hospitalList', component: HospitalListComponent },
  { path: 'hospitalList2', component: HospitalList2Component },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminLogin', component: AdminLoginComponent },
  //{ path: 'admin', component: AdminComponent },
  //{ path: 'adminUi', component: AdminUiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
