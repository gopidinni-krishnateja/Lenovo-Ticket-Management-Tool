/**
 * Created by darlz on 25-Jun-17.
 */

import ErrorResponse from "../../utils/ErrorResponse";
export default class userValidator {

  static validateEmailNew(req, res, next) {

    req.checkBody("email", new ErrorResponse(422, "Email id is required")).notEmpty().isEmail();
    req.checkBody("email", new ErrorResponse(422, "Client already exists with same email id")).isUniqueClient();

    userValidator.proceedReq(req, res, next);
  }
  static proceedReq(req, res, next) {
    req.asyncValidationErrors().then(function (res) {
      next();
    }, function (errors) {
      let _customizedErrors = [];
      _.forEach(errors, (error)=>{
        _customizedErrors.push(error.msg)
      });
      console.log(JSON.stringify(_customizedErrors));
      if (errors) {
        return res.status(400).send(_customizedErrors);
      }
    });
  }
}
