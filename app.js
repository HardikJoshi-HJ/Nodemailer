const express = require('express');
const sendMail = require('./controller/sendMail');

let PORT = 5000 || process.env.PORT ;
const app = express();

app.get('/',  (req,res) => {
    res.send('New Server')
})


app.get('/mail', sendMail)


const start = async () => {
    app.listen(PORT, () => {
        console.log("Server started on port: " +PORT);
    })
}

start();