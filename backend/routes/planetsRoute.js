import express from "express";
import { Planet } from "../models/objectModel.js";
import fetch from 'node-fetch';

const router = express.Router();


router.post('/sw-share', async (req, res) => {
    try {
        const response = await fetch('https://swapi.dev/api/planets');
        const data = await response.json();

        let counter = 0;
        for (const planetData of data.results) {
            if (counter >= 10) {
                break;
            }
            if (!planetData.name ||
                planetData.name === 'unknown' ||
                !planetData.population ||
                planetData.population === 'unknown' ||
                isNaN(parseInt(planetData.population)) ||
                !planetData.climate ||
                planetData.climate === 'unknown' ||
                !planetData.terrain ||
                planetData.terrain === 'unknown'
            ) {
                continue;
            }
            const planet = new Planet({
                title: planetData.name,
                population: planetData.population,
                climate: planetData.climate,
                terrain: planetData.terrain,
            });
            await planet.save();
            counter++;
        }
        res.status(200).send({ message: 'Data fetched and stored successfully' });
    } catch (error) {
        console.error('Error fetching and storing data:', error);
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
});


router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const planet = await Planet.findById(id);

        return response.status(200).json(planet);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.get('/', async (request, response) => {
    try {
        const planets = await Planet.find({});

        return response.status(200).json({
            count: planets.length,
            data: planets,
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
