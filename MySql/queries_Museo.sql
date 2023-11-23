SELECT p.nombre, p.lugar, p.fecha_devolucion, CONCAT(d.nombre," " ,d.apellido) as Dueño, d.email
FROM piezas as p
INNER JOIN duenyos as d ON (d.id_duenyos = p.id_duenyo)
WHERE p.situacion LIKE 'Prestamo';

SELECT COUNT(p.id_piezas) as NºPiezas, c.tipo
FROM piezas as p
INNER JOIN coleccion as c ON (c.id_coleccion = p.id_coleccion)
GROUP BY c.tipo
ORDER BY NºPiezas DESC;



