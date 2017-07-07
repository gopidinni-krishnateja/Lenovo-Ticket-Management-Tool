import ticketsDAO from '../dao/tickets-dao';

export default class ticketsController {
  static createNew(req, res) {
    console.log("fgdgfdg");
    const _reqBody = req.body;
    ticketsDAO.createNew(_reqBody, res)
      .then(tickets => {
        console.log("ooooo");
        res.status(201)
          .json(tickets);

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
        res.status(200).json(tickets);
      })



  }
  static getById(req, res) {
    let _id = req.params.id;
    console.log(req.params.id)
    ticketsDAO.getById(req.params.id)
      .then((tickets)=>{
        res.status(200).json(tickets);
      })
  }
  static patch(req,res){
    console.log("in the Controller")
    ticketsDAO.patchData(req,res)
      .then((tickets)=>{
        res.status(201)
          .json(tickets).send(tickets);
      })
  }
}

