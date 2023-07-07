const userController = require('../controller/user.controller')

module.exports = (app) => {
    app.post('/user', userController.create)
    app.get('/user', userController.getAll)
}

