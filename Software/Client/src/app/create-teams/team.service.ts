/**
 * Created by darlz on 23-Jun-17.
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

export class teamService {
  constructor(private http: Http, private queryApi: QueryApi, private router: Router) { }
  addteams( params ): Observable<any> {
    return this.queryApi.doPost('teams', params)
      .map((res: Response) => {
        return res;
      })
      .catch((error: any) => {
        return Observable.throw(error.json());
      });
  }
  get():Observable<any>{
    return this.queryApi.doget('getteams')
      .map((res: Response)=>{
        return res.json();
      })
      .catch((error: any)=>{
        return Observable.throw(error.json());
      })
  }


}
