const { Router } = require("express");
const router = Router();
const studentCtrl = require("../controller/student.controller");

router.get("/alumnos", studentCtrl.getAlumnos);

router.post("/alumnos", studentCtrl.postAlumno);

router.put("/alumnos", studentCtrl.putAlumno);

router.delete("/alumnos", studentCtrl.deleteAlumno);


module.exports = router;