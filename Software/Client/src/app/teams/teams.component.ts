import {Component, OnInit, ViewChild} from '@angular/core';
import {UsersComponent} from "../users/users.component";
import {userService} from "../users/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {QueryApi} from "../common/request/QueryApi";
import {teamService} from "app/create-teams/team.service";
import {SelectComponent} from "ng2-select";
import {checkAndUpdateBinding} from "@angular/core/src/view/util";
import {teamAssoService} from "./teamAsso.service";
import {ModalDirective} from "ngx-bootstrap";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  providers: [ userService,UsersComponent,QueryApi,teamService,teamAssoService]
})
export class TeamsComponent implements OnInit {


    public usersData=[];
    public allusersData
    public userType;
    public filterUser;
    public teamNames=[]
    public teamValues=[]
    public selectedTeamName
     public  AssignedPersonId
  public allTeamRecords=[]
  public allTeamAssociate=[]
  public assigned=0
  public associateTeamId
  public loginID
  public newFileterUsers=[]
  public filterData=[]
  constructor(public users:UsersComponent,public userService:userService,private router: Router,private activatedRoute: ActivatedRoute,public teamService:teamService,
          public teamAssociate:teamAssoService) { }
  @ViewChild('ng') public ngSelect :SelectComponent;
  @ViewChild('assignModal') public assignModal:ModalDirective;
  @ViewChild('success') public success:ModalDirective;
  ngOnInit() {

      this.loginID=localStorage.getItem("loginID");
    this.teamAssociate.get().subscribe((response)=>{
      this.filterData=response
      console.log(this.filterData)

      this.filterData.forEach((eachRecord)=>{
        let val=eachRecord.user.id
        this.allTeamAssociate.push(val)
      })
      this.allTeamAssociate.forEach((everRecord)=>{
      })
      this.userService.get().subscribe((response) => {
        this.allusersData=response
        this.allusersData.forEach((eachUserRecord)=>{
          let tempFlag =0;
          this.allTeamAssociate.forEach((eachTeamRecord)=>{
              if(eachUserRecord.id === eachTeamRecord){
                tempFlag =1;
              }
          })
          if(tempFlag === 0){
            this.usersData.push(eachUserRecord)
          }
        })

      })


    })


    this.teamService.get().subscribe((response)=> {
      response.forEach((EachRecord)=>{
        this.allTeamRecords.push(EachRecord)
        let id=EachRecord.id
        let x=EachRecord.teamName
       this.teamNames.push({
         "id":id,
         "text":x
       })
      })

      this.ngSelect.items =  this.teamNames
    })


  }

  public value:any;
  private _selected=(value:string):void=> {
    let count=0;
    console.log('My', value);
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
    console.log(this.value)
    this.associateTeamId=this.value.id
    this.selectedTeamName=this.value.text;
    console.log(this.associateTeamId)
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
}

  assign(userId,teamName,index) {
  if(teamName==null)
  {
    this.assignModal.show()
  }
  else {
    let params={
      "userId":userId,
      "teamId":this.associateTeamId
    }
    this.teamAssociate.Associate(params).subscribe((response)=>{
      console.log(response)
    })
    this.filterUser.splice(index,1)
    this.AssignedPersonId=userId
    this.success.show()
   }
    window.location.reload()

  }
  delete(userId,teamId)
  {
    let params={
      "userId":userId,
      "teamId":teamId
    }
    this.teamAssociate.deleteAssociation(params).subscribe((response)=>{
      console.log(response)
    })
  }
  viewAssociation(id)
  {
    this.router.navigate(['teams/' +id ]);
  }

}
