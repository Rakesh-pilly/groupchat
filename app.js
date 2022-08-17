const express = require("express");


const app  = express();

const PROT = process.env.PROT || 5000


app.listen(PROT, ()=> {
    console.log("this app is listting to ", PROT)
})