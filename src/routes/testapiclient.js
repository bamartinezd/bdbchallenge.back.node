const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");


const people = [
    {
        id: "asdfghjk",
        firstName: "Andres",
        lastName: "Collazos",
    },
    {
        id: "fdsfsd32",
        firstName: "Alejandro",
        lastName: "Martinez",
    },
    {
        id: "asdfgh7892",
        firstName: "Edgar",
        lastName: "Arciniegas",
    },
];

router.get('/api/people', (req, res) => {
    res.json(people);
});

router.get('/api/departments', async(req, res) => {
    try {
        debugger;
        const API_URL = 'https://www.datos.gov.co/resource/xdk5-pm3f.json';
        const response = await fetch(API_URL);
        const data = await response.json();

        res.json(data);
    } catch (error) {
        res.json(error);
    }
});






module.exports = router;