INSERT INTO `piezas` (`nombre`, `descripcion`, `anyo`, `id_autor`, `situacion`, `fecha_prestamo`, `fecha_devolucion`, `lugar`, `id_duenyo`) VALUES
('Obra1', 'Descripción de la obra 1', 2000, 1, 'Posesion', NULL, NULL, 'Museo A', NULL),
('Obra2', 'Descripción de la obra 2', 1985, 2, 'Prestamo', '2023-01-15', '2023-02-28', 'Galería B', 3),
('Obra3', 'Descripción de la obra 3', 1998, 3, 'Prestada', '2023-03-10', '2023-04-20', 'Coleccionista C', 4),
('Obra4', 'Descripción de la obra 4', 2015, 1, 'Posesion', NULL, NULL, 'Museo A', NULL),
('Obra5', 'Descripción de la obra 5', 2005, 2, 'Prestamo', '2023-05-01', '2023-06-15', 'Galería B', 3),
('Obra6', 'Descripción de la obra 6', 1980, 3, 'Prestada', '2023-07-10', '2023-08-25', 'Coleccionista C', 4),
('Obra7', 'Descripción de la obra 7', 2010, 1, 'Posesion', NULL, NULL, 'Museo A', NULL),
('Obra8', 'Descripción de la obra 8', 1995, 2, 'Prestamo', '2023-09-05', '2023-10-15', 'Galería B', 3),
('Obra9', 'Descripción de la obra 9', 1982, 3, 'Prestada', '2023-11-01', '2023-12-10', 'Coleccionista C', 4),
('Obra10', 'Descripción de la obra 10', 2018, 1, 'Posesion', NULL, NULL, 'Museo A', NULL);


INSERT INTO `autores` (`nombre`, `descripcion`) VALUES
('Autor1', 'Descripción del Autor 1'),
('Autor2', 'Descripción del Autor 2'),
('Autor3', 'Descripción del Autor 3'),
('Autor4', 'Descripción del Autor 4'),
('Autor5', 'Descripción del Autor 5'),
('Autor6', 'Descripción del Autor 6'),
('Autor7', 'Descripción del Autor 7'),
('Autor8', 'Descripción del Autor 8'),
('Autor9', 'Descripción del Autor 9'),
('Autor10', 'Descripción del Autor 10');

INSERT INTO `duenyos` (`nombre`, `email`, `direccion`, `apellido`) VALUES
('Dueño1', 'dueno1@email.com', 'Dirección 1', 'Apellido1'),
('Dueño2', 'dueno2@email.com', 'Dirección 2', 'Apellido2'),
('Dueño3', 'dueno3@email.com', 'Dirección 3', 'Apellido3'),
('Dueño4', 'dueno4@email.com', 'Dirección 4', 'Apellido4'),
('Dueño5', 'dueno5@email.com', 'Dirección 5', 'Apellido5'),
('Dueño6', 'dueno6@email.com', 'Dirección 6', 'Apellido6'),
('Dueño7', 'dueno7@email.com', 'Dirección 7', 'Apellido7'),
('Dueño8', 'dueno8@email.com', 'Dirección 8', 'Apellido8'),
('Dueño9', 'dueno9@email.com', 'Dirección 9', 'Apellido9'),
('Dueño10', 'dueno10@email.com', 'Dirección 10', 'Apellido10');


SELECT * FROM piezas;


INSERT INTO `coleccion` (`id_pieza`, `tipo`) VALUES
(21, 'Permanente'),
(22, 'Almacenada'),
(23, 'Exposicion Itinerante'),
(24, 'Permanente'),
(25, 'Permanente'),  
(26, 'Exposicion Itinerante'),
(27, 'Exposicion Itinerante'),
(28, 'Permanente'),
(29, 'Almacenada'),
(30, 'Exposicion Itinerante');




