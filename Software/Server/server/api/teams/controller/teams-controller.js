import teamsDAO from '../dao/teams-dao';

export default class teamsController {

  static createNew(req, res) {
    const _reqBody = req.body;
    teamsDAO.createNew(_reqBody, res)
      .then(teams => {
        res.status(201)
          .json( teams).send(teams);
      })
      .catch(error => {
      });
  }

  static update(req, res) {
    const _reqBody = req.body;

    teamsDAO.update(_reqBody, res)
      .then(teams => {
        res.status(201)
          .json(teams).send(teams);
      })
      .catch(error => {
        if (error === 404) {
          return res.status(404)
            .json(new ErrorResponse("404", `teams data is not found with id @ ${reqBody.id}`));
        }

      });
  }
  static getAll(req, res) {
    const _query = req.query;

    teamsDAO.getAll(_query)
      .then(teams => {
        res.status(200).json(teams);
      })
  }

  static removeById(req, res) {
    teamsDAO
      .removeById(req.params.id, res)
      .then(() => res.status(204).end())
      .catch(error => {
        if (error === 404)
          res.status(400).json(error);
      });
  }


  static getById(req,res) {
    let _id = req.params.id;
    console.log('in Controller');
    teamsDAO.getById(_id)
      .then((teams) => {
        res.status(200).json(teams).send(teams);
      })
      .catch((error => res.json(error)))
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
