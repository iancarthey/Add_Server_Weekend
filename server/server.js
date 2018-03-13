// import express from mode_modules
let express = require('express');
//make the application
let app = express();
const PORT = 4900;
// serve our files
app.use(express.static('server/public'));
// run server!
app.listen(PORT, () => {
    console.log('app is running on port 4900');
})