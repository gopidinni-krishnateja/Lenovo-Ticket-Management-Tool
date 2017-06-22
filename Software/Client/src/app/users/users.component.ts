import { Component } from '@angular/core';
import {User} from "./add-user-interface";
import {userService} from "./user.service";
import {QueryApi} from "../common/request/QueryApi";
import {flatMap} from "tslint/lib/utils";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ userService, QueryApi]
})
export class UsersComponent  {

  public data
  public flag=0;
  constructor(public userService:userService,private router: Router) { }

  AddUser=({ value }: { value: User })=> {
      console.log(value)
    this.userService.adduser( value ).subscribe((response) => {
      console.log(response)
      this.router.navigate(['home/']);
    });
  }





}
