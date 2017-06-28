'use strict';
const userType=require("../enums/userType");
module.exports = function(sequelize, DataTypes) {
  var teams = sequelize.define('teams', {
    teamName: DataTypes.STRING,
    teamDiscription: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });
  return teams;
};
