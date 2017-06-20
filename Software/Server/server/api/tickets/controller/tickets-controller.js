import ticketsDAO from '../dao/tickets-dao';

export default class ticketsController {
  static createNew(req, res) {
    const _reqBody = req.body;
    ticketsDAO.createNew(_reqBody, res)
      .then(tickets => {
        res.status(201)
          .json( tickets).send(tickets)
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

    ticketsDAO
      .getAll(_query)
      .then(result => {
        res.status(200);
        res.json(new SuccessResponse(models.tickets.ticketName, models.tickets.ticketDiscription, models.tickets.ticketCategory, models.tickets.ticketPriorty, models.tickets.CreatedUser, models.tickets.AssignedByUser, models.tickets.AssignedToUser, tickets, result.rows, {
          count: result.count,
          limit: req.query.limit
        }));
      })
      .catch(error => res.status(400).json(error));

  }
}

