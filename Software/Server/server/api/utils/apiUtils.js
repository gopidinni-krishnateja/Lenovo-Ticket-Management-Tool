/**
 * Created by darlz on 19-Jun-17.
 */
const moment = require("moment");
export default class apiUtils {
  static getDate(date) {
    return date?moment.utc(date).format('MM-DD-YYYY'):"";
  }
}
module.exports = apiUtils;
