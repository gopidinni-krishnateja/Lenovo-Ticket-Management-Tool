import usersDAO from '../dao/users-dao';

export default class usersController {
  static createNew(req, res) {
    const _reqBody = req.body;
    usersDAO.createNew(_reqBody, res)
      .then(users => {
        console.log("ooooo");
        res.status(201)
          .json(new SuccessResponse(models.users.firstName, models.users.lastName, models.users.email, models.users.password, models.users.startDate, models.users.endDate, models.users.userType, models.users.dob, users));

      })
      .catch(error => {

      });
  }

  static update(req, res) {
    const _reqBody = req.body;

    usersDAO.update(_reqBody, res)
      .then(users => {
        res.status(201)
          .json(new SuccessResponse(models.users.firstName, models.users.lastName, models.users.email, models.users.password, models.users.startDate, models.users.endDate, models.users.userType, models.users.dob, users));
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
    usersDAO.getAll(_query)
      .then(users => {
        res.status(200).json(users).send(users);
      })
  }
  static getById(req,res){
    let _id = req.params.id;
    console.log('in Controller');
    usersDAO
      .getById(_id).then((users)=>{
      if(users){
        res.status(200).json(users).send(users);
      }
      else{
        res.sent('Data not Found');
        return res.status(404);
      }
    })
      .catch((error=>res.json(error)))
  }
}
