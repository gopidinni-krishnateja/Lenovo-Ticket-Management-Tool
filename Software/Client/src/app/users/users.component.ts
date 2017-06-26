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
  public flag=0;
  public name
  public email
  public filteremails=[]
  public temp=0;
  public check=""
  public check2=""
  constructor(public userService:userService,private router: Router) { }
  ngOnInit(){
    this.userService.get().subscribe((response) => {

      response.forEach((EachRecord)=>{

          this.filteremails.push(EachRecord.email)
      })
    })
  }
  AddUser=({ value }: { value: User })=> {
    this.name=value.firstName+" "+value.lastName;

      console.log(value)
    this.userService.adduser( value ).subscribe((response) => {
        this.conformation.show()

    });
  }
  login()
  {
    this.router.navigateByUrl('/home');
  }



}
