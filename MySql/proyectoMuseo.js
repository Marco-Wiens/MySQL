const mysql = require("mysql2/promise");


async function main(){

    try{
        let conn = await mysql.createConnection(
            {
                host: "localhost",
                user: "root",
                password: "MarcoWiens113@",
                database: "museo"
            }
        );
        console.log("Conexión correcta");


        piezasPrestamo(conn);
        piezasTotales(conn);
      

        await conn.end();
        
    }catch(err){
        console.log(err);
        await conn.end();
    }
}






async function piezasPrestamo(conn){
    try{
        let params = [];
        let sql = "SELECT p.nombre, p.lugar, p.fecha_devolucion, CONCAT(d.nombre, '' ,d.apellido) as Dueño, d.email"+
                " FROM piezas as p"+
                " INNER JOIN duenyos as d ON (d.id_duenyos = p.id_duenyo)"+
                " WHERE p.situacion LIKE 'Prestamo';"

        let [result] = await conn.query(sql, params);

        console.log("Piezas de prestamo");
        console.log(result);
    }catch(err){
        console.log(err.sqlMessage);
        await conn.end()
    }


}

async function piezasTotales(conn){
    try{
        let params = [];
        let sql = "SELECT COUNT(p.id_piezas) as NºPiezas, c.tipo"+
                " FROM piezas as p"+
                " INNER JOIN coleccion as c ON (c.id_pieza = p.id_piezas)"+
                " GROUP BY c.tipo"+
                " ORDER BY NºPiezas DESC;"

        let [result] = await conn.query(sql, params);

        console.log("Piezas totales  por Situación");
        console.log(result);
    }catch(err){
        console.log(err.sqlMessage);
        await conn.end()
    }


}


main();