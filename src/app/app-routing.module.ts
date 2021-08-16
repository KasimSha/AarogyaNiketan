import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { HospitalComponent } from './components/hospital.component';
import { HospitalListComponent } from './components/hospitalList.component';
import { UserComponent } from './components/user.component';
import { UserListComponent } from './components/userList.component';

const routes: Routes = [
  { path: 'signup', component: UserComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'hospital', component: HospitalComponent },
  { path: 'hospitalList', component: HospitalListComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
