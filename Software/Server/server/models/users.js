'use strict';
const userType=require("../enums/userType");

import apiUtils from "../api/utils/apiUtils";


module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,

    dob:
  {
    type:DataTypes.DATE,
    allowNull: false,
    get: function() {
      return apiUtils.getDate(this.getDataValue('dob'));
    }
  },

    email:DataTypes.STRING,
    password:DataTypes.STRING,
    userType: {
      type: DataTypes.ENUM,
      values: userType.values,
      allowNull: false
    }

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return users;
};
