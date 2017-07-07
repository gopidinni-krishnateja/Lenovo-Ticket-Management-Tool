
import Promise from "bluebird";
import models from "../../../../server/models"
import _ from "lodash";
import moment from "moment";
export  default class teamsDAO
{
  static createNew(request,res) {

    return new Promise((resolve, reject) => {
      let _reqBody = request;
      //logger.info(`Create: ${JSON.stringify(_reqBody)}`);
      models.teams.create({
        teamName:_reqBody.teamName,
        teamDiscription:_reqBody.teamDiscription,
      }).then((teams) => {
        res.send(teams)
        resolve(teams);
      }, (error) => {
        reject(error);
      });
    });
  }
  static update(_reqBody,res) {
    return new Promise((resolve, reject) => {
      models.teams.update({
          teamName:_reqBody.teamName,
          teamDiscription:_reqBody.teamDiscription,
        },
        { where: { id: _reqBody.id}, returning: true, plain:true}
      ).then((teams) => {
        resolve(teams);
      }, (error) => {
        reject(error);
      });
    });
  }
  static removeById(_id,res) {
    return new Promise((resolve, reject) => {
      models.teams
        .findById(_id)
        .then(teams => {
          if (!teams) {
            return reject(404);
          }
          return teams.destroy()
            .then(() => {resolve(res.send("Deleted Successfully "+_id)); }, (error) => reject(error));
        }, (error) => {
          //logger.error(`Internal error while deleting user: ${error}`);
          reject(error);
        });
    });
  }
  static getAll(queryParams,res) {
    return new Promise((resolve, reject) => {
      models.teams
        .findAll({})
        .then(teams => {
          resolve(teams)
        }, (error) => {
          reject(error);
        });
    });
  }
  static getById(_id) {
    return new Promise((resolve, reject) => {
      models.teams.findAll({
        attributes:['id'],
        where:{$or:[{id:_id}]},
      }).then((teams) => {
        console.log(teams)
        resolve(teams)

      })

    })
  }


}

