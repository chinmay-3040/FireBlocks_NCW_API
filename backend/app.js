import express from 'express'
const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default port

// ... (Your API endpoints and logic will go here)
import mongoDB from './db.js';
mongoDB();


//Following fucntion is an essential middlewear fucntion that is connecting front-end to the back-end.

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin" , "http://localhost:3001");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next();
})

app.use(express.json());   // enables req.body fucntion to work and access the json object..

import handleUserRoute from "./Routes/handleUser.js";
app.use('/api', handleUserRoute);



app.get('/', (req,res) =>{
    res.send('<h1>This is NCW-POC Backend</h1>');
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
