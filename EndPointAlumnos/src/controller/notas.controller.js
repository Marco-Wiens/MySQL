const {pool} = require("../database");



const getMedia = async (request, response) => 
{
    try{
        let params = [request.query.id];
        let sql = "SELECT AVG(mark) AS 'Media' FROM marks WHERE id_student = ?";
        let [result] = await pool.query(sql, params);
        
        response.send(result);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

const getApuntadas = async (request, response) => 
{
    try{
        let params = [request.query.id];
        let sql;
        if(!request.query.id){
            sql = "SELECT CONCAT(s.first_name, ' ', s.last_name) AS Alumno, GROUP_CONCAT(' ', sub.title) AS 'Matriculado en' "+
            "FROM students AS s "+
            "INNER JOIN dia1.groups AS g ON (s.id_group = g.id_groups) "+
            "INNER JOIN subject_teacher AS st ON (g.id_groups = st.id_group) "+
            "INNER JOIN subjects AS sub ON (st.id_subject = sub.id_subjects) "+
            "GROUP BY id_students";
        }else{
            sql = "SELECT CONCAT(s.first_name, ' ', s.last_name) AS Alumno, GROUP_CONCAT(' ', sub.title) AS 'Matriculado en' "+
            "FROM students AS s "+
            "INNER JOIN dia1.groups AS g ON (s.id_group = g.id_groups) "+
            "INNER JOIN subject_teacher AS st ON (g.id_groups = st.id_group) "+
            "INNER JOIN subjects AS sub ON (st.id_subject = sub.id_subjects) "+
            "WHERE id_students = ? "+
            "GROUP BY id_students";
        }

    
        let [result] = await pool.query(sql, params);
        response.send(result);
        console.log(result);
    }catch (err){
        console.log(err);
    }
}

const getImpartidas = async (request, response) => 
{
    try{
        let sql;
        let params = [request.query.id];
        if(!request.query.id){
            sql = "SELECT CONCAT(t.first_name, ' ', t.last_name) AS Profesor, GROUP_CONCAT(' ', s.title) AS 'Asignaturas Impartidas' "+
            "FROM teachers AS t "+
            "INNER JOIN subject_teacher AS st ON (t.id_teachers = st.id_teacher) "+
            "INNER JOIN subjects AS s ON (st.id_subject = s.id_subjects) "+
            "GROUP BY Profesor";
        }else{
            sql = "SELECT CONCAT(t.first_name, ' ', t.last_name) AS Profesor, GROUP_CONCAT(' ', s.title) AS 'Asignaturas Impartidas' "+
            "FROM teachers AS t "+
            "INNER JOIN subject_teacher AS st ON (t.id_teachers = st.id_teacher) "+
            "INNER JOIN subjects AS s ON (st.id_subject = s.id_subjects) "+
            "WHERE t.id_teachers = ? "+
            "GROUP BY Profesor";
        }
    
        let [result] = await pool.query(sql, params);
        response.send(result);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

module.exports = {getMedia, getApuntadas, getImpartidas}