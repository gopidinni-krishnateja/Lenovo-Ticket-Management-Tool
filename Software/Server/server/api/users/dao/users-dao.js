
import Promise from "bluebird";
import models from "../../../../server/models"
import _ from "lodash";
export  default class userDAO
{
  static createNew(request,res) {

    return new Promise((resolve, reject) => {
      let _reqBody = request;
      //logger.info(`Create: ${JSON.stringify(_reqBody)}`);
      models.users.create({
        firstName:_reqBody.firstName,
        lastName:_reqBody.lastName,
        email:_reqBody.email,
        password:_reqBody.password,
        startDate: _reqBody.startDate,
        endDate:_reqBody.endDate,
        userType:_reqBody.userType,
        dob:_reqBody.dob,
      }).then((users) => {
        console.log("get")
        res.send(users)
        resolve(users);
      }, (error) => {
        reject(error);
      });
    });
  }
  static update(_reqBody,res) {
    return new Promise((resolve, reject) => {
      models.users.update({
          firstName:_reqBody.firstName,
          lastName:_reqBody.lastName,
          email:_reqBody.email,
          password:_reqBody.password,
          startDate: _reqBody.startDate,
          endDate:_reqBody.endDate,
          userType:_reqBody.userType,
          dob:_reqBody.dob,
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
      models.users
        .findById(_id)
        .then(users => {

          if (!users) {
            return reject(404);
          }
          return users.destroy()
            .then(() => {resolve(res.send("Deleted Successfully "+_id)); }, (error) => reject(error));
        }, (error) => {
          //logger.error(`Internal error while deleting user: ${error}`);
          reject(error);
        });
    });
  }
  static getAll(queryParams,res) {
    return new Promise((resolve, reject) => {
      console.log(models.users);
      models.users
        .findAndCountAll({})
        .then(users => {
          resolve(users);
        }, (error) => {
          reject(error);
        });
    });
  }
  static getById(_id) {
    return new Promise((resolve, reject) => {
      console.log('getById Dao');
      models.users.find({where: {$or: [{fistName: _id}, {lastName: _id}]}})
        .then(users => {

          if (!users) {
            return reject(404);
          }
          return resolve(users)
        }, (error) => {
          //logger.error(`Internal error while deleting user: ${error}`);
          reject(error);
        });

    })
  }
}
