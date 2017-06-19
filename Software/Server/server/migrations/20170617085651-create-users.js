const userType =require("../enums/userType")
'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      dob:{
        type:Sequelize.DATE
      },
      startDate: {
        type:Sequelize.DATE
      },
      endDate : {
        type:Sequelize.DATE
      },
      email: {
        type:Sequelize.STRING
      },
      password: {
        type:Sequelize.STRING
      },
      userType: {
        type: Sequelize.ENUM,
        values: userType.values,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};
