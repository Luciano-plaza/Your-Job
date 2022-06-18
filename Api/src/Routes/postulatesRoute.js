const { Router } = require("express");

const {
  postulatesPost,
  getPostulates,
  getPostulatesofPost,
} = require("../Controllers/postulatesController.js");

const router = Router();

router.post("/", async (req, res) => {
  const { name, url, companyPostId } = req.body;
  try {
    res.send(await postulatesPost(name, url, companyPostId));
  } catch (error) {
    res.send({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  const { id } = req.query;
  try {
    res.send(await getPostulatesofPost(id));
  } catch (error) {
    res.send({ message: error.message });
  }
});

router.get("/:email", async (req, res) => {
  const { email } = req.params;
  try {
    res.send(await getPostulates(email));
  } catch (error) {
    res.send({ message: error.message });
  }
});

module.exports = router;
