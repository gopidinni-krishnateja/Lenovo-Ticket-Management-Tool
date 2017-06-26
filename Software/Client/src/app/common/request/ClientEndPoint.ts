/**
 * Created by darlz on 20-Jun-17.
 */
import { environment } from './../../../environments/environment';
import {type} from "os";
export const users='users';
export const user='user';
export const tickets='tickets'
export const getusers='getusers'
export const teams='teams'
export const ticket='ticket'
export const getTicket='getTicket'
export const editTicket='editTicket'
export const TICKET='TICKET'
export const ClientEndPoint = (type: string, params: any)=>{


  console.log(params)
  alert("type->"+type)
  switch (type) {
    case users:
      alert("in post")
      return environment.API_ROOT + '/api/users';
    case user:
      return environment.API_ROOT + '/api/users/' + params;
    case tickets:
      return environment.API_ROOT + '/api/tickets';
    case getusers:
      return environment.API_ROOT + '/api/users';
    case teams:
      return environment.API_ROOT + '/api/teams';
    case ticket:
      return environment.API_ROOT + '/api/tickets';
    case getTicket:
      return environment.API_ROOT + '/api/tickets/'+params;
    case editTicket:
      return environment.API_ROOT + '/api/tickets/' + params.id;
    case TICKET:
      return environment.API_ROOT + '/api/tickets/'+params;
      //
   /* case tickets:
      return environment.API_ROOT + '/api/tickets';
    case teams:
      return environment.API_ROOT + '/api/teams';*/
    default:

  }

}
