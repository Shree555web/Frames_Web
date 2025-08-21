// const express = require('express'); //This imports Express, which helps us create the web server easily.
// const cors = require('cors');// This imports CORS middleware, which allows frontend (like React) to talk to your backend (Node.js) without errors.
// require('./config/db');
// const studentRoutes = require('./routes/studentRoute'); // This imports all the routes (like add, view, delete user) from the userRoutes.js file.
// const app = express();//This creates an Express app to handle requests and responses.
// const PORT = 3005;//This sets the port number. Your backend will run at http://localhost:3000.
// app.use(cors());//This enables CORS, so frontend (React, Postman, etc.) can send requests to backend.
// app.use(express.json()); // to handle JSON body
// app.get('/', (req, res) => {
//     res.send('Welcome to Node + MySQL API');
// });//
// app.use('/api/student', studentRoutes); // all user-related routes
// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });//This starts the server and shows a message in the terminal that the app is running.




const express = require('express');
const cors = require('cors');

console.log('STEP 1: Starting server setup...');

require('./config/db1'); // DB connection
console.log('STEP 2: DB config required');

// const studentRoutes = require('./routes/studentRoute');
// const billRoutes = require('./routes/billRoute');
// const LoginRoutes = require('./routes/loginRoute');
const categoryRoutes = require('./routes/abcroute');
// const productRoutes = require('./routes/productsRoute');

console.log('STEP 3: All routes loaded');

const app = express();
const PORT = 3005;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Node + MySQL API');
});

// app.use('/api/student', studentRoutes);
// app.use('/api/bill', billRoutes);
// app.use('/api', LoginRoutes);
app.use('/api/category', categoryRoutes);
// app.use('/api/Product', productRoutes);
// app.use('/uploads', express.static('uploads')); 

app.listen(PORT, () => {
  console.log(`STEP 4: Server running at http://localhost:${PORT}`);
});
