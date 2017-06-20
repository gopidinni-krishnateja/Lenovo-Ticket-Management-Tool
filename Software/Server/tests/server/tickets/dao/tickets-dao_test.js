const mongoose = require('mongoose');
const expect = require('chai').expect;

const ticketsDAO = require(process.cwd() + '/server/api/tickets/dao/tickets-dao');
const setupMongoose = require('../../_helpers/db').setupMongoose;



describe('ticketsDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    ticketsDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
