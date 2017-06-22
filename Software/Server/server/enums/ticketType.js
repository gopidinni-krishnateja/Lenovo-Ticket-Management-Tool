/**
 * Created by darlz on 22-Jun-17.
 */
const ticketType = {
  "MOBILE": { code: "MOBILE", value: "mobile" },
  "LAPTOP": { code: "LAPTOP", value: "laptop" },
};

let ticketTypeObj = {
  values: Object.keys(ticketType),
  value(code) {
    return ticketType[code].code;
  }
};

ticketTypeObj = Object.assign(ticketType, ticketTypeObj);
module.exports = ticketTypeObj;
