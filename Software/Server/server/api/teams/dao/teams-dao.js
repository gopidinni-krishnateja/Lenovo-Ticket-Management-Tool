<<<<<<< HEAD

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
        userId:_reqBody.userId,
      }).then((teams) => {
        console.log("get")
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
          userId:_reqBody.userId,
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
      console.log(models.teams);
      models.teams
        .findAndCountAll({})
        .then(teams => {
          resolve(teams);
        }, (error) => {
          reject(error);
        });
    });
  }
  static getById(_id) {
    return new Promise((resolve, reject) => {
      console.log('getById Dao')
      models.teams.findAll({
        attributes:['id','teamName','userID'],
        where:{$or:[{teamName:_id},{userId:_id}]},
      }).then((teams) => {
        console.log(teams)
        resolve(teams)

      })

    })
  }


}
=======
/*
import mongoose from 'mongoose';
import Promise from 'bluebird';
import teamsSchema from '../model/teams-model';
import _ from 'lodash';

teamsSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    teams
    .find(_query)
    .exec(function(err, todos) {
      err ? reject(err)
      : resolve(todos);
    });
  });
}

teamsSchema.statics.createNew = (teams) => {
    return new Promise((resolve, reject) => {
      if (!_.isObject(teams)) {
        return reject(new TypeError('Todo is not a valid object.'));
      }

      var _something = new teams(teams);

      _something.save(function(err, saved) {
        err ? reject(err)
        : resolve(saved);
      });
    });
}

teamsSchema.statics.removeById = (id) => {

  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    teams
    .findByIdAndRemove(id)
    .exec(function(err, deleted) {
      err ? reject(err)
      : resolve();
    });
  });
}

const teams = mongoose.model('teams', teamsSchema);

export default teams;
*/
>>>>>>> develop
