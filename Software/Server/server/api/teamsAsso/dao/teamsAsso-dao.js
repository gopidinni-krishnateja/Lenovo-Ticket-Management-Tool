import Promise from "bluebird";
import models from "../../../../server/models"
export  default class teamsAssoDao
{
  static createNew(request,res) {
    return new Promise((resolve, reject) => {
      console.log("int id DAO")
      let _reqBody = request;
      models.teams.findById(_reqBody.teamId).then((teams)=>{
        models.users.findById(_reqBody.userId).then((users)=>{
          teams.setUsers([users]).then(()=>{
          })
        })
      })
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
  static removeById(id,Id,res) {
    return new Promise((resolve, reject) => {
      models.teams.findById(id).then((teams)=>{
        models.users.findById(Id).then((users)=>{
          teams.removeUsers([users]).then(()=>{

          })
        })
      })

    });
  }
  static getAll(queryParams,res) {
    return new Promise((resolve, reject) => {

     /* models.teamsAssos
        .findAll({})
        .then(teamsAssos => {
          console.log(teamsAssos)
          resolve(teamsAssos);
        }, (error) => {
          reject(error);
        });*/
      models.teamsAssos.findAll({
        include: [
          {model:models.users
          },
          {
            model:models.teams
          }
        ]
      })
        .then(teamsAssos => {
          resolve(teamsAssos)
        }, (error) => {
          reject(error);
        })
    });
  }
  static getByUserId(_id) {
    console.log("in the DAO");
    console.log(_id)
    return new Promise((resolve, reject) => {
      models.teamsAssos.findOne({
        include: [
          {model:models.users,
            where:
              {id: _id},
          },
          {
            model:models.teams
          }

        ]
      }) .then(teamsAssos => {
        console.log(teamsAssos)
        resolve(teamsAssos)
      }, (error) => {
        reject(error);
      })
    })
  }
  static getByTeamId(_id) {
    return new Promise((resolve, reject) => {
      models.teamsAssos.findAll({
        include: [
          {model:models.users,
          },
          {
            model:models.teams,
            where:
              {id: _id},
          }
        ]
      })
        .then(teamsAssos => {
          resolve(teamsAssos)
        }, (error) => {
          reject(error);
        })
    })

  }
}



