var users = [
	{
		name: 'Preston McNeil',
    		password: 'password1',
    		friends: ['Lindsey Mayer', 'Terri Ruff']
  	},
  	{
    		name: 'Ryan Rasmussen',
    		password: '$akgfl#',
    		friends: ['Lindsey Mayer']
    	},
    	{
    		name: 'Terri Ruff',
    		password: 'hunter2',
    		friends: ['Lindsey Mayer', 'Preston McNeil']
    	},
    	{
    		name: 'Lindsey Mayer',
    		password: '777mittens777',
    		friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
    	}
];

module.exports = {
    login: function (req, res, next) {
        console.log(req.session);
        req.session.currentUser = users.filter(function (user) {
            return user.name === req.body.name && user.password === req.body.password;
        })[0];
        req.session.currentUser ? res.send({userFound : true}) : res.send({userFound : false}) 
    },

    changeLogin: function (req, res, next) {
        if (req.body.name) {
            req.session.currentUser.name = req.body.name;
        }
        if (req.body.password) {
             req.session.currentUser.password = req.body.password;
         }
         res.status(200).json({'name': req.session.currentUser.name, 'password': req.session.currentUser.password})
    }
}