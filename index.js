const express = require('express');
const app = express();


app.use(express.static('./docs'));

// app.get('/weather-app', (req, res) => {
//     res.render('./docs/index.html');

// });

app.listen(3000)