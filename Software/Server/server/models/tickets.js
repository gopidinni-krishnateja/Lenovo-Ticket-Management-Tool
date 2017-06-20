'use strict';
const ticketCategory=require("../enums/ticketCategory");
const ticketStatus=require("../enums/ticketStatus");
const ticketPriorty=require("../enums/ticketPriorty");
module.exports = function(sequelize, DataTypes) {
  var tickets = sequelize.define('tickets', {
    ticketName: DataTypes.STRING,
    ticketDiscription: DataTypes.STRING,
    ticketCategory: {
      type: DataTypes.ENUM,
      values: ticketCategory.values,
      allowNull: false
    },

    ticketStatus: {
      type: DataTypes.ENUM,
      values: ticketStatus.values,
      allowNull: false
    },
    ticketPriorty: {
      type: DataTypes.ENUM,
      values: ticketPriorty.values,
      allowNull: false
    },
  }, {
    classMethods: {
      associate: function(models) {
        tickets.hasMany(models.users,{
          foreignKey:{
            CreatedUser:"id",
            AssignedByUser:"id",
            AssignedToUser:"id",
          },
          onDelete: "CASCADE"
        })
      }
    }
  });
  return tickets;
};
