'use strict';
const userType=require("../enums/userType");
<<<<<<< HEAD
import apiUtils from "../api/utils/apiUtils";
=======
>>>>>>> develop
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
<<<<<<< HEAD
    dob:
  {
    type:DataTypes.DATE,
    allowNull: false,
    get: function() {
      return apiUtils.getDate(this.getDataValue('dob'));
    }
  },
    endDate:{
      type:DataTypes.DATE,
      allowNull: false,
      get: function() {
        return apiUtils.getDate(this.getDataValue('endDate'));
      }
    },
    startDate:
      {
        type:DataTypes.DATE,
        allowNull: false,
        get: function() {
          return apiUtils.getDate(this.getDataValue('startDate'));
        }
      },
=======
    dob:DataTypes.DATE,
    startDate:DataTypes.DATE,
    endDate:DataTypes.DATE,
>>>>>>> develop
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
