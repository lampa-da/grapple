const router = require("express").Router();
module.exports = router;

router.use("/users", require("./routes/users"));
router.use("/connections", require("./routes/connections"));
router.use("/challenges", require("./routes/challenges"));
router.use("/userchallenges", require("./routes/userChallenges"));
router.use("/dailyUserchallenges", require("./routes/dailyUserChallenges"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
