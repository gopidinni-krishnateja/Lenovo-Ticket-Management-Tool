import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {userService} from "../users/user.service";
import {QueryApi} from "../common/request/QueryApi";
import {ticketService} from "../create-ticket/ticket-service";
import {ModalDirective} from "ngx-bootstrap";

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css'],
  providers: [ userService, QueryApi,ticketService]
})
export class EditTicketComponent implements OnInit {
  public fla;
  public editTicket
  public id
  public ticketName
  public ticketDiscription
  public ticketCategory
  public ticketPriorty
  public ticketStatus
  public ticketType
  public CreatedUser
  public AssignedToUser
  public AssignedByUSer
  public CreatedUserName
  public AssignedToUserName
  public AssignedByUserName
  public deleteKey
  constructor(private router: Router,public _activatedRoute: ActivatedRoute,public ticketService:ticketService,public userService:userService) {
      this.fla=3;
  }
  @ViewChild('deleteModal') public deleteModal:ModalDirective;
  @ViewChild('editModal') public editModal:ModalDirective;
  @ViewChild('checkAssignUser') public checkAssignUser:ModalDirective;
  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {console.log(params)
      const id =Number(params.id);
      this.ticketService.getTicket(id).subscribe((response) => {
        this.id=response.id
        this.ticketName=response.ticketName
        this.ticketDiscription=response.ticketDiscription
        this.ticketCategory=response.ticketCategory
        this.ticketPriorty=response.ticketPriorty
        this.ticketStatus=response.ticketStatus
        this. ticketType=response.ticketType
        this.CreatedUser=response.CreatedUser
        this.AssignedToUser=response.AssignedToUser
        this.AssignedByUSer=response.AssignedByUSer
        this.userService.getUser(this.CreatedUser).subscribe((response) => {
          this.CreatedUserName=response.firstName+" "+response.lastName;
        })
        this.userService.getUser(this.AssignedToUser).subscribe((response) => {
          this.AssignedToUserName=response.firstName+" "+response.lastName;
        })
        this.userService.getUser(this.AssignedByUSer).subscribe((response) => {
          this.AssignedByUserName=response.firstName+" "+response.lastName;
        })
        if(this.AssignedToUser===0||this.AssignedToUser===null)
        {
          this.checkAssignUser.show()

        }
      })


    });

  }
  UpdatedRecord()
  {
    this.editTicket={
    "id":this.id,
    "ticketName":this.ticketName,
    "ticketDiscription":this.ticketDiscription,
    "ticketCategory":this.ticketCategory,
    "ticketPriorty":this.ticketPriorty,
    "ticketStatus":this.ticketStatus,
    "ticketType":this.ticketType,
    "CreatedUser":this.CreatedUser,
    "AssignedToUser":this.AssignedToUser,
    "AssignedByUSer":this.AssignedByUSer
  }
    this.ticketService.editTicket( this.editTicket ).subscribe((response) => {
      this.editModal.show();

      });
    }
  public delete=(key)=>{
    this.deleteKey=key
    this.deleteModal.show()
  }
  notconformation=()=>
  {
    this.deleteModal.hide()
  }
  deleteconformation(id)
  {
    this.ticketService.deleteTicket(id).subscribe((response) => {
      this.deleteModal.hide()
    });
  }
  success()
  {

    localStorage.setItem("flag","1");
    this.router.navigate(['home/'  ,{id:this.AssignedToUser}]);
    window.location.reload()

  }
  closed()
  {
    this.router.navigate(['home/'  ,{id:this.AssignedToUser}]);
    window.location.reload()
  }

}
