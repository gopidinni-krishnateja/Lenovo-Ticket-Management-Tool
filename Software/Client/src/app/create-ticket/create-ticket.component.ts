import { Component, OnInit } from '@angular/core';
import { LocalStorageModule } from 'angular-2-local-storage';
import {Ticket} from '../create-ticket/create-ticket-interface';
import {TicketsCategoryComponent} from "../tickets-category/tickets-category.component";
import {ActivatedRoute, Router, Routes} from "@angular/router";
import {forEach} from "@angular/router/src/utils/collection";
import {validate} from "codelyzer/walkerFactory/walkerFn";
import {tick} from "@angular/core/testing";
import {UsersComponent} from "../users/users.component";
import {userService} from "../users/user.service";
import {QueryApi} from "../common/request/QueryApi";
import {ticketService} from "./ticket-service";

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css'],
  providers: [ userService,UsersComponent,QueryApi,ticketService]
})
export class CreateTicketComponent implements OnInit {

  public userdata
  public username
  constructor(private router: Router,usercomponent:UsersComponent,public _activatedRoute: ActivatedRoute,private userService:userService,private ticketService:ticketService)
  {

  }

  ngOnInit()
  {

    this._activatedRoute.params.subscribe(params => {console.log(params)
      this.userdata=params.id
      console.log("->"+params.id)
    });
    this.userService.getUser(this.userdata).subscribe((response) => {
      console.log(response)
      this.username=response.firstName+" "+response.lastName


    })
  }

  Tickets=[];

  AddTicket=({ value }: { value: Ticket })=> {
    value.ticketStatus="OPEN";
    value.CreatedUser=this.userdata;
    value.AssignedByUSer=0;
    value.AssignedToUser=0;
    this.ticketService.addticket( value ).subscribe((response) => {
      console.log(response)
      this.router.navigate(['home/' +this.userdata ]);
    });
  }
  send()
  {
    this.router.navigate(['home/' +this.userdata ]);
  }

}
