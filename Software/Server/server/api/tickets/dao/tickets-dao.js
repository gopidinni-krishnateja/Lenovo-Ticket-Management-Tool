import Promise from "bluebird";
import models from "../../../../server/models"
import _ from "lodash";
export  default class ticketsDAO
{
  static createNew(request,res) {

    return new Promise((resolve, reject) => {
      let _reqBody = request;

      var data=models.users.findById(_reqBody.AssignedByUser).then((users)=>{
        console.log(users)
      })
      console.log(data)

      //logger.info(`Create: ${JSON.stringify(_reqBody)}`);
      console.log(request.CreatedUser)

      models.tickets.create({
        ticketName: _reqBody.ticketName,
        ticketDiscription: _reqBody.ticketDiscription,
        ticketCategory: _reqBody.ticketCategory,
        ticketPriorty: _reqBody.ticketPriorty,
        ticketStatus: _reqBody.ticketStatus,

        CreatedUser: _reqBody.CreatedUser,
        AssignedToUser: _reqBody.AssignedToUser,
        AssignedByUser: _reqBody.AssignedByUser
      }).then((tickets) => {

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
          AssignedByUser: _reqBody.AssignedByUser
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
        .findAndCountAll({})
        .then(tickets => {
          console.log("in users: "+ JSON.stringify(tickets));
          resolve(tickets);
        }, (error) => {
          reject(error);
        });
    });
  }

}
