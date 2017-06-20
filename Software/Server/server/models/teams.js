'use strict';
const userType=require("../enums/userType");
module.exports = function(sequelize, DataTypes) {
  var teams = sequelize.define('teams', {
    teamName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        teams.hasMany(models.users,{
          foreignKey:{
            userId:"id",
          },
          onDelete: "CASCADE"
        })
      }
    }
  });
  return teams;
};
