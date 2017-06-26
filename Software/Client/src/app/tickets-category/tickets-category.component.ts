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
@Component({
  selector: 'app-tickets-category',
  templateUrl: './tickets-category.component.html',
  styleUrls: ['./tickets-category.component.css'],
  providers: [ userService, QueryApi,ticketService]
})
export class TicketsCategoryComponent implements OnInit{
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
  ///////////////////
  public ticketArray;
  public categoryList=[];
  public filterCatagory=[];
  public selectedValue;
  public deviceType;
  public viewRecord:any={};
  public AllRecords=[];
  public editRecord={};
  public editTicketName;
  public editTicketType;
  public editProirty;
  public editName;
  public editDiscription;
  public editedTicket;
  public editCategory;
  public deleteKey;
  public deleteIndex;
  public process
  public strt=true;
  public resol;
  public checkStatusTicket;
  public btn_1Id=0;
  public btn_2Id=0;
  public btn_3Id=0;
  public viewUsersDetails=[];
  sub
  id
  constructor(private model:NgbModal,private router: Router,private userService:userService,public _activatedRoute: ActivatedRoute,
              public ticketService:ticketService, public header:HeaderComponent

  )

  {

    this.fla=4;
    this.categoryList=["SpareParts","ManufactureDefect","PartsReplacement","BatteryLeakage","ChargerDefect","WarrentyExtension"];

  }
  ///////////////////////////////
  ngOnInit(){
    this.fla=6;
    this._activatedRoute.params.subscribe(params => {console.log(params)
      this.typeUser(params)
      this.AssignedByUSer=Number(params.id)
    });

    this.ticketService.get().subscribe((response) => {
      console.log("in ticket category")
     this.allTickets=response
   console.log(this.allTickets)
    })
    this.userService.get().subscribe((response) => {

     response.forEach((EachRecord)=>{

        if(EachRecord.userType==='TECHNICAL' )
        {
          this.users.push(EachRecord.id)

          let user={
            id:EachRecord.id,
            name:EachRecord.firstName+" "+EachRecord.lastName
        }
          this.filterUsers.push(user)
        }
      })
      console.log(this.filterUsers)
    })

  }
/////////////////////////////////////////

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
//////////////////////////////////////////////////////////////////////////////////////
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
  public edit=(index)=>
  {
    this.fla=3;
    this.router.navigate(['/home/edit/',index ]);
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
            }
          this.checkStatusTicket=index;
          bool=false;
        }
      }
    });
    this.btn_1Id=this.btn_1Id+1
    this.btn_2Id=this.btn_2Id+1
    this.btn_3Id=this.btn_3Id+1
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
  select(user,id)
  {
    this.AssgnedToUser=user;
    this.editId=id;
  }
    assignUser(id,name,editId,discription,proirty,status,category,type,createduser,typeTicket,AssgnedToUser)
  {
    console.log("id->"+id);
    console.log("name->"+name);
    console.log("editId->"+editId);
    console.log("discription->"+discription);
    console.log("proirty->"+proirty);
    console.log("status->"+status);
    console.log("category->"+category);
    console.log("type->"+type);
    console.log("createduser->"+createduser);
    console.log("AssignedBYUser->"+this.AssignedByUSer)

    this.editTicket={"id":id,
      "ticketName":name,
      "ticketDiscription":editId,
      "ticketCategory":category,
      "ticketPriorty":proirty,
      "ticketStatus":discription,
      "ticketType":typeTicket,
      "CreatedUser":status,
      "AssignedToUser":AssgnedToUser,
      "AssignedByUSer":Number(this.AssignedByUSer)
    }
    this.ticketService.editTicket( this.editTicket ).subscribe((response) => {
      this.Assigned=AssgnedToUser
      this.assignModal.show()

  });
}
  closed(){
    this.assignModal.hide()
  }

/////////////////////////////////////////////
}
