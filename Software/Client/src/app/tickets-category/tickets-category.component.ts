import { Component, OnInit,ViewChild } from '@angular/core';

import {ModalDirective} from "ngx-bootstrap";
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {userService} from "../users/user.service";
import {QueryApi} from "../common/request/QueryApi";
import {Router, Routes} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {ActivatedRoute} from "@angular/router";
import {ticketService} from "../create-ticket/ticket-service";
@Component({
  selector: 'app-tickets-category',
  templateUrl: './tickets-category.component.html',
  styleUrls: ['./tickets-category.component.css'],
  providers: [ userService, QueryApi,ticketService]
})
export class TicketsCategoryComponent implements OnInit{
  public uservalue;
  public userId;
  public filterTickets=[];
  public allTickets
  public fla=0;
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
              public ticketService:ticketService

  )

  {
    this.fla=4;
    let categories=localStorage.getItem("categories");
    this.categoryList=["SpareParts","ManufactureDefect","PartsReplacement","BatteryLeakage","ChargerDefect","WarrentyExtension"];
    let  tickets=localStorage.getItem("ticket");
    this.ticketArray=JSON.parse(tickets);
    localStorage.setItem("tempTickets",JSON.stringify(this.ticketArray));

  }
  ///////////////////////////////
  ngOnInit(){
    this.fla=6;
    this._activatedRoute.params.subscribe(params => {console.log(params)
      this.typeUser(params)
    });

    this.ticketService.get().subscribe((response) => {
      console.log("in ticket category")
     this.allTickets=response
   console.log(this.allTickets)
    })

  }
/////////////////////////////////////////

  @ViewChild('viewModal') public viewModal:ModalDirective;
  @ViewChild('editModal') public editModal:ModalDirective;
  @ViewChild('deleteModal') public deleteModal:ModalDirective;
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

    //console.log(this.filterCatagory)
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
  //Delete Data
  public delete=(del_index:any,key)=>{

    this.deleteModal.show()
    this.deleteIndex=del_index;
    this.deleteKey=key;

  }
  //Update Data
  public edit=(index)=>
  {
    this.fla=3;
    this.router.navigate(['/home/edit/',index ]);
  }
  public UpdatedRecord=(index,category) =>{
    let bool = true;
    this.editRecord={
      Ticket_No:this.editedTicket,
      name:this.editName,
      category:this.editCategory,
      Discription:this.editDiscription,
      type:this.editTicketType,
      priority:this.editProirty,
      Status:this.viewRecord.status

    }

  for(let i=0;i<this.filterCatagory.length;i++)
  {
    if(this.filterCatagory[i].Ticket_No===index)
    {
      this.filterCatagory[i]=this.editRecord;
    }
  }
    for(let i=0;i<this.ticketArray.length;i++)
    {
      if(this.ticketArray[i].Ticket_No===index)
      {
        this.ticketArray[i]=this.editRecord;

      }
    }

    this.editTicketName="";
    this.editProirty="";
    this.editProirty="";
    this.editTicketType="";
    this.editCategory="";
    this.editModal.hide()
    console.log(this.ticketArray)
    this.start(this.viewRecord.status,index)
  }
  //Conforming to Delete Record
  deleteconformation=(del_index:any,key)=>
  {
    this.filterCatagory.splice(del_index,1);
    for(let i=0;i<this.ticketArray.length;i++)
    {
      if(this.ticketArray[i].Ticket_No==key)
      {
        this.ticketArray.splice(i,1);
        this.deleteModal.hide()
        break;
      }
    }
  }
  notconformation=()=>
  {
    this.deleteModal.hide()
  }
  NoUpdate()
  {
    this.editModal.hide()
  }


  start(status,Ticket)
  {

    if(status=="Open")
    {
      this.viewRecord.status="Start"
      let bool = true;
      this.strt=false;
      this.process=true
      this.resol=false;
      this.filterCatagory.forEach((EachRecord)=>{
        if(bool) {
          if (EachRecord.Ticket_No== Ticket) {
            EachRecord.Status=this.viewRecord.status;
            bool=false;
          }
        }
      })
      this.ticketArray.forEach((EachRecord)=>{
        if(bool) {
          if (EachRecord.Ticket_No== Ticket) {
            EachRecord.Status=this.viewRecord.status;
            bool=false;
          }
        }
      })

    }
  }
  NewUser()
  {
    this.router.navigateByUrl('/users')
  }
  proces(Ticket)
  {
    this.viewRecord.status="Resolve"
    let bool = true;
    this.strt=false
    this.resol=true;
    this.process=false
    this.filterCatagory.forEach((EachRecord)=>{
      if(bool) {
        if (EachRecord.Ticket_No== Ticket) {
          EachRecord.Status=this.viewRecord.status;
          bool=false;
        }
      }
    })
    this.ticketArray.forEach((EachRecord)=>{
      if(bool) {
        if (EachRecord.Ticket_No== Ticket) {
          EachRecord.Status=this.viewRecord.status;
          bool=false;
        }
      }
    })



  }
  resolv(Ticket)
  {
    this.viewRecord.status="Close"
    let bool = true;
    this.filterCatagory.forEach((EachRecord)=>{
      if(bool) {
        if (EachRecord.Ticket_No== Ticket) {
          EachRecord.Status=this.viewRecord.status;
          bool=false;
        }
      }
    })
    this.filterCatagory.forEach((EachRecord)=>{
      if(bool) {
        if (EachRecord.Ticket_No== Ticket) {
          EachRecord.Status=this.viewRecord.status;
          bool=false;
        }
      }
    })
    this.viewModal.hide()
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
/////////////////////////////////////////////
}
