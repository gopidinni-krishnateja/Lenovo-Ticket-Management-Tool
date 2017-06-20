/**
 * Created by darlz on 17-Jun-17.
 */

const userType = require("../enums/userType");
const ticketPriorty=require("../enums/ticketPriorty")
const ticketCategory=require("../enums/ticketCategory")
module.exports = Object.freeze({
  userType: userType.values,
  ticketPriorty:ticketPriorty.values,
  ticketCategory:ticketCategory.values
});
