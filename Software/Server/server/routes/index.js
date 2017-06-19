import UserRoutes from "../api/users/route/users-route";
import TicketRoutes from "../api/tickets/route/tickets-route"
import TeamRoutes from  "../api/teams/route/teams-route"

export default class Routes {
  static init(app, router) {
    UserRoutes.init(router)
    TicketRoutes.init(router)
    TeamRoutes.init(router);
    app.get("/api",(req,res)=> res.status(200).send({
      message:"Welcome User"
    }))
    app.use("/", router);


  }
}
