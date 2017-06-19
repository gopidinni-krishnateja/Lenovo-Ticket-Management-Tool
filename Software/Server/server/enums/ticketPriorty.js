/**
 * Created by darlz on 17-Jun-17.
 */
const ticketPriorty = {
  "HIGH": { code: "HIGH", value: "high" },
  "MEDIUM": { code: "MEDIUM", value: "medium" },
  "LOW": { code: "LOW", value: "low" },
};

let ticketPriortyeObj = {
  values: Object.keys(ticketPriorty),
  value(code) {
    return ticketPriorty[code].code;
  }
};

ticketPriortyeObj = Object.assign(ticketPriorty, ticketPriortyeObj);
module.exports = ticketPriortyeObj;
