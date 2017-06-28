'use strict';
const userType=require("../enums/userType");
module.exports = function(sequelize, DataTypes) {
  var teams = sequelize.define('teams', {
    teamName: DataTypes.STRING,
    teamDiscription: DataTypes.STRING
  }, {
    tableName: "teams",
    underscore: true,
    classMethods: {
      associate: function(models) {
        models.teams.belongsToMany(models.users, {
          through: models.teamsAssos,
          as: "users",
          foreignKey: {
            name: "userId",
            allowNull: false
          },
          onDelete: "CASCADE"
        });
      }
    }
  });
  return teams;
};
