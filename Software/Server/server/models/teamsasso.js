'use strict';
module.exports = function(sequelize, DataTypes) {
  var teamsAsso = sequelize.define('teamsAssos', {
  }, {
    tableName: "teamsAssos",
    underscore: true,
    classMethods: {
      associate: models => {
        models.teamsAssos.belongsTo(models.users, {
          foreignKey: {
            name: "userId",
            allowNull: false
          },
        })
        models.teamsAssos.belongsTo(models.teams, {
          foreignKey: {
            name: "teamId",
            allowNull: false
          },
        })
      }
    }
  })
  return teamsAsso;
}
