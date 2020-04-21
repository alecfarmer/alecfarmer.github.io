// James Alec Farmer
const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.static("public"));
app.use(express.json());
const mongoose = require("mongoose");

// CONNECT TO DATABASE
mongoose.connect("mongodb+srv://alec:test@fpcluster-ovts8.mongodb.net/test?retryWrites=true&w=majority", {useUnifiedTopology:true, useNewUrlParser:true})
    .then(()=>console.log("Successfully connected to mongodb!"))
    .catch(err => console.error("Couldn't connect to mongdb!", err));

// DATABASE LAYOUT
const playerSchema = new mongoose.Schema ({
    name:String,
    age:Number,
    position:String,
    batThrow:String,
    commitment:String,
    gradYear:String,
    nationRanking:Number,
    stateRanking:Number,
    reviewer:String
});

const Player = mongoose.model('Player', playerSchema);

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/players', (req, res)=>{
    getPlayers(res);
});

async function getPlayers(res) {
    const players = await Player.find();
    console.log(players);
    res.send(players);
}

app.get('/api/players/:id', (req,res)=>{
    getPlayer(req.params.id, res);
});

async function getPlayer(id, res) {
    const player = await Player.findOne({_id:id});
    console.log(player);
    res.send(player);
}

app.post('/api/players', (req, res)=>{
    const result = validatePlayer(req.body);

    if(result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const player = new Player({
        name:req.body.name,
        age:req.body.age,
        position:req.body.position,
        batThrow:req.body.batThrow,
        commitment:req.body.commitment,
        gradYear:req.body.gradYear,
        nationRanking:req.body.nationRanking,
        stateRanking:req.body.stateRanking,
        reviewer:req.body.reviewer
    });

    createPlayer(player, res);
});

async function createPlayer(player, res) {
    const result = await player.save();
    console.log(result);
    res.send(player);
}

app.put('/api/players/:id', (req, res)=>{
    const result = validatePlayer(req.body);

    if(result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    updatePlayer(res, req.params.id, req.body.name, req.body.age, req.body.position, req.body.batThrow, req.body.commitment,
        req.body.gradYear, req.body.nationRanking, req.body.stateRanking, req.body.reviewer);
});

async function updatePlayer(res, id, name, age, position, batThrow, commitment, gradYear, nationRanking, stateRanking, reviewer) {
    const result = await Player.updateOne({_id:id}, {
        $set:{
            name:name,
            age:age,
            position:position,
            batThrow:batThrow,
            commitment:commitment,
            gradYear:gradYear,
            nationRanking:nationRanking,
            stateRanking:stateRanking,
            reviewer:reviewer
        }
    })

    res.send(result);
}

app.delete('/api/players/:id', (req, res)=>{
    removePlayer(res, req.params.id);
});

async function removePlayer(res, id) {
    const player = await Player.findByIdAndRemove(id);
    res.send(player);
}

function validatePlayer(player) {
    const schema = {
        name:Joi.string().min(3).required(),
        age:Joi.number().min(1).required(),
        position:Joi.string().min(3).required(),
        batThrow:Joi.string().min(2).required(),
        commitment:Joi.string().min(3).required(),
        gradYear:Joi.number().min(2).required(),
        nationRanking:Joi.number().min(1).required(),
        stateRanking:Joi.number().min(1).required(),
        reviewer:Joi.string().min(3).required()
    };

    return Joi.validate(player, schema);
}

app.listen(3000, ()=>{
    console.log("Listening on port 3004");
})