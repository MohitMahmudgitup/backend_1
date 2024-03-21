const express = require("express");
const {ConnectionMongo} = require('./connections')

const {datafile} = require('./middlewares/index')

const userRouter = require('./routes/user')

const app = express();
const port = 4000;



// connnection mongodb

ConnectionMongo("mongodb://127.0.0.1:27017/facebook").then(()=>{
  console.log("Connecting mongo")
})

//Middlewares

app.use(express.urlencoded({ extended: false }));
app.use(datafile('Data.txt'))

// Router

app.use('/api/users',userRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
