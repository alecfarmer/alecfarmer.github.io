const mongoose = require('mongoose');

//testdb is name of database, it will automatically make it
mongoose.connect('mongodb+srv://Alec:alizOh9qe7g5xdaA@cscluster-mptjh.mongodb.net/test?retryWrites=true&w=majority', {useUnifiedTopology:true, useNewUrlParser:true})
.then(()=> console.log("Connected to mongodb..."))
.catch((err => console.error("could not connect to mongodb...", err)));

const schema = new mongoose.Schema({
    name: String
});

async function createMessage(){
    const result = await message.save();  
    console.log(result);
}

//this creates a Message class in our app
const Message = mongoose.model('Message', schema);
const message = new Message({
    name:'Hello World'
});

createMessage();