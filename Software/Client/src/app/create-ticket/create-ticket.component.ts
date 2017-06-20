import { Component, OnInit } from '@angular/core';
import { LocalStorageModule } from 'angular-2-local-storage';
import {Ticket} from '../create-ticket/create-ticket-interface';
import {TicketsCategoryComponent} from "../tickets-category/tickets-category.component";
import {Router, Routes} from "@angular/router";
import {forEach} from "@angular/router/src/utils/collection";
import {validate} from "codelyzer/walkerFactory/walkerFn";
import {tick} from "@angular/core/testing";
import {UsersComponent} from "../users/users.component";
import {userService} from "../users/user.service";
import {QueryApi} from "../common/request/QueryApi";

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css'],
  providers: [ userService,UsersComponent,QueryApi]
})
export class CreateTicketComponent implements OnInit {

  public userdata
  constructor(private router: Router,usercomponent:UsersComponent)
  {
    this.userdata=usercomponent.getUsers();
    console.log(this.userdata)
  }

  ngOnInit()
  {
    let categories=["Spare Parts","Manufacture Defect","Parts Replacement","Battery Leakage","Charger Defect","Warrenty Extension"];

  }

  Tickets=[];

  AddTicket=({ value }: { value: Ticket })=> {
    value.Status="Open"
    this.router.navigateByUrl('/home');
  }
  send()
  {
    this.router.navigateByUrl('/createticket');
  }

}
