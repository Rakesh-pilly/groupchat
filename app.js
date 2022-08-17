const express = require("express");
const path = require('path');


const app  = express();

const PROT = process.env.PROT || 5000



app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(PROT, ()=> {
    console.log("this app is listting to ", PROT)
})