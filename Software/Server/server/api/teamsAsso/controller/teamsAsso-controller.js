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
   let teamId=(req.params.Id)
    let userId=(req.params.id)
    teamsAssoDAO
      .removeById(teamId,userId, res)
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
        res.send(teamsAssos);
      }).catch(error => {
      if (error === 404)
        res.status(400).json(error);
    });



  }
  static getByUserId(req, res) {
    let _id = req.params.id;
    console.log(req.params.id)
    teamsAssoDAO.getByUserId(req.params.id)
      .then((teamsAssos)=>{
      console.log(teamsAssos)
        res.status(200).json(teamsAssos);
      })
  }
  static getByTeamId(req,res){
    console.log("in it")
    console.log(req.params.id)
    let id=req.params.id;
    teamsAssoDAO.getByTeamId(id)
      .then((teamsAssos)=>{
        res.status(200).json(teamsAssos);
      })
  }
  /*static _getId(req,res){
    console.log("in ID")
    let id=req.params.id;
    teamsAssoDAO._getId(id)
      .then((teamsAssos)=>{
        res.status(200).json(teamsAssos);
      })
  }*/
}
