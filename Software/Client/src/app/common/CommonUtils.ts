/**
 * Created by darlz on 20-Jun-17.
 */
export class CommonUtils{
  static getDate(dateObg) {
    const date = dateObg.day + '-' + dateObg.month + '-' + dateObg.year;
    return new Date(date);
  }
}
