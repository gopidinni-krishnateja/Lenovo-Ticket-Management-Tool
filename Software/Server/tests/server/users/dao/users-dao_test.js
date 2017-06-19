const mongoose = require('mongoose');
const expect = require('chai').expect;

const usersDAO = require(process.cwd() + '/server/api/users/dao/users-dao');
const setupMongoose = require('../../_helpers/db').setupMongoose;



describe('usersDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    usersDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
