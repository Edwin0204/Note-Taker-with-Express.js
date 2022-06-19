const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//Middleware for urlencoded data
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server online in http://localhost:${PORT}.`);
  });