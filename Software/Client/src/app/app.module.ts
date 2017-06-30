import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AppComponent } from './app.component';
import { TicketsCategoryComponent } from './tickets-category/tickets-category.component';
import {SelectModule} from 'ng2-select';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import {DataTableModule} from "angular2-datatable";
import {routes} from './router';
import { ModalModule } from 'ngx-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { WizardModule } from 'ng2-archwizard';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { TeamsComponent } from './teams/teams.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';
import { CreateTeamsComponent } from './create-teams/create-teams.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule( {
  declarations: [
    AppComponent,
    TicketsCategoryComponent,
    CreateTicketComponent,
    UsersComponent,
    LoginComponent,
    HeaderComponent,
    TeamsComponent,
    EditTicketComponent,
    CreateTeamsComponent,
    ViewUserComponent,
    EditUserComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormsModule,
    SelectModule,
    DataTableModule,
    routes,
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    NgbModule,
    WizardModule
  ],
  entryComponents : [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
