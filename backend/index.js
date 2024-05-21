const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/api", (req, res) => {
    res.send("I am JWinfotech Node JS App");
  });


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

  
  