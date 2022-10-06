const express = require("express");

const router = express.Router();

router.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Add product</button></form>'
  );
});

router.post("/product", (req, res, next) => {
  const data = req.body.title;
  console.log(data);
  res.redirect("/");
});

module.exports = router;
