import { User } from './../../shared/types/User';
import { UsersService } from './../../shared/services/users/users.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private usersService: UsersService) {
    this.users$ = this.usersService.getUsers$();
  }

  ngOnInit(): void {}
}
