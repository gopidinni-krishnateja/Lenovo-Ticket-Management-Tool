import Promise from "bluebird";
import models from "../../../../server/models"
export  default class teamsAssoDao
{
  static createNew(request,res) {

    return new Promise((resolve, reject) => {
      let _reqBody = request;
      models.teamsAssos.create({
        teamId: _reqBody.teamId,
        userId: _reqBody.userId,
      }).then((teamsAssos) => {
        resolve(teamsAssos);
      }, (error) => {
        reject(error);
      });
    });
  }
  static update(_reqBody,res) {
    return new Promise((resolve, reject) => {

      models.teamsAssos.update({
          teamId: request.teamId,
          userId: request.userId,
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
      models.teamsAssos
        .findById(_id)
        .then(teamsAssos => {

          if (!teamsAssos) {
            return reject(404);
          }

          return teamsAssos.destroy()
            .then(() => {resolve(res.send("Deleted Successfully "+_id)); }, (error) => reject(error));
        }, (error) => {
          //logger.error(`Internal error while deleting user: ${error}`);
          reject(error);
        });
    });
  }
  static getAll(queryParams,res) {
    return new Promise((resolve, reject) => {
      console.log(models.teamsAsso);
      models.teamsAssos
        .findAll({})
        .then(teamsAssos => {
          /*console.log("in users: "+ JSON.stringify(teamAssos));*/
          resolve(teamsAssos);
        }, (error) => {
          reject(error);
        });
    });
  }
  static getById(_id) {
    return new Promise((resolve, reject) => {
      models.teamAssos.findOne({where: {id: _id}})
        .then((teamsAssos) => {
          console.log(teamsAssos)
          resolve(teamsAssos)

        })
    })



  }
}



