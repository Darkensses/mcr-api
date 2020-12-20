const express = require("express");
const leaguesJSON = require("../data/leagues.json");

const router = express.Router();

router.get("/", (req,res) => {
    console.log(req.body)
    res.send(leaguesJSON)
});

router.get("/:id", (req, res) => {
    let { id } = req.params;    
    let league = leaguesJSON.find((lg) => lg.id_league === parseInt(id));
    let leagueFile = require(`./../data/${league.data}`);
    
    res.send(leagueFile);
})

module.exports = router;