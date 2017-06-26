import Promise from "bluebird";
import models from "../../../../server/models"
import _ from "lodash";
export  default class ticketsDAO
{
  static createNew(request,res) {

    return new Promise((resolve, reject) => {
      let _reqBody = request;

      //logger.info(`Create: ${JSON.stringify(_reqBody)}`);
      models.tickets.create({
        ticketName: request.ticketName,
        ticketDiscription: request.ticketDiscription,
        ticketCategory: request.ticketCategory,
        ticketPriorty: request.ticketPriorty,
        ticketStatus: request.ticketStatus,
        ticketType:request.ticketType,
        CreatedUser: request.CreatedUser,
        AssignedToUser: request.AssignedToUser,
        AssignedByUSer: request.AssignedByUSer,
      }).then((tickets) => {
        //console.log(JSON.stringify(tickets))
        resolve(tickets);
      }, (error) => {
        reject(error);
      });
    });
  }
  static update(_reqBody,res) {
    return new Promise((resolve, reject) => {

      models.tickets.update({
          ticketName: _reqBody.ticketName,
          ticketDiscription: _reqBody.ticketDiscription,
          ticketCategory: _reqBody.ticketCategory,
          ticketPriorty: _reqBody.ticketPriorty,
          ticketStatus: _reqBody.ticketStatus,
          CreatedUser: _reqBody.CreatedUser,
          AssignedToUser: _reqBody.AssignedToUser,
          AssignedByUSer: _reqBody.AssignedByUSer,
          ticketType:_reqBody.ticketType,
        },
        { where: { id: _reqBody.id}, returning: true, plain:true}
      ).then((updateResponse) => {
        res.send(updateResponse[1].dataValues);

      }, (error) => {
        reject(error);
      });
    });
  }
  static removeById(_id,res) {
    return new Promise((resolve, reject) => {
      models.tickets
        .findById(_id)
        .then(tickets => {

          if (!tickets) {
            return reject(404);
          }

          return tickets.destroy()
            .then(() => {resolve(res.send("Deleted Successfully "+_id)); }, (error) => reject(error));
        }, (error) => {
          //logger.error(`Internal error while deleting user: ${error}`);
          reject(error);
        });
    });
  }
  static getAll(queryParams,res) {
    return new Promise((resolve, reject) => {
      console.log(models.tickets);
      models.tickets
        .findAll({})
        .then(tickets => {
          /*console.log("in users: "+ JSON.stringify(tickets));*/
          resolve(tickets);
        }, (error) => {
          reject(error);
        });
    });
  }
  static getById(_id) {
      return new Promise((resolve, reject) => {
        models.tickets.findOne({where: {id: _id}})
          .then((tickets) => {
            console.log(tickets)
            resolve(tickets)

          })
      })



  }

}
