import usersController from '../controller/users-controller';

export default class usersRoutes {
  static init(router) {
    router
      .route('/api/users')
      .get(usersController.getAll)
      .put(usersController.update)
      .post(usersController.createNew);



    router
      .route('/api/users/:id')
      .delete(usersController.removeById)
      .get(usersController.getById)
  }
}
