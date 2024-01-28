const getStudents = "SELECT * FROM Students ORDER BY id"

const getStudentById = `SELECT * FROM Students Where id = $1`

const checkEmailExists = "SELECT * FROM Students Where email = $1"
const addStudent = "INSERT INTO Students (name,email,age,dob) VALUES ($1, $2, $3, $4)"
const deleteStudent = "DELETE FROM Students WHERE id = $1"

const updateStudentDetails = "UPDATE Students SET name = $2 , email = $3, age= $4, dob = $5 WHERE id = $1"

module.exports= {
    getStudents,
    getStudentById,
    checkEmailExists,
    addStudent,
    deleteStudent,
    updateStudentDetails
}