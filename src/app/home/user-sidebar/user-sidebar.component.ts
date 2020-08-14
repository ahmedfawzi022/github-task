import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {
  userData:any;
  constructor(private _usersService:UsersService) { }

  ngOnInit(): void {
    this.getUser()
  }
  
  getUser(){
    this._usersService.getUser('ForbesLindesay')
        .subscribe(
          data => {
            this.userData = data
          },
          error => {
            try {
            } catch (err) {
            }
          },

        );

  }

}
