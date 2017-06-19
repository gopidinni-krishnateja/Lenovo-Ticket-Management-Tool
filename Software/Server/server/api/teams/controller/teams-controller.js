import teamsDAO from '../dao/teams-dao';

export default class teamsController {
  static getAll(req, res) {
    teamsDAO
      .getAll()
      .then(teamss => res.status(200).json(teamss))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _teams = req.body;

    teamsDAO
      .createNew(_teams)
      .then(teams => res.status(201).json(teams))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;

    teamsDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
