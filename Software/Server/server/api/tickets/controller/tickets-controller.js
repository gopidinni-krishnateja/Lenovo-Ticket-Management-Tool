import ticketsDAO from '../dao/tickets-dao';

export default class ticketsController {
  static createNew(req, res) {
    const _reqBody = req.body;
    ticketsDAO.createNew(_reqBody, res)
      .then(tickets => {
        res.status(201)
          .json( tickets).send(tickets);
      })
      .catch(error => {
      });
  }

  static update(req, res) {
    const _reqBody = req.body;

    ticketsDAO.update(_reqBody, res)
      .then(tickets => {
        res.status(201)
          .json(tickets).send(tickets);
      })
      .catch(error => {
        if (error === 404) {
          return res.status(404)
            .json(new ErrorResponse("404", `users data is not found with id @ ${reqBody.id}`));
        }

      });
  }

  static removeById(req, res) {
    ticketsDAO
      .removeById(req.params.id, res)
      .then(() => res.status(204).end())
      .catch(error => {
        if (error === 404)
          res.status(400).json(error);
      });
  }

  static getAll(req, res) {
    const _query = req.query;
    ticketsDAO.getAll(_query)
      .then(tickets => {
        res.status(200).json(tickets).send(tickets);
      })
  }
}

