// James (Alec) Farmer
const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.static("public"));
app.use(express.json());

let players = [
    {id:1, name:"Jacky Bradely Jr", battingAverage:"236", position:"Outfield", team:"Boston Red Socks"},
    {id:2, name:"Whit Merrifield", battingAverage:"296", position:"Outfield", team:"Kansas City Royals"},
    {id:3, name:"Grayson Greiner", battingAverage:"207", position:"Catcher", team:"Detroit Tigers"},
    {id:4, name:"Chipper Jones", battingAverage:"303", position:"Third Base", team:"Atlanta Braves"},
    {id:5, name:"Jason Hayward", battingAverage:"261", position:"Outfield", team:"Chicago Cubs"},
    {id:6, name:"Mike Trout", battingAverage:"303", position:"Outfield", team:"Los Angeles Angels"}
];

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/players', (req,res)=>{
    res.send(players);
});

app.get('/api/players/:id',(req,res)=>{
    const player = players.find(r => r.id === parseInt(req.params.id));

    if(!player) res.status(404).send("The player with the given id was not found");

    res.send(player);
});

app.post('/api/players', (req,res)=>{
    const result = validatePlayer(req.body);
    
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    
    const player = {
        id:players.length+1,
        name:req.body.name,
        battingAverage:req.body.battingAverage,
        position:req.body.position,
        team:req.body.team
    };
    players.push(player);
    res.send(player);
});

app.put('/api/players/:id',(req,res)=>{
    const player = players.find(p => p.id === parseInt(req.params.id));
    
    if(!player) res.status(404).send("Player with given id was not found");

    const result = validatePlayer(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    player.name = req.body.name;
    player.battingAverage = req.body.battingAverage;
    player.position = req.body.position;
    player.team = req.body.team;
    res.send(player);
});

app.delete('/api/players/:id',(req,res)=>{
    const player = players.find(p => p.id===parseInt(req.params.id));

    if(!player){
        req.status(404).send("This player with the given id was not found");
    }

    const index = players.indexOf(player);
    players.splice(index,1);

    res.send(player);
});

function validatePlayer(player){
    const schema = {
        name:Joi.string().min(3).required(),
        battingAverage:Joi.string().required(),
        position:Joi.string().min(4).required(),
        team:Joi.string().min(4).required()
    };

    return Joi.validate(player,schema);
}

app.listen(3001, ()=>{
    console.log("listening on port 3000");
})