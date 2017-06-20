
import Promise from "bluebird";
import models from "../../../../server/models"
import _ from "lodash";
<<<<<<< HEAD
import moment from "moment";
=======
>>>>>>> develop
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
<<<<<<< HEAD
        startDate: new Date(_reqBody.startDate.year, _reqBody.startDate.month-1, _reqBody.startDate.day),
        endDate:new Date(_reqBody.endDate.year, _reqBody.endDate.month-1, _reqBody.endDate.day),
        userType:_reqBody.userType,
        dob:new Date(_reqBody.dob.year, _reqBody.dob.month-1, _reqBody.dob.day),
=======
        startDate: _reqBody.startDate,
        endDate:_reqBody.endDate,
        userType:_reqBody.userType,
        dob:_reqBody.dob,
>>>>>>> develop
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
<<<<<<< HEAD
          startDate:new Date(_reqBody.startDate.year,_reqBody.startDate.month-1,_reqBody.startDate.day),
          endDate:new Date(_reqBody.endDate.year,_reqBody.endDate.month-1,_reqBody.endDate.day),
          userType:_reqBody.userType,
          dob:new Date(_reqBody.dob.year,_reqBody.dob.month-1,_reqBody.dob.day)
        },
        { where: { id: _reqBody.id}, returning: true, plain:true}
      ).then((users) => {
        resolve(users);
=======
          startDate: _reqBody.startDate,
          endDate:_reqBody.endDate,
          userType:_reqBody.userType,
          dob:_reqBody.dob,
        },
        { where: { id: _reqBody.id}, returning: true, plain:true}
      ).then((updateResponse) => {
        res.send(updateResponse[1].dataValues);
>>>>>>> develop
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
<<<<<<< HEAD
      console.log('getById Dao')
      models.users.findAll({
        attributes:['id','firstName','lastName','dob','email','startDate'],
        where:{$or:[{firstName:_id},{lastName:_id},{dob: new Date(_id.dob.year,_id.dob.month-1,_id.dob.day).getDataValue('myTimestamp')}]},
      }).then((users) => {
        console.log(users)
        resolve(users)

      })

    })
  }


=======
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
>>>>>>> develop
}
