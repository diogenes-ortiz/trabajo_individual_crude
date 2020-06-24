var express = require('express');
var router = express.Router();
var moviesController = require("../controllers/moviesController")

router.get("/", moviesController.list);

router.get("/detail/:id", moviesController.detail);

router.get("/create", moviesController.create);
router.post("/create",moviesController.cargar);

router.get("/edit/:id", moviesController.edit);
router.post("/edit/:id",moviesController.editar);

router.post("/delete/:id",moviesController.eliminar);



module.exports = router;