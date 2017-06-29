/**
 * Created by darlz on 25-Jun-17.
 */
import expressValidator from "express-validator";
import models from "../../server/models"
module.exports = expressValidator({
  customValidators: {
    isUniqueClient: function (email) {
      console.log("*******")
      console.log(email)
      return new Promise(function (resolve, reject) {
        models.users.findOne({where: {email: email}})
          .then(function (client) {
            if (client) {
              reject("SequelizeUniqueConstraintError");
            }
            else {
              resolve("No SequelizeUniqueConstraintError");
            }
          })
          .catch(function (error) {
            if (error) {
              reject("Internal error");
            }
          });
      });
    }
  }
})
