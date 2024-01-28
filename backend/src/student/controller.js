const pool =  require('../../db')
const queries = require('./queries')


const getStudents = (req,res)=>{
    console.log('get students')
    // res.send(`<h1>Hello </h1>`)

    pool.query(queries.getStudents,(error,results)=>{
        if(error)throw Error

        res.status(200).json(results.rows)
    })

}

const getStudentById = (req,res)=>{
    const id = Number(req.params.id)

    pool.query(queries.getStudentById, [id] , (error,results)=>{
        if(error )throw error

        res.status(200).json(results.rows)
    })
}


const addStudent = (req,res)=>{
    const {name,email,age,dob} = req.body;
    console.log( req.body );
    

    pool.query(queries.checkEmailExists,[email],(error,results)=>{
        if(results.rows.length){
            // email exists already

           return res.send('Email already exists !!')
        }
       else {
        pool.query(queries.addStudent,[name,email,age,dob] ,(error,results)=>{
            console.log(results.rows,"In backend ")
            res.status(201).send('Student added succesfully')
        })

       }
        

    })
}

const deleteStudent = (req,res)=>{
    const id = Number(req.params.id)
    pool.query(queries.getStudentById,[id],(error,results)=>{
        if(error)throw error;

        if(!results.rows.length){
            // user not found with id

            res.send(`Student not found with ${id}`)
        }

       else {
        // will delete 
        pool.query(queries.deleteStudent,[id],(error,results)=>{
            res.status(200).send(`Student with id  ${id} deleted successfully`)
        })
       }


    })
}

const updateStudentDetails = (req,res)=>{
    
    const id = Number(req.params.id)
    
    pool.query(queries.getStudentById,[id] ,(error,results) =>{
        if(error) throw error

        if(!results.rows.length){
            // user not found with id

            res.send(`Student not found with ${id}`)
        }

       else {
        const {name,email,age,dob} = req.body;
        
        pool.query(queries.updateStudentDetails,[id,name,email,age,dob],(error,results)=>{

            if(error) throw error;

            res.status(200).send('USer details updated successfully')

        })
       }
    })

}

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    deleteStudent,
    updateStudentDetails

}