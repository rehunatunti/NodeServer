// otetaan express kirjasto käyttöön
const express = require('express');
const app = express()
const path = require('path')
const staff = require('./staff.json')
// json data on omana tiedostonaan: staff.json
const cors = require("cors");
app.use(cors());

// tehdään polkumääritys public kansioon
const polku = path.join(__dirname, './front')

// sanotaan, että em. polussa on tiedostosisältö, 
// jota palvelin käyttää kun se saa http requestin
// tämä tarjoilee frontin palvelimelle
app.use(express.static(polku))

// rest api rajapinta, kontrollerimetodi joka palauttaa json dataa
app.get('/api/staff', (req, res) => {
    res.json(staff)
    })

app.listen(3100, () => {
    console.log("Server is up on port 3100.")
})