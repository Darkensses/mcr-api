const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const leaguesRoutes = require("./routes/leagues.js");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/leagues", leaguesRoutes);

app.get("/", (req, res) => {
    res.send("MexWE MCR API Server")
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))