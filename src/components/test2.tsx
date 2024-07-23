// // Zdt whd server.js file drt fih hd l code 

// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('src/app/data/db.json'); 
// const middlewares = jsonServer.defaults();
// const bodyParser = require('body-parser');

// server.use(middlewares);
// server.use(bodyParser.json());

// // Custom route for login
// server.post('/TickectsNew/Login', (req, res) => {
//   const users = router.db.get('users').value();
//   const user = users.find(user => user.emailId === req.body.emailId && user.password === req.body.password);

//   if (user) {
//     res.status(200).json({ result: true, data: user });
//   } else {
//     res.status(401).json({ result: false, message: 'Invalid email or password' });
//   }
// });

// server.use(router);
// server.listen(4000, () => {
//   console.log('JSON Server is running on port 4000');
// });
// // wla kaytl3 liya cannot find module json-server