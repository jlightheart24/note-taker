const express = require('express');
const PORT = process.env.PORT || 3010;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.listen(PORT, () => {
    console.log(`API server now on port ${[PORT]}`)
});

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);