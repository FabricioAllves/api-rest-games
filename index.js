const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


var DB = {
    games: [
        {
            id: 23,
            title: "Call of Duty MW",
            year: 2019,
            price: 60
        },
        {
            id: 65,
            title: "GTA",
            year: 2012,
            price: 90
        },
        {
            id: 91,
            title: "Fifa",
            year: 2022,
            price: 120
        }
    ]
}

app.get("/games", (req, res) => {
    res.statusCode = 200;
    res.json(DB.games)
})

app.get("/games/:id", (req, res) => {

    if(isNaN(req.params.id)){
        res.sendStatus(400);
        res.send("Isso nao é um numero")
    }else{
        
        var id = parseInt(req.params.id);

        var game = DB.games.find(g => g.id == id);

        if(game != undefined){
            res.statusCode = 200;
            res.json(game)
        }else{
            res.sendStatus(404)
        }
    }
})



app.listen(2222,() => {
    console.log("API RODANDO!")
})