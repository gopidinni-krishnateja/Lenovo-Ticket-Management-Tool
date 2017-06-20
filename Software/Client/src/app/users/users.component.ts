import { Component } from '@angular/core';
import {User} from "./add-user-interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {

  constructor() { }

  AddTicket=({ value }: { value: User })=> {

  }

}
