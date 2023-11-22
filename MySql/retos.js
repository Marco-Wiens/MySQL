const mysql = require("mysql2/promise");


async function main(){

    try{
        let conn = await mysql.createConnection(
            {
                host: "localhost",
                user: "root",
                password: "MarcoWiens113@",
                database: "dia1"
            }
        );
        console.log("Conexión correcta");


        mediaAsignatura(conn);
        totalAlumnos(conn);
        // eliminarDireccion(conn);
        todoGroups(conn);
        eliminaNotascondicion(conn);
        alumnosAnno(conn);
        profesoresAsignatura(conn);
        notasBetween(conn);
        notasMedia(conn);
        notasMediaAlumnos(conn);
        reto3(conn);
        reto4(conn);
        reto5(conn);

        await conn.end();
        
    }catch(err){
        console.log(err);
        await conn.end();
    }
}






async function mediaAsignatura(conn){
    try{
        let params = ["1"];
        let sql = "SELECT AVG(mark) from marks WHERE (id_subject = ?);"

        let [result] = await conn.query(sql, params);

        console.log("Media de la Asignatura 1");
        console.log(result);
    }catch(err){
        console.log(err.sqlMessage);
        await conn.end()
    }


}

async function totalAlumnos(conn){
    try{
        let sql = "SELECT COUNT(*) FROM students;"

        let [result] = await conn.query(sql);

        console.log("Número total de alumnos");
        console.log(result);
    }catch(err){
        console.log(err.sqlMessage);
        await conn.end()
    }


}


async function todoGroups(conn){
    try{
        let sql = "SELECT * FROM dia1.groups;"

        let [result] = await conn.query(sql);

        console.log("Todos los datos de la tabla groups");
        console.log(result);
    }catch(err){
        console.log(err.sqlMessage);
        await conn.end()
    }


}

async function eliminaNotascondicion(conn){
    try{
        let params = ["0","5","1"];

        let sql = "DELETE FROM marks WHERE (id_marks > ?) AND (mark > ?) AND ((YEAR(NOW()) - YEAR(date)) = ?);"

        let [result] = await conn.query(sql, params);

        console.log("Notas eliminadas");
        console.log(result);
    }catch(err){
        console.log(err.sqlMessage);
        await conn.end()
    }


}

async function alumnosAnno(conn){
    try{
        let sql = "SELECT * FROM students WHERE anno_ingreso = YEAR(NOW());"

        let [result] = await conn.query(sql);

        console.log(result);
    }catch(err){
        console.log(err.sqlMessage);
        await conn.end()
    }


}

async function profesoresAsignatura(conn){
    try{
        let sql = "SELECT id_subject, COUNT(*) as profesores from subject_teacher GROUP BY id_subject;"

        let [result] = await conn.query(sql);

        console.log(result);
    }catch(err){
        console.log(err.sqlMessage);
        await conn.end()
    }


}

async function notasBetween(conn){
    try{
        let params = ["1","20", "8","1"]
        let sql = "SELECT id_student, mark FROM marks WHERE (id_student BETWEEN ? AND ?) OR "
                +"(mark > ? AND (YEAR(NOW()) - YEAR(date)) = ?);"

        let [result] = await conn.query(sql, params);

        console.log(result);
    }catch(err){
        console.log(err.sqlMessage);
        await conn.end()
    }


}

async function notasMedia(conn){
    try{
        let params = ["1"]
        let sql = "SELECT id_subject, AVG(mark) FROM marks"+
                " WHERE (YEAR(NOW()) - YEAR(date)) = ?"+
                " GROUP BY id_subject;"

        let [result] = await conn.query(sql, params);

        console.log(result);
    }catch(err){
        console.log(err.sqlMessage);
        await conn.end()
    }


}

async function notasMediaAlumnos(conn){
    try{
        let params = ["1"]
        let sql = "SELECT id_student, AVG(mark) FROM marks"+
                " WHERE (YEAR(NOW()) - YEAR(date)) = ?"+
                " GROUP BY id_student;"

        let [result] = await conn.query(sql, params);

        console.log(result);
    }catch(err){
        console.log(err.sqlMessage);
        await conn.end()
    }


}

async function reto3(conn){
    try{
        let sql = "SELECT DISTINCT t.first_name as nombre, t.last_name as apellido, group_concat(DISTINCT sub.title) as Asignatura"+
                " FROM dia1.teachers as t" +
                " INNER JOIN subject_teacher as st ON t.id_teachers = st.id_teacher"+
                " INNER JOIN subjects as sub ON st.id_subject = sub.id_subjects"+
                " GROUP BY nombre, apellido;"

        let [result] = await conn.query(sql);

        console.log(result);
    }catch(err){
        console.log(err.sqlMessage);
        await conn.end()
    }


}

async function reto4(conn){
    try{
        let sql = "SELECT DISTINCT s.first_name as nombre, s.last_name as apellido, group_concat(DISTINCT sub.title) as Asignatura"+
        " FROM dia1.students as s"+
        " INNER JOIN marks as m ON s.id_students = m.id_student"+
        " INNER JOIN subjects as sub ON m.id_subject = sub.id_subjects"+
        " GROUP BY nombre, apellido;"

        let [result] = await conn.query(sql);

        console.log(result);
    }catch(err){
        console.log(err.sqlMessage);
        await conn.end()
    }


}

async function reto5(conn){
    try{
        let sql = "SELECT DISTINCT COUNT(s.id_students) as Alumnos, CONCAT(t.first_name, ' ', t.last_name) as Profesor , sub.title as Asignatura"+
        " FROM dia1.students as s"+
        " INNER JOIN marks as m ON s.id_students = m.id_student"+
        " INNER JOIN subjects as sub ON m.id_subject = sub.id_subjects"+
        " INNER JOIN subject_teacher as st ON st.id_subject = sub.id_subjects"+
        " INNER JOIN teachers as t ON t.id_teachers = st.id_teacher"+
        " GROUP BY sub.title, Profesor;"

        let [result] = await conn.query(sql);

        console.log(result);
    }catch(err){
        console.log(err.sqlMessage);
        await conn.end()
    }


}




main();