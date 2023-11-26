const {pool} = require("../database");



const getAlumnos = async (request, response) => 
{
    try{
        let params = [request.query.id];
        let sql;
        if(request.query.id == null){
            sql = "SELECT * FROM students";
        }else{
            sql = "SELECT * FROM students WHERE id_students = ?";
        }
        let [result] = await pool.query(sql, params);

        response.send(result);

        console.log(result);
    }catch(err){
        console.log(err);
    }
}

const postAlumno = async (request, response) => 
{
    try{
        let params = [request.body.first_name, request.body.last_name, request.body.id_group, request.body.anno_ingreso];
        let sql = "INSERT INTO students (first_name, last_name, id_group, anno_ingreso) VALUES (?, ?, ?, ?)";
        console.log(params);
        let [result] = await pool.query(sql, params);
        response.send(result);

        console.log(result);
    }catch(err){
        console.log(err);
    }
}

const putAlumno = async (request, response) => {
    try{
        let params = [request.body.first_name, request.body.last_name, request.body.id_group, request.body.anno_ingreso ,request.body.id_students];
        let sql = "UPDATE students SET first_name = COALESCE(?, first_name), last_name = COALESCE(?, last_name), id_group = COALESCE(?, id_group), anno_ingreso = COALESCE(?, anno_ingreso) WHERE id_students = ?";

        let [result] = await pool.query(sql, params);
        response.send(result);

        console.log(params);
    }catch(err){
        console.log(err);
    }
}

const deleteAlumno = async (request, response) => {

    try{
        let params = [request.query.id];
        let sql = "DELETE FROM students WHERE id_students = ?";
        let [result] = await pool.query(sql, params);
        
        response.send(result);
        console.log(result);
    }catch(err){
        console.log(err);
    }
    
}

module.exports = {getAlumnos, putAlumno, postAlumno, deleteAlumno};