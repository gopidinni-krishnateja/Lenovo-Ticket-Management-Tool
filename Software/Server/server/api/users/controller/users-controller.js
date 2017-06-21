import usersDAO from '../dao/users-dao';

export default class usersController {
  static createNew(req, res) {
    const _reqBody = req.body;
    usersDAO.createNew(_reqBody, res)
      .then(users => {
        console.log("ooooo");
        res.status(201)
          .json(users);

      })
      .catch(error => {

      });
  }

  static update(req, res) {
    const _reqBody = req.body;

    usersDAO.update(_reqBody, res)
      .then(users => {
        res.status(201)
          .json(users).send(users);
      })
      .catch(error => {
        if (error === 404) {
          return res.status(404)
            .json(new ErrorResponse("404", `users data is not found with id @ ${reqBody.id}`));
        }

      });
  }

  static removeById(req, res) {
    usersDAO.removeById(req.params.id, res)
      .then(() => res.status(204).end())
      .catch(error => {
        if (error === 404)
          res.status(400).json(error);
      });
  }

  static getAll(req, res) {
    const _query = req.query;
    console.log("getALL")
    usersDAO.getAll(_query)
      .then(users => {
        var data=JSON.stringify(users)
       res.send(data);
      })
  }
  static getById(req,res){
    let _id = req.params.id;
    usersDAO.getById(req.params.id)
      .then((users)=>{
        res.status(200).json(users).send(users);
      })
      .catch((error=>res.json(error)))
  }
}
