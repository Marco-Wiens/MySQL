SELECT AVG(mark) from marks WHERE (id_subject = 1);


SELECT COUNT(*) FROM students;

SELECT * FROM dia1.groups;

DELETE FROM marks 
WHERE (id_marks > 0) AND 
	(mark > 5) AND
	((YEAR(NOW()) - YEAR(date)) = 1);
    
/*SELECT * FROM marks
WHERE (id_marks > 0) AND 
	(mark = 5) AND
	((YEAR(NOW()) - YEAR(date)) = 1);
*/



ALTER TABLE students ADD(
	anno_ingreso INT
);

UPDATE students SET id_students=id_students, first_name=first_name, last_name=last_name, id_group=id_group, anno_ingreso = 2022
	WHERE id_students = 10;



SELECT * FROM students
	WHERE anno_ingreso = YEAR(NOW());
    
SELECT id_subject, COUNT(*) as profesores from subject_teacher
	GROUP BY id_subject;
    
SELECT id_student, mark FROM marks
WHERE (id_student BETWEEN 1 AND 20) OR
		(mark > 8 AND (YEAR(NOW()) - YEAR(date)) = 1);

SELECT id_subject, AVG(mark) FROM marks
WHERE (YEAR(NOW()) - YEAR(date)) = 1
GROUP BY id_subject;
    
SELECT id_student, AVG(mark) FROM marks
WHERE (YEAR(NOW()) - YEAR(date)) = 1
GROUP BY id_student;


SELECT DISTINCT t.first_name as nombre, t.last_name as apellido, group_concat(DISTINCT sub.title) as Asignatura
FROM dia1.teachers as t
INNER JOIN subject_teacher as st ON t.id_teachers = st.id_teacher
INNER JOIN subjects as sub ON st.id_subject = sub.id_subjects
GROUP BY nombre, apellido;

SELECT DISTINCT s.first_name as nombre, s.last_name as apellido, group_concat(DISTINCT sub.title) as Asignatura
FROM dia1.students as s
INNER JOIN marks as m ON s.id_students = m.id_student
INNER JOIN subjects as sub ON m.id_subject = sub.id_subjects
GROUP BY nombre, apellido;

SELECT DISTINCT COUNT(*) as Alumnos, GROUP_CONCAT(t.first_name, t.last_name) as Profesor , group_concat(DISTINCT sub.title) as Asignatura
FROM dia1.students as s
INNER JOIN marks as m ON s.id_students = m.id_student
INNER JOIN subjects as sub ON m.id_subject = sub.id_subjects
INNER JOIN subject_teacher as st ON st.id_subject = sub.id_subjects
INNER JOIN teachers as t ON t.id_teachers = st.id_teacher
GROUP BY ;

SELECT * FROM subject_teacher;



