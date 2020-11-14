const express = require('express');
const app = express();
const connectDB = require('./config/db');
const path = require('path');

// connect to mongodb
connectDB();

// init middleware
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => {
//   res.send('Welcome to the contact keeper API ! 📱 😀');
// });

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

// SERVE STATIC ASSETS IN PROD
if (process.env.NODE_ENV === 'production') {
  // SET STATIC FOLDER
  app.use(express.static('client/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
