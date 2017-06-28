import teamsAssoController from '../controller/teamsAsso-controller';

export default class teamsAssoRoutes {
  static init(router) {
    router
      .route('/api/teamsasso')
      .get(teamsAssoController.getAll)
      .post(teamsAssoController.createNew);

    router
      .route('/api/teamsasso/:id')
      .delete(teamsAssoController.removeById);
  }
}
