/**
 * Created by darlz on 17-Jun-17.
 */
const ticketCategory = {
  "SpareParts": { code: "SpareParts", value: "Spare Parts" },
  "ManufactureDefect": { code: "ManufactureDefect", value: "Manufacture Defect" },
  "PartsReplacement": { code: "PartsReplacement", value: "Parts Replacement" },
  "BatteryLeakage": { code: "BatteryLeakage", value: "Battery Leakage" },
  "ChargerDefect": { code: "ChargerDefect", value: "Charger Defect" },
  "WarrentyExtension": { code: "WarrentyExtension", value: "Warrenty Extension" },
};

let ticketCategoryObj = {
  values: Object.keys(ticketCategory),
  value(code) {
    return ticketCategory[code].code;
  }
};

ticketCategoryObj = Object.assign(ticketCategory, ticketCategoryObj);
module.exports =ticketCategoryObj;
