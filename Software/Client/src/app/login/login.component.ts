import {Component, OnInit, ViewChild} from '@angular/core';
import {Login} from "../header/login-user-interface";
import {UsersComponent} from "../users/users.component";
import {userService} from "../users/user.service";
import {QueryApi} from "../common/request/QueryApi";
import {forEach} from "@angular/router/src/utils/collection";
import {Router} from "@angular/router";
import { ActivatedRoute, Params} from '@angular/router'
import {ticketService} from "../create-ticket/ticket-service";
import { LocalStorageModule } from 'angular-2-local-storage';
import {ModalDirective} from "ngx-bootstrap";
import {TicketsCategoryComponent} from "../tickets-category/tickets-category.component";
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
              localStorage.setItem("userType","ADMIN");
              localStorage.setItem("name",response.firstName+""+response.lastName);
              this.router.navigate(['home/' +response.id ]);
              window.location.reload()

              break;
            case ("TECHNICAL"):
              localStorage.setItem("flag","1");
              localStorage.setItem("userType","TECHNICAL");
              localStorage.setItem("name",response.firstName+""+response.lastName);
              this.router.navigate(['home/' +response.id ]);
              window.location.reload()

              break;
            case ("HELPLINE"):
              localStorage.setItem("flag","1");
              localStorage.setItem("userType","HELPLINE");
              localStorage.setItem("name",response.firstName+""+response.lastName);
              this.router.navigate(['home/' +response.id ]);
              window.location.reload()

              break;
          }
        }
        else if(response==null||response==0 ||value.email!=response.email||value.password!= response.password||value.userType!=response.userType)
        {
          this.loginModal.show()
        }

      })
  }
  admin()
  {
    this.router.navigate(['users' ]);
  }
}
