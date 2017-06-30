/**
 * Created by darlz on 17-Jun-17.
 */

const ticketCategory = {
  "SPAREPARTS": { code: "SPAREPARTS", value: "Spare Parts" },
  "MANUFACTUREDEFECT": { code: "MANUFACTUREDEFECT", value: "Manufacture Defect" },
  "PARTSREPLACEMENT": { code: "PARTSREPLACEMENT", value: "Parts Replacement" },
  "BATTERYLEAKAGE": { code: "BATTERYLEAKAGE", value: "Battery Leakage" },
  "CHARGERDEFECT": { code: "CHARGERDEFECT", value: "Charger Defect" },
  "WARRENTYEXTENSION": { code: "WARRENTYEXTENSION", value: "Warrenty Extension" },
};

let ticketCategoryObj = {
  values: Object.keys(ticketCategory),
  value(code) {
    return ticketCategory[code].code;
  }
};

ticketCategoryObj = Object.assign(ticketCategory, ticketCategoryObj);
module.exports =ticketCategoryObj;
