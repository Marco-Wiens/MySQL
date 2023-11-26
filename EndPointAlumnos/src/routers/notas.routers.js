const {Router} = require("express");
const router = Router();
const notasCtrl = require("../controller/notas.controller");

router.get("/media", notasCtrl.getMedia);

router.get("/apuntadas", notasCtrl.getApuntadas);

router.get("/impartidas", notasCtrl.getImpartidas);

module.exports = router;