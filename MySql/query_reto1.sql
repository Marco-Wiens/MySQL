
CREATE TABLE `direccion` (
  `id_direccion` int NOT NULL AUTO_INCREMENT,
  `calle` varchar(45) DEFAULT NULL,
  `tipo_de_casa` varchar(45) DEFAULT NULL,
  `codigo_postal` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_direccion`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO dia1.direccion (calle, tipo_de_casa, codigo_postal) VALUES ("Calle Azurita", "Chalet", 28023);
INSERT INTO dia1.direccion (calle, tipo_de_casa, codigo_postal) VALUES ("Avenida Roble", "Piso", 41005);
INSERT INTO dia1.direccion (calle, tipo_de_casa, codigo_postal) VALUES ("Calle Esmeralda", "Adosado", 50010);
INSERT INTO dia1.direccion (calle, tipo_de_casa, codigo_postal) VALUES ("Paseo Zafiro", "Casa Rural", 33015);
INSERT INTO dia1.direccion (calle, tipo_de_casa, codigo_postal) VALUES ("Avenida Coral", "Apartamento", 15002);
INSERT INTO dia1.direccion (calle, tipo_de_casa, codigo_postal) VALUES ("Calle Amatista", "Duplex", 20001);
INSERT INTO dia1.direccion (calle, tipo_de_casa, codigo_postal) VALUES ("Paseo Marfil", "Casa de Campo", 28045);
INSERT INTO dia1.direccion (calle, tipo_de_casa, codigo_postal) VALUES ("Calle Turquesa", "Ático", 46022);
INSERT INTO dia1.direccion (calle, tipo_de_casa, codigo_postal) VALUES ("Avenida Granito", "Casa de Playa", 08001);
INSERT INTO dia1.direccion (calle, tipo_de_casa, codigo_postal) VALUES ("Calle Jade", "Loft", 20013);



ALTER TABLE direccion ADD (
	
    codigo_postal INT
);

ALTER TABLE direccion DROP codigo_postal;



/*
DELETE  FROM direccion
WHERE id_direccion >0;



DROP TABLE direccion;
*/

UPDATE marks SET mark = 0
WHERE id_marks > 0;

SELECT first_name, last_name FROM students;

SELECT * FROM teachers;

/**/SELECT * FROM marks
WHERE ( 2023 - YEAR(date)) >=  10;

UPDATE marks SET mark = 5 WHERE mark < 5;


























