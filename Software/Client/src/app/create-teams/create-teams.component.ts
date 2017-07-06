import { Component, OnInit } from '@angular/core';
import {Team} from "./team-interface";
import {UsersComponent} from "../users/users.component";
import {userService} from "../users/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {teamService} from "./team.service";
import {QueryApi} from "../common/request/QueryApi";

@Component({
  selector: 'app-create-teams',
  templateUrl: './create-teams.component.html',
  styleUrls: ['./create-teams.component.css'],
  providers: [ userService,UsersComponent,QueryApi,teamService]
})
export class CreateTeamsComponent implements OnInit {

  constructor(public users:UsersComponent,public userService:userService,private router: Router,private activatedRoute: ActivatedRoute,public teamService:teamService) { }

  ngOnInit() {
  }
  AddTeam=({ value }: { value: Team })=> {
    console.log(value)
    this.teamService.addteams( value ).subscribe((response) => {
      this.router.navigateByUrl('/home');
    });
  }



}
