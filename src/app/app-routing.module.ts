import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalComponent } from './components/hospital.component';
import { HospitalListComponent } from './components/hospitalList.component';
import { LoginComponent } from './components/login.component';
import { UserComponent } from './components/user.component';
import { UserListComponent } from './components/userList.component';

const routes: Routes = [
  { path: 'signup', component: UserComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'hospitalList', component: HospitalListComponent },
  { path: 'hospital', component: HospitalComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
