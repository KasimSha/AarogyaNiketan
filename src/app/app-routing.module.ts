import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AdminComponent } from './components/admin.component';
//import { AdminUiComponent } from './components/AdminUi.component';
import { HomeComponent } from './components/home.component';
import { HospitalComponent } from './components/hospital.component';
import { HospitalListComponent } from './components/hospitalList.component';
import { LoginComponent } from './components/login.component';
import { UserComponent } from './components/user.component';
import { UserListComponent } from './components/userList.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: UserComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'hospital', component: HospitalComponent },
  { path: 'hospitalList', component: HospitalListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  //{ path: 'admin', component: AdminComponent },
  //{ path: 'adminUi', component: AdminUiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
