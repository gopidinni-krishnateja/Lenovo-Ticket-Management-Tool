import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "./add-user-interface";
import {userService} from "./user.service";
import {QueryApi} from "../common/request/QueryApi";
import {flatMap} from "tslint/lib/utils";
import {Router} from "@angular/router";
import {ModalDirective} from "ngx-bootstrap";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ userService, QueryApi]
})
export class UsersComponent  implements OnInit{
  @ViewChild('conformation') public conformation:ModalDirective;
  public data
  public validate
  public name
  public email
  public flag=0;
  public filteremails=[]

  constructor(public userService:userService,private router: Router) { }
  ngOnInit(){
  }
  AddUser=({ value }: { value: User })=> {
    this.name=value.firstName+" "+value.lastName;
    this.userService.adduser( value ).subscribe((response) => {
        this.validate=Number(response._body)
      if(this.validate==1)
      {
        this.flag=1;
      }
      else {
        this.conformation.show()
      }
    });

  }
  login()
  {
    this.router.navigateByUrl('/home');
  }



}
