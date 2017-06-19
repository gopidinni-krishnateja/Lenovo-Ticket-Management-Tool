const mongoose = require('mongoose');
const expect = require('chai').expect;

const teamsDAO = require(process.cwd() + '/server/api/teams/dao/teams-dao');
const setupMongoose = require('../../_helpers/db').setupMongoose;



describe('teamsDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    teamsDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
