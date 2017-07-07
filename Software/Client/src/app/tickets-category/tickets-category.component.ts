import { Component, OnInit,ViewChild } from '@angular/core';

import {ModalDirective} from "ngx-bootstrap";
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {userService} from "../users/user.service";
import {QueryApi} from "../common/request/QueryApi";
import {Router, Routes} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {ActivatedRoute} from "@angular/router";
import {ticketService} from "../create-ticket/ticket-service";
import {HeaderComponent} from "../header/header.component";
import {SelectComponent} from "ng2-select";
@Component({
  selector: 'app-tickets-category',
  templateUrl: './tickets-category.component.html',
  styleUrls: ['./tickets-category.component.css'],
  providers: [ userService, QueryApi,ticketService]
})
export class TicketsCategoryComponent implements OnInit{
  _router: Router;
  public temp=0
  public uservalue;
  public userId;
  public filterUsers=[];
  public allTickets
  public fla=0;
  public users=[]
  public editTicket
  public AssignedByUSer
  public editUser
  public editId
  public AssgnedToUser
  public Assigned
  public categoryList=[];
  public filterCatagory=[];
  public selectedValue;
  public deviceType;
  public viewRecord:any={};
  public AllRecords=[];
  public editName;
  public editDiscription;
  public deleteKey;
  public deleteIndex;
  public process
  public checkStatusTicket;
  public id
  public userType
  public assignUserCheck=0

  constructor(private model:NgbModal,private router: Router,private userService:userService,public _activatedRoute: ActivatedRoute,
              public ticketService:ticketService, public header:HeaderComponent) {
    this.fla=4;
    this.categoryList=["SpareParts","ManufactureDefect","PartsReplacement","BatteryLeakage","ChargerDefect","WarrentyExtension"];
    this._router=router
  }
  //@ViewChild('ng') public ngSelect :SelectComponent;
  ngOnInit(){
    this.fla=6;
    this._activatedRoute.params.subscribe(params => {console.log(params)
      this.typeUser(params)
      this.AssignedByUSer=Number(params.id)
      localStorage.setItem("loginID",this.AssignedByUSer);
      this.userType = localStorage.getItem("userType");
    });

    this.ticketService.get().subscribe((response) => {
      console.log("in ticket category")
      this.allTickets=response
      console.log(this.allTickets)
      this.filterCatagory=response
      console.log("the filter values");
      console.log(this.filterCatagory)

    })
    this.userService.get().subscribe((response) => {

      response.forEach((EachRecord)=>{

        if(EachRecord.userType==='TECHNICAL' )
        {
          this.users.push(EachRecord.id)
          this.filterUsers.push(
            {
              id:EachRecord.id,
              text:EachRecord.firstName+" "+EachRecord.lastName
            })

        }
      })
      console.log(this.filterUsers)
      //this.ngSelect.items =  this.filterUsers
    })

  }
  @ViewChild('viewModal') public viewModal:ModalDirective;
  @ViewChild('deleteModal') public deleteModal:ModalDirective;
  @ViewChild('assignModal') public assignModal:ModalDirective;

  private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;
  public selected(value:any):void {
    this.selectedValue = value.id;
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public typed(value:any):void {
    console.log('New search input: ', value);
  }

  public refreshValue(value:any):void {
    this.value = value;
  }
  public data:any;


  public type(value:string):void {
    console.log('New search input: ', value);
    console.log(this.filterUsers)
  }

  public refresh(value:string):void {
    this.data = value;
    console.log("----")
    console.log(this.data.id)
    this.AssgnedToUser=this.data.id;

  }
  typeUser(value)
  {
    console.log("in")
    console.log(value.id)
    const params =Number(value.id);
    this.userService.getUser(params).subscribe((response) => {
      console.log()
      if(response.userType==="ADMIN")
      {
        this.uservalue="ADMIN";
        this.userId=response.id;
      }

      else if(response.userType==="TECHNICAL")
      {
        this.uservalue="TECHNICAL";
        this.userId=response.id;
      }

      else if(response.userType==="HELPLINE")
      {
        this.uservalue="HELPLINE"
        this.userId=response.id;
      }

    })


  }
  CreateTicket(id)
  {
    this.router.navigate(['createticket/' +id ]);
  }
  AddTeam()
  {
    this.router.navigateByUrl('/teams');
  }
  CreateTeams(id)
  {
    this.router.navigate(['createteams/' +id ]);
  }
  public edit=(index)=>
  {
    this.fla=3;
    this.router.navigate(['/home/edit/',+index ,+this.AssignedByUSer ]);
  }
  public viewUsers=(id)=>{
    this.router.navigate(['viewusers/'+id])
  }
  //Display Data in Table
  public DisplayTable(selectedValue,typeofdevice)
  {
    let bool=0
    console.log(this.allTickets)
    this.filterCatagory= [];
    this.AllRecords= [];
    this.allTickets.forEach((EachRecord)=>{
      if(EachRecord.ticketType===selectedValue && EachRecord.ticketCategory===typeofdevice)
      {
        this.filterCatagory.push(EachRecord);

      }

    })


  }
  //View Data Method
  public view(index)
  {

    let bool = true;
    this.filterCatagory.forEach((EachRecord)=>{
      if(bool) {
        if (EachRecord.id === index) {
          this.viewRecord=
            {
              Discription:EachRecord.ticketDiscription,
              Ticket_No:EachRecord.id,
              category:EachRecord.ticketCategory,
              name:EachRecord.ticketName,
              status:EachRecord.ticketStatus,
              type:EachRecord.ticketType,
              CreatedUser:EachRecord.CreatedUser,
              AssgnedToUser:EachRecord.AssignedToUser,
              AssignedByUSer:EachRecord.AssignedByUSer,
              proirty:EachRecord.ticketPriorty
            }
          this.checkStatusTicket=index;
          bool=false;
        }
      }
    });
    console.log(this.viewRecord);
    this.viewModal.show();
    /*const modelRef = this.model.open(ViewTicketComponent,{size: 'lg'});
     modelRef.componentInstance.viewRecord = this.viewRecord;
     modelRef.result.then((formData) => {
     console.log("success");
     }).catch((failed) => {
     console.log("failed   ",failed)
     })
     console.log(this.viewRecord.Ticket_No)*/
  }
  public delete=(key,index)=>{
    this.deleteKey=key
    this.deleteIndex=index
    this.deleteModal.show()


  }
  deleteconformation=(key,index)=>
  {
    this.filterCatagory.splice(index,1);
    this.ticketService.deleteTicket(key).subscribe((response) => {
      this.deleteModal.hide()
    });
  }
  notconformation=()=>
  {
    this.deleteModal.hide()
  }
  assignUser(id)
  {
      if(this.userType==='ADMIN') {
        this.editTicket = {
          "id": id,
          "AssignedByUSer": Number(this.AssignedByUSer),
          "AssignedToUser": this.AssgnedToUser
        }
        this.ticketService.assignedTicket( this.editTicket ).subscribe((response) => {

        })
        this.temp=1
      }
        else if(this.userType==='TECHNICAL')
        {
          this.editTicket = {
            "id": id,
            "AssignedByUSer": Number(this.AssignedByUSer),
            "AssignedToUser": Number(this.AssignedByUSer)
          }
          this.ticketService.assignedTicket( this.editTicket ).subscribe((response) => {

          })
        }
      }
}
