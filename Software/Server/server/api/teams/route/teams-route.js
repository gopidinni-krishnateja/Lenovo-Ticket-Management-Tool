import teamsController from '../controller/teams-controller';

export default class teamsRoutes {
  static init(router) {
    router
      .route('/api/teams')
      .get(teamsController.getAll)
      .post(teamsController.createNew);

    router
      .route('/api/teams/:id')
<<<<<<< HEAD
      .delete(teamsController.removeById)
      .get(teamsController.getById)
      .put(teamsController.update)
=======
      .delete(teamsController.removeById);
>>>>>>> develop
  }
}
