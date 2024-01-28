const express = require('express');
const cors = require('cors')


const studentsRouter  = require('./src/student/routes') 

const app = express()

app.use(cors()) // middleware 

app.use(express.json())


const PORT = 8000



app.use("/api/v1/students",studentsRouter);


app.listen(PORT,()=>console.log(`server started on ${PORT}`))