/**
 * Created by sematic on 26/5/17.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {TicketsCategoryComponent} from './tickets-category/tickets-category.component';
import {CreateTicketComponent} from './create-ticket/create-ticket.component';
import {UsersComponent} from "./users/users.component";
import {LoginComponent} from "./login/login.component";
import {TeamsComponent} from "./teams/teams.component";
import {EditTicketComponent} from "./edit-ticket/edit-ticket.component";
import {HeaderComponent} from "./header/header.component";
import {CreateTeamsComponent} from "./create-teams/create-teams.component";
import {ViewUserComponent} from "./view-user/view-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
export const router:Routes=[

  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'createticket/:id', component:CreateTicketComponent},
  {path:'createteams/:id', component:CreateTeamsComponent},
  {path:'viewusers/:id',component:ViewUserComponent},
  /*{path:'edit/:id',component:EditTicketComponent},*/
  {path:'teams',component:TeamsComponent},
  {path:'users',component:UsersComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:TicketsCategoryComponent,
    children:[
      {path:':id',component:TicketsCategoryComponent},
      {path:'edit/:id/:Id',component:EditTicketComponent}
    ]
  },
  {path:'viewusers/:id',component:ViewUserComponent,
    children:[
      {path:'edit/:Id',component:EditUserComponent}
    ]
  },
];
export const routes:ModuleWithProviders=RouterModule.forRoot(router);
