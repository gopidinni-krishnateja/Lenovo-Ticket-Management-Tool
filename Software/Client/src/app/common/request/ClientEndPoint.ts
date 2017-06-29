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
export const getteams='getteams'
export const teamsAsso='teamsAsso'
export const getTeamsAsso='getTeamsAsso'
export const association='association'
export const ClientEndPoint = (type: string, params: any)=>{

  switch (type) {
    case users:
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
    case getteams:
      return environment.API_ROOT + '/api/teams';
    case teamsAsso:
      return environment.API_ROOT + '/api/teamsasso';
    case getTeamsAsso:
      return environment.API_ROOT + '/api/teamsasso'
    default:

  }

}
