import express from "express";
import * as bodyParser from 'body-parser';
import * as planetController from './controllers/planetController';

const app = express();
app.set("port", 3000);

app.use(bodyParser.json());

app.get('/planets', planetController.allPlanets);
app.get('/planet/:id', planetController.getPlanet);
app.get('/distance/:id1-:id2', planetController.getDistance);
app.put('/planet', planetController.addPlanet);
app.delete('/planet/:id', planetController.deletePlanet);
app.post('/planet/:id', planetController.updatePlanet);

app.listen(app.get("port"), () => {
    console.log("App is running on http://localhost:%d", app.get("port"));
});