import { Request, Response } from 'express';
import PlanetData from './../planet_data';

// - GET - /planets # return all planets

export let allPlanets = (req: Request, res: Response) => {
    let planets = PlanetData.find((err: any, planets: any) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(planets);
        }
    })
}

// -GET - /planet/{id} # return planet with id

export let getPlanet = (req: Request, res: Response) => {
    PlanetData.findById(req.params.id, (err: any, planet: any) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(planet);
        }
    })
}

// -GET - /distance/{id1}-{id2} # return distance between planet with id1 and planet with id2

export let getDistance = (req: Request, res: Response) => {
    PlanetData.findById(req.params.id1, (err: any, planet1: any) => {
        if (err) {
            res.send(err);
        }
        else {   
            PlanetData.findById(req.params.id2, (err: any, planet2: any) => {
                if (err) {
                    res.send(err);
                }
                else {
                    var d1:number = Math.abs(planet1.distance_to_sun - planet2.distance_to_sun);
                    var d2:string = d1.toString();

                    res.send(d2);
                }
            })
        }
    })
}

// -PUT - /planet # inserts a new planet into the db

export let addPlanet = (req: Request, res: Response) => {
    let planet =  new PlanetData(req.body);

    planet.save((err: any) => {
        if (err) {
        }
        else {
            res.send(planet);
        }
    })
}

// -DELETE - /planet/{id} # deletes a planet with id
export let deletePlanet = (req: Request, res: Response) => {
    PlanetData.deleteOne({ _id: req.params.id}, (err: any) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Success deleting planet.");
        }
    })
}

// -POST - /planet/{id} #updates a book with id
export let updatePlanet = (req: Request, res: Response) => {
    PlanetData.findByIdAndUpdate(req.params.id, req.body, (err: any, planet: any) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Success updating planet.");
        }
    })
}