'use strict';
const userType=require("../enums/userType");
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dob:DataTypes.DATE,
    startDate:DataTypes.DATE,
    endDate:DataTypes.DATE,
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
