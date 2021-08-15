import express from 'express';
import Router from 'express';
import Mongoose from 'mongoose';
import route from './route/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json({ extended:true }));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(cors());
app.use('/users', route);

const PORT = 8000;
const URL = 'mongodb://user:jay@cluster0-shard-00-00.wttam.mongodb.net:27017,cluster0-shard-00-01.wttam.mongodb.net:27017,cluster0-shard-00-02.wttam.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-ya9e3w-shard-0&authSource=admin&retryWrites=true&w=majority';


Mongoose.connect(URL, {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running in ${PORT}`);
    })
}).catch(error =>{
    console.log('Error:',error.message);
})
