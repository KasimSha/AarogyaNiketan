import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user.component';
import { UserListComponent } from './components/userList.component';
//import { ModelComponent } from './model.component';

const routes: Routes = [
  { path: 'signup', component: UserComponent },
  { path: 'userList', component: UserListComponent },
  //{ path: 'model', component: ModelComponent },
  // { path: 'hospital', component: HospitalComponent },
  // { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
