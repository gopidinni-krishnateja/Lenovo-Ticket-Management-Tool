/**
 * Created by darlz on 17-Jun-17.
 */
const userType = {
  "ADMIN": { code: "ADMIN", value: "admin" },
  "HELPLINE": { code: "HELPLINE", value: "helpline" },
  "TECHNICAL": { code: "TECHNICAL", value: "technical" },
};

let userTypeObj = {
  values: Object.keys(userType),
  value(code) {
    return userType[code].code;
  }
};

userTypeObj = Object.assign(userType, userTypeObj);
module.exports = userTypeObj;
