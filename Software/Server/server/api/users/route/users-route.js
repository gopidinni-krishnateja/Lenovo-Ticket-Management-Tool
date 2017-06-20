import usersController from '../controller/users-controller';

export default class usersRoutes {
  static init(router) {
    router
      .route('/api/users')
      .get(usersController.getAll)
<<<<<<< HEAD
=======
      .put(usersController.update)
>>>>>>> develop
      .post(usersController.createNew);



    router
      .route('/api/users/:id')
      .delete(usersController.removeById)
      .get(usersController.getById)
<<<<<<< HEAD
      .put(usersController.update)
=======
>>>>>>> develop
  }
}
