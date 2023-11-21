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


        modDireccionAnnadir(conn);
        modDireccionEliminar(conn);
        // eliminarDireccion(conn);
        setearNotas(conn);
        mostrarEstudiantes(conn);
        mostrarProfesores(conn);
        eliminarNotas(conn);
        modNotas(conn);

        
    }catch(err){
        console.log(err);
        await conn.end();
    }
}






async function modDireccionAnnadir(conn){
    try{
        let sql = "ALTER TABLE direccion ADD (numero INT2);"

        let [result] = await conn.query(sql);

        console.log("Tabla Modificada: Columna insertada");
        console.log(result);
    }catch(err){
        console.log(err.sqlMessage);
        await conn.end()
    }


}

async function modDireccionEliminar(conn){
    try{
        let sql = "ALTER TABLE direccion DROP codigo_postal;"

        let [result] = await conn.query(sql);

        console.log("Tabla Modificada: Columna eliminada");
        console.log(result);
    }catch(err){
        console.log(err.sqlMessage);
        await conn.end()
    }


}


async function eliminarDireccion(conn){
    try{
        let sql = "DROP TABLE direccion;"

        let [result] = await conn.query(sql);

        console.log("Tabla eliminada");
        console.log(result);
    }catch(err){
        console.log(err.sqlMessage);
        await conn.end()
    }


}

async function setearNotas(conn){
    try{
        let sql = "UPDATE marks SET mark = 0 WHERE id_marks > 0;"

        let [result] = await conn.query(sql);

        console.log("Tabla Modificada: Notas a 0");
        console.log(result);
    }catch(err){
        console.log(err.sqlMessage);
        await conn.end()
    }


}

async function mostrarEstudiantes(conn){
    try{
        let sql = "SELECT first_name, last_name FROM students;"

        let [result] = await conn.query(sql);

        console.log(result);
    }catch(err){
        console.log(err.sqlMessage);
        await conn.end()
    }


}

async function mostrarProfesores(conn){
    try{
        let sql = "SELECT * FROM teachers;"

        let [result] = await conn.query(sql);

        console.log(result);
    }catch(err){
        console.log(err.sqlMessage);
        await conn.end()
    }


}


async function eliminarNotas(conn){
    let fecha = new Date().getFullYear();
    try{
        let sql = "DELETE FROM marks WHERE ("+ fecha +" - YEAR(date)) >= 10";

        let [result] = await conn.query(sql);

        console.log(result);
    }catch(err){
        console.log(err.sqlMessage);
        await conn.end()
    }
}

async function modNotas(conn){
    try{
        let sql = "UPDATE marks SET mark = 5 WHERE mark < 5";

        let [result] = await conn.query(sql);

        console.log(result);
    }catch(err){
        console.log(err.sqlMessage);
        await conn.end()
    }
}


main();