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



app.listen(2222,() => {
    console.log("API RODANDO!")
})