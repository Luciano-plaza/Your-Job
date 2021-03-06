const { Router } = require("express");
const {
  createUser,
  findUser,
  getUsers,
  updateUser,
  findUserEmail,
  deleteUser,
  findUserId,
} = require("../Controllers/UserController.js");

const router = Router();

router.post("/login", async (req, res) => {
  const {
    email,
    name,
    employment_status,
    age,
    image,
    description,
    technologiesName,
    nationality,
    url,
    cv,
    premium,
  } = req.body;
  const newUser = await createUser(
    email,
    name,
    employment_status,
    age,
    image,
    description,
    technologiesName,
    nationality,
    url,
    cv,
    premium
  );

  return res.status(200).send(newUser);
});

router.get("/profile", async (req, res) => {
  const { email } = req.query;
  res.send(await findUserEmail(email));
});

router.get("/:user", async (req, res) => {
  const { user } = req.params;
  res.send(await findUser(user));
});
router.get("/", async (req, res) => {
  res.send(await getUsers());
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  res.send(await updateUser(id, changes));
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.send(await deleteUser(id));
});

router.get("/id/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.send(await findUserId(id));
  } catch (error) {
    console.error("error in findUserId: ", error);
  }
});

module.exports = router;
