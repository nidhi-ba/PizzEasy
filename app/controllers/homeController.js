const Menu = require('../../models/menu'); // Ensure this path is correct

function homeController() {
    return {
        index(req, res) {
            // Fetch all pizzas from the 'menus' collection
            Menu.find()
                .then(function(pizzas) {
                    // Log pizzas data to the console
                    console.log(pizzas);

                    // Render 'home' template with pizzas data
                    return res.render('home', { pizzas: pizzas });
                })
                .catch(function(err) {
                    // Log any errors to the console
                    console.error('Error fetching pizzas:', err);
                    return res.status(500).send('Something went wrong');
                });
        }
    }
}

module.exports = homeController;
