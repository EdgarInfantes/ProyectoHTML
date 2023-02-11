import { Injectable } from '@angular/core';
import { user } from './user.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: user[] = [];
  private usersUpdated = new Subject<user[]>();
  getUser() {
    return [...this.users];
  }

  getUserUpdatedListener() {
    return this.usersUpdated.asObservable();
  }

  addUser(usuario: user) {
    const newUser: user = usuario;
    this.users.push(newUser);
    this.usersUpdated.next([...this.users]);
  }
}
