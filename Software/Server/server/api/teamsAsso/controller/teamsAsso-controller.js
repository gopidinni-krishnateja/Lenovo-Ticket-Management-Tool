import teamsAssoDAO from '../dao/teamsAsso-dao';

export default class teamsAssoController {
  static createNew(req, res) {
    console.log("fgdgfdg");
    const _reqBody = req.body;
    teamsAssoDAO.createNew(_reqBody, res)
      .then(teamsAssos => {
        console.log("ooooo");
        res.status(201)
          .json(teamsAssos);
      })
  }
  static update(req, res) {
    const _reqBody = req.body;

    teamsAssoDAO.update(_reqBody, res)
      .then(teamsAssos => {
        res.status(201)
          .json(teamsAssos).send(teamsAssos);
      })
      .catch(error => {
        if (error === 404) {
          return res.status(404)
            .json(new ErrorResponse("404", `users data is not found with id @ ${reqBody.id}`));
        }

      });
  }

  static removeById(req, res) {
    teamsAssoDAO
      .removeById(req.params.id, res)
      .then(() => res.status(204).end())
      .catch(error => {
        if (error === 404)
          res.status(400).json(error);
      });
  }

  static getAll(req, res) {
    const _query = req.query;

    teamsAssoDAO.getAll(_query)
      .then(teamsAssos => {
        res.status(200).json(teamsAssos);
      })



  }
  static getById(req, res) {
    let _id = req.params.id;
    console.log(req.params.id)
    teamsAssoDao.getById(req.params.id)
      .then((teamsAssos)=>{
        res.status(200).json(teamsAssos);
      })
  }
}
