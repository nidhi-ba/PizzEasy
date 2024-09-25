const homeController = require('../app/controllers/homeController');  // Corrected
const authController = require('../app/controllers/authController');  // 
const cartController = require('../app/controllers/customers/cartcontroller');  // Corrected

function initRoutes(app) {
    app.get('/', homeController().index);  // Call the controller's function correctly

    app.get('/cart', cartController().cart);

    app.get('/login', authController().login)
    app.get('/register', authController().register);
}

module.exports = initRoutes;
