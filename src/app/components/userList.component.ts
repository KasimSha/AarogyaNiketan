import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userList',
  templateUrl: './userList.component.html',
  providers: [UserService],
})
export class UserListComponent implements OnInit {
  title = 'AarogyaNiketan';
  userList: Array<User>;
  isEdit = false;
  userObj = {
    name: '',
    email: '',
    userName: '',
    password: '',
    mobile: '',
  };
  users!: User[];

  constructor(private userService: UserService) {
    this.userList = [];
  }

  ngOnInit() {
    this.getLatestUser();
    this.userService
      .getAllUsers()
      .subscribe((data: User[]) => (this.userList = data));

    // this.userService.getUserById(3).subscribe((data: user[]) => {
    //   console.log(data);
    // });
  }

  getUserById(id: number): void {
    this.userService.getUserById(id).subscribe((data: User) => {
      alert(
        `ID: ${data.id} 
          EmailId: ${data.email}  \n
          UserName: ${data.userName}  \n
          Mobile: ${data.mobile}`
      );
    });
  }
  addUser(formObj: any) {
    this.userService.createUser(formObj).subscribe((response) => {
      console.log(response);
    });
  }

  // updateUser(formObj: any) {
  //   this.userService.updateUser(formObj).subscribe((updatedUser) => {
  //     if (updatedUser !== undefined) {
  //       formObj = updatedUser;
  //       alert('User Updated');
  //     }
  //   });
  // }

  getLatestUser() {
    this.userService.getAllUsers().subscribe((response) => {
      this.users = response;
    });
  }

  editUser(user: any) {
    this.isEdit = true;
    this.userObj = user;
  }

  updateUser() {
    this.isEdit = !this.isEdit;
    this.userService.updateUser(this.userObj).subscribe(() => {
      this.getLatestUser();
    });
  }

  deleteUser(user: any) {
    this.userService.deleteUser(user).subscribe(() => {
      this.getLatestUser();
    });
  }
}
