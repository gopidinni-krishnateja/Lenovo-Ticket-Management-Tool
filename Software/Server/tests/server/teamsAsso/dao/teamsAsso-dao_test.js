const mongoose = require('mongoose');
const expect = require('chai').expect;

const teamsAssoDAO = require(process.cwd() + '/server/api/teamsAsso/dao/teamsAsso-dao');
const setupMongoose = require('../../_helpers/db').setupMongoose;



describe('teamsAssoDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    teamsAssoDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
