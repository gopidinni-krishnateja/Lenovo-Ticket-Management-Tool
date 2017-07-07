import ticketsController from '../controller/tickets-controller';

export default class ticketsRoutes {
  static init(router) {
    router
      .route('/api/tickets')
      .get(ticketsController.getAll)
      .post(ticketsController.createNew);

    router
      .route('/api/tickets/:id')
      .delete(ticketsController.removeById)
      .get(ticketsController.getById)
      .put(ticketsController.update)
      .patch(ticketsController.patch);


  }
}
