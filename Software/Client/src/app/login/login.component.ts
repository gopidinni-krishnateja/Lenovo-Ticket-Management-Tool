import { Component, OnInit } from '@angular/core';
import {Login} from "./login-user-interface";
import {UsersComponent} from "../users/users.component";
import {userService} from "../users/user.service";
import {QueryApi} from "../common/request/QueryApi";
import {forEach} from "@angular/router/src/utils/collection";
import {TicketsCategoryComponent} from "app/tickets-category/tickets-category.component";
import {Router} from "@angular/router";
import { ActivatedRoute, Params} from '@angular/router'
import {ticketService} from "../create-ticket/ticket-service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ userService,UsersComponent,QueryApi,TicketsCategoryComponent,ticketService]

})
export class LoginComponent implements OnInit {

  constructor(public users:UsersComponent,public userService:userService,public ticket:TicketsCategoryComponent,private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  loginUser=({ value }: { value: Login })=> {

    const params = value.email;
    this.userService.getUser(params).subscribe((response) => {
        if(value.email===  response.email&& value.password=== response.password)
        {
          let type=value.userType
          alert(type)
          switch (type)
          {
            case ("ADMIN"):

              this.router.navigate(['home/'  ,{id:response.id}]);

              break;
            case ("TECHNICAL"):
              this.router.navigate(['home/' ,{id:response.id}]);

              break;
            case ("HELPLINE"):
              this.router.navigate(['home/' , {id:response.id}]);

              break;
          }
        }

      });



  }
}
