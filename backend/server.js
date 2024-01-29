const express = require('express');
const cors = require('cors')

require("dotenv").config()
// console.log(process.env.PORT);
const PORT = process.env.PORT || 8000;





const studentsRouter  = require('./src/student/routes') 

const app = express()

app.use(cors()) // middleware 

app.use(express.json())





app.use(process.env.routeLink,studentsRouter);


app.listen(PORT,()=>console.log(`server started on ${PORT}`))