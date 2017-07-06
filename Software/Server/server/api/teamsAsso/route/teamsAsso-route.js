import teamsAssoController from '../controller/teamsAsso-controller';

export default class teamsAssoRoutes {
  static init(router) {
    router
      .route('/api/teamsasso')
      .get(teamsAssoController.getAll)
      .post(teamsAssoController.createNew);

    router
      .route('/api/teamsasso/:id/:Id')
      .delete(teamsAssoController.removeById);
    router
      .route('/api/teamsasso/:id')
      .get(teamsAssoController.getByTeamId)
    router
      .route('/api/usersasso/:id')
      .get(teamsAssoController.getByUserId)
  }
}
