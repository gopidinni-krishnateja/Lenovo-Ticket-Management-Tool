import ticketsController from '../controller/tickets-controller';

export default class ticketsRoutes {
  static init(router) {
    router
      .route('/api/tickets')
      .get(ticketsController.getAll)
      .put(ticketsController.update)
      .post(ticketsController.createNew);

    router
      .route('/api/tickets/:id')
      .delete(ticketsController.removeById)
    .get(ticketsController.getById);
  }
}
