import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  createUser(user: any) {
    return this.httpClient.post(`http://localhost:3000/users`, user);
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`http://localhost:3000/users`);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`http://localhost:3000/users/${id}`);
  }

  updateUser(user: any) {
    return this.httpClient.put(`http://localhost:3000/users/${user.id}`, user);
  }

  deleteUser(user: any) {
    return this.httpClient.delete(`http://localhost:3000/users/${user.id}`);
  }
}
