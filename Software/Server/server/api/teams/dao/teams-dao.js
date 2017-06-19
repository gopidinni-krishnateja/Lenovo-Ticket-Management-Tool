/*
import mongoose from 'mongoose';
import Promise from 'bluebird';
import teamsSchema from '../model/teams-model';
import _ from 'lodash';

teamsSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    teams
    .find(_query)
    .exec(function(err, todos) {
      err ? reject(err)
      : resolve(todos);
    });
  });
}

teamsSchema.statics.createNew = (teams) => {
    return new Promise((resolve, reject) => {
      if (!_.isObject(teams)) {
        return reject(new TypeError('Todo is not a valid object.'));
      }

      var _something = new teams(teams);

      _something.save(function(err, saved) {
        err ? reject(err)
        : resolve(saved);
      });
    });
}

teamsSchema.statics.removeById = (id) => {

  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    teams
    .findByIdAndRemove(id)
    .exec(function(err, deleted) {
      err ? reject(err)
      : resolve();
    });
  });
}

const teams = mongoose.model('teams', teamsSchema);

export default teams;
*/
