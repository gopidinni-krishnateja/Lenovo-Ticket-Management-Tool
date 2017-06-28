import {Component, OnInit, ViewChild} from '@angular/core';
import {UsersComponent} from "../users/users.component";
import {userService} from "../users/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {QueryApi} from "../common/request/QueryApi";
import {teamService} from "app/create-teams/team.service";
import {SelectComponent} from "ng2-select";
import {checkAndUpdateBinding} from "@angular/core/src/view/util";
import {teamAssoService} from "./teamAsso.service";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  providers: [ userService,UsersComponent,QueryApi,teamService,teamAssoService]
})
export class TeamsComponent implements OnInit {


    public usersData;
    public userType;
    public filterUser;
    public teamNames=[]
    public teamValues=[]
    public selectedTeamName
     public  teamNameId
  public allTeamRecords=[]
  public allTeamAssociate=[]
  public assigned=0
  constructor(public users:UsersComponent,public userService:userService,private router: Router,private activatedRoute: ActivatedRoute,public teamService:teamService,
          public teamAssociate:teamAssoService) { }
  @ViewChild('ng') public ngSelect :SelectComponent;
  ngOnInit() {
    this.userService.get().subscribe((response) => {
    this.usersData=response

    })
   /* this.teamService.get().subscribe((response)=>{
      console.log(response)
      response.forEach((EachRecord)=>{
        this.teamValues.push(EachRecord.teamName)
      })
    })*/
    this.teamService.get().subscribe((response)=> {
      response.forEach((EachRecord)=>{
        this.allTeamRecords.push(EachRecord)
        let x=EachRecord.teamName
       this.teamValues.push(x)
      })
      this.teamValues.forEach((record)=>{
        let flag = 0;
        if(this.teamNames.length==0)
        {
          this.teamNames.push(record)
          flag=1
        }
        else {
          this.teamNames.forEach((everyRecord)=>{
            if(everyRecord===record)
            {
              flag=1
            }
          })
        }
        if(flag===0)
        {
          this.teamNames.push(record)
        }
      })
      this.ngSelect.items =  this.teamNames
    })


  }

  public value:any;
  private _selected=(value:string):void=> {
    let count=0;
    console.log('My', value);
    //this.ngSelect.active =[];
   // this.ngSelect.items=this.teamValues;
  };

  public removed(value:string):void {
    console.log('Removed value is: ', value);
  }

  public typed(value:string):void {
    console.log('New search input: ', value);
    console.log(this.teamValues)
  }

  public refreshValue(value:string):void {
    this.value = value;
    this.selectedTeamName=this.value.text;
  }


  Search()
  {


    this.filterUser=[]
    this.usersData.forEach((EachRecord)=>{
      if(EachRecord.userType===this.userType )
      {
        this.filterUser.push(EachRecord)
      }
    })

    this.teamAssociate.get().subscribe((response)=>{
      response.forEach((eachRecord)=>{
        let val=eachRecord
        this.allTeamAssociate.push(val)
      })
      let c
    
    })
}
  assign(userId,teamName) {
   this.allTeamRecords.forEach((each)=>{
     if(each.teamName===teamName)
     {
       this.teamNameId=each.id;
     }
   })
    let params={
     "userId":userId,
      "teamId":this.teamNameId
    }
    this.teamAssociate.Associate(params).subscribe((response)=>{
      console.log(response)
    })

  }

}
