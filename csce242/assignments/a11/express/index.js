const express = require("express");
const app = express();
app.use(express.static('public'));

app.get('/',(req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/cakes', (req, res)=>{
    cakes = ["red velvet", "black forest", "cheese cake"];
    res.send(cakes);
});

app.listen(3002,()=>{
    console.log("Listening on port 3002");
});