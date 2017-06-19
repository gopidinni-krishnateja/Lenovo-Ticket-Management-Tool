'use strict';
const ticketCategory=require("../enums/ticketCategory");
const ticketStatus=require("../enums/ticketStatus");
const ticketPriorty=require("../enums/ticketPriorty");
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ticketName: {
        type: Sequelize.STRING
      },
      ticketDiscription: {
        type: Sequelize.STRING
      },
      ticketCategory:{
        type: Sequelize.ENUM,
        values: ticketCategory.values,
        allowNull: false
      },
      ticketStatus:{
        type: Sequelize.ENUM,
        values: ticketStatus.values,
        allowNull: false
      },
      ticketPriorty:{
        type: Sequelize.ENUM,
        values: ticketPriorty.values,
        allowNull: false
      },
      CreatedUser: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        }
      },
      AssignedByUSer: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        }
      },
      AssignedToUser: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        }
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
    return queryInterface.dropTable('tickets');
  }
};
