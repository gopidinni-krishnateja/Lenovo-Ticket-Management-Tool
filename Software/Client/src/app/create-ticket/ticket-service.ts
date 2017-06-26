/**
 * Created by darlz on 20-Jun-17.
 */
import {Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { RequestUtils } from '../common/request/RequestUtils';
import { QueryApi } from '../common/request/QueryApi';
@Injectable()
export class ticketService {
  constructor(private http: Http, private queryApi: QueryApi, private router: Router) { }
  addticket( params ): Observable<any> {
    return this.queryApi.doPost('tickets', params)
      .map((res: Response) => {
        return res;
      })
      .catch((error: any) => {
        return Observable.throw(error.json());
      });
  }
  get():Observable<any>{
    return this.queryApi.doget('ticket')
      .map((res: Response)=>{
        return res.json();
      })
      .catch((error: any)=>{
        return Observable.throw(error.json());
      })
  }
  getTicket( params ): Observable<any> {
    return this.queryApi.doGet('getTicket',params)
      .map((res: Response) => {
        console.log("in service");
        return res.json();
      })
      .catch((error: any) => {
        return Observable.throw(error.json().error || 'Server error');
      });
  }
  editTicket( params ): Observable<any> {
    return this.queryApi.doPut('editTicket', params)
      .map((res: Response) => {
        return res;
      })
      .catch((error: any) => {
        return Observable.throw(error.json());
      });
  }
  deleteTicket(params) {
    return this.queryApi.doDelete('TICKET', params)
      .map((res: Response) => {
        return res;
      })
      .catch((error: any) => {
        return Observable.throw(error.json() || 'Server error');
      });
  }


}
