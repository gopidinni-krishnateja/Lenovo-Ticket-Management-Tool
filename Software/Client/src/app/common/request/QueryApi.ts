import {Http} from "@angular/http";
import {ClientEndPoint} from "./ClientEndPoint";
import {Injectable} from "@angular/core";
/**
 * Created by darlz on 20-Jun-17.
 */
@Injectable()
export class QueryApi {
  constructor(private http: Http) {
  }

  doPost(url:string, params: any) {
    alert("in QueryApi")
    console.log("in QueryApi")
    url = ClientEndPoint(url, params);
    return this.http.post(url, params );
  }
  doget(url:any)
  {
    url=ClientEndPoint(url,null);
    return this.http.get(url);
  }
  doGet(url: string, params: any) {
    url = ClientEndPoint(url, params);
    return this.http.get(url, params );
  }
  doPut(url: string, params: any) {
    url = ClientEndPoint(url, params);
    return this.http.put(url, params);
  }
  doDelete(url: string, params: any) {
    url = ClientEndPoint(url, params);
    return this.http.delete(url, params);
  }

}
