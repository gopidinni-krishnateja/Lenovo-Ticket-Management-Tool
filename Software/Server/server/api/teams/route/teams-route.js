import teamsController from '../controller/teams-controller';

export default class teamsRoutes {
  static init(router) {
    router
      .route('/api/teams')
      .get(teamsController.getAll)
      .post(teamsController.createNew);

    router
      .route('/api/teams/:id')
      .delete(teamsController.removeById)
      .get(teamsController.getById)
      .put(teamsController.update)
  }
}
