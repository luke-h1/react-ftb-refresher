const express = require('express');
const app = express();
const connectDB = require('./config/db');


// connect to mongodb
connectDB();

// init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('Welcome to the contact keeper API ! 📱 😀');
});

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
// on lesson auth middleware 