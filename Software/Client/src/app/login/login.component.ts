import {Component, OnInit, ViewChild} from '@angular/core';
import {Login} from "./login-user-interface";
import {UsersComponent} from "../users/users.component";
import {userService} from "../users/user.service";
import {QueryApi} from "../common/request/QueryApi";
import {forEach} from "@angular/router/src/utils/collection";
import {TicketsCategoryComponent} from "app/tickets-category/tickets-category.component";
import {Router} from "@angular/router";
import { ActivatedRoute, Params} from '@angular/router'
import {ticketService} from "../create-ticket/ticket-service";
import { LocalStorageModule } from 'angular-2-local-storage';
import {ModalDirective} from "ngx-bootstrap";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ userService,UsersComponent,QueryApi,TicketsCategoryComponent,ticketService,]

})
export class LoginComponent implements OnInit {

  constructor(public users:UsersComponent,public userService:userService,public ticket:TicketsCategoryComponent,private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  @ViewChild('loginModal') public loginModal:ModalDirective;
  loginUser=({ value }: { value: Login })=> {

    const params = value.email;
    this.userService.getUser(params).subscribe((response) => {
      console.log(response)
        if(value.email===response.email&& value.password=== response.password && value.userType===response.userType)
        {
          let type=value.userType
          let id=response.id
          switch (type)
          {
            case ("ADMIN"):
              localStorage.setItem("flag","1");
              this.router.navigate(['home/'  ,{id:response.id}]);
              window.location.reload()

              break;
            case ("TECHNICAL"):
              localStorage.setItem("flag","1");
              this.router.navigate(['home/' ,{id:response.id}]);
              window.location.reload()

              break;
            case ("HELPLINE"):
              localStorage.setItem("flag","1");
              this.router.navigate(['home/' , {id:response.id}]);
              window.location.reload()

              break;
          }
        }
        else if(response==null||response==0)
        {
          this.loginModal.show()
        }

      })



  }
}
