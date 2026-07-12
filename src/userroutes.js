// @ts-nocheck
const { register, login } = require("./controllers/user");

module.exports = (router) => {
  router.get("/auth/register", register);
  router.post("/auth/login", login);
};
