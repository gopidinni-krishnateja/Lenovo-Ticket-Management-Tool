import Promise from "bluebird";
import models from "../../../../server/models"
import _ from "lodash";
import moment from "moment";
export  default class userDAO
{
  static createNew(request,res) {

    return new Promise((resolve, reject) => {
      let _reqBody = request;
      //logger.info(`Create: ${JSON.stringify(_reqBody)}`);
      console.log("in DAO")
      console.log(_reqBody)
      models.users.create({
        firstName:_reqBody.firstName,
        lastName:_reqBody.lastName,
        email:_reqBody.email,
        password:_reqBody.password,
        userType:_reqBody.userType,
        dob:_reqBody.dob,
      }).then((users) => {
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
          startDate:new Date(_reqBody.startDate.year,_reqBody.startDate.month-1,_reqBody.startDate.day),
          endDate:new Date(_reqBody.endDate.year,_reqBody.endDate.month-1,_reqBody.endDate.day),
          userType:_reqBody.userType,
          dob:new Date(_reqBody.dob.year,_reqBody.dob.month-1,_reqBody.dob.day)
        },
        { where: { id: _reqBody.id}, returning: true, plain:true}
      ).then((users) => {
        resolve(users);
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
        .findAll({})
        .then(users => {
          resolve(users);
        }, (error) => {
          reject(error);
        });
    });
  }
  static getById(_id) {
    if(_id.includes('@'))
    {
      return new Promise((resolve, reject) => {

        models.users.findOne({where: {email: _id}})
          .then((users) => {
            console.log(users)
            resolve(users)

          })
      })
    }

    else
    {
      return new Promise((resolve, reject) => {

        models.users.findOne({where: {id: _id}})
          .then((users) => {
            console.log(users)
            resolve(users)

          })
      })
    }


  }



}
