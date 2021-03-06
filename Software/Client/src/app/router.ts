/**
 * Created by sematic on 26/5/17.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {TicketsCategoryComponent} from './tickets-category/tickets-category.component';
import {CreateTicketComponent} from './create-ticket/create-ticket.component';
import {UsersComponent} from "./users/users.component";
export const router:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:TicketsCategoryComponent},
  {path:'createticket', component:CreateTicketComponent},
  {path:'users',component:UsersComponent}
];
export const routes:ModuleWithProviders=RouterModule.forRoot(router);
