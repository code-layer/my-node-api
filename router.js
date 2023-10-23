const router = require("express").Router();
const { getTodos,addTutorial,getTutorials } = require("./controllers/tutorial");

router.get("/", (req, res) => {
  res.json( { 'resposne' : 'Build REST APIs using Node Express MongoDB'} );
});

router.get("/tutorials", getTutorials);

router.post("/tutorials",addTutorial);

module.exports = router;
