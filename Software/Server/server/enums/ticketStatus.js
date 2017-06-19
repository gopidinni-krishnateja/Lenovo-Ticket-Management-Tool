/**
 * Created by darlz on 17-Jun-17.
 */
const ticketStatus = {
  "OPEN": { code: "OPEN", value: "open" },
  "START": { code: "START", value: "start" },
  "PROCESS": { code: "PROCESS", value: "process" },
  "CLOSE": { code: "CLOSE", value: "close" }
};

let ticketStatusObj = {
  values: Object.keys(ticketStatus),
  value(code) {
    return ticketStatus[code].code;
  }
};

ticketStatusObj = Object.assign(ticketStatus, ticketStatusObj);
module.exports = ticketStatusObj;
