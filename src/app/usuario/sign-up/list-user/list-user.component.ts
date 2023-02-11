import { Component, OnDestroy, OnInit } from '@angular/core';
import { user } from '../user.model';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnDestroy, OnInit {
  userList: user[] = [];
  private userSubs: Subscription;
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userList = this.userService.getUser();
    this.userSubs = this.userService
      .getUserUpdatedListener()
      .subscribe((users: user[]) => {
        this.userList = users;
      });
  }

  ngOnDestroy(): void {
    this.userSubs.unsubscribe();
  }
}
