"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePlanet = exports.deletePlanet = exports.addPlanet = exports.getDistance = exports.getPlanet = exports.allPlanets = void 0;
var planet_data_1 = __importDefault(require("./../planet_data"));
// - GET - /planets # return all planets
exports.allPlanets = function (req, res) {
    var planets = planet_data_1.default.find(function (err, planets) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(planets);
        }
    });
};
// -GET - /planet/{id} # return planet with id
exports.getPlanet = function (req, res) {
    planet_data_1.default.findById(req.params.id, function (err, planet) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(planet);
        }
    });
};
// -GET - /distance/{id1}-{id2} # return distance between planet with id1 and planet with id2
exports.getDistance = function (req, res) {
    planet_data_1.default.findById(req.params.id1, function (err, planet1) {
        if (err) {
            res.send(err);
        }
        else {
            planet_data_1.default.findById(req.params.id2, function (err, planet2) {
                if (err) {
                    res.send(err);
                }
                else {
                    var d1 = Math.abs(planet1.distance_to_sun - planet2.distance_to_sun);
                    var d2 = d1.toString();
                    res.send(d2);
                }
            });
        }
    });
};
// -PUT - /planet # inserts a new planet into the db
exports.addPlanet = function (req, res) {
    var planet = new planet_data_1.default(req.body);
    planet.save(function (err) {
        if (err) {
        }
        else {
            res.send(planet);
        }
    });
};
// -DELETE - /planet/{id} # deletes a planet with id
exports.deletePlanet = function (req, res) {
    planet_data_1.default.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Success deleting planet.");
        }
    });
};
// -POST - /planet/{id} #updates a book with id
exports.updatePlanet = function (req, res) {
    planet_data_1.default.findByIdAndUpdate(req.params.id, req.body, function (err, planet) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Success updating planet.");
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbmV0Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3BsYW5ldENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsaUVBQTBDO0FBRTFDLHdDQUF3QztBQUU3QixRQUFBLFVBQVUsR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQ2hELElBQUksT0FBTyxHQUFHLHFCQUFVLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUSxFQUFFLE9BQVk7UUFDakQsSUFBSSxHQUFHLEVBQUU7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQ0k7WUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3JCO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUFFRCw4Q0FBOEM7QUFFbkMsUUFBQSxTQUFTLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUMvQyxxQkFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxVQUFDLEdBQVEsRUFBRSxNQUFXO1FBQ3JELElBQUksR0FBRyxFQUFFO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUNJO1lBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwQjtJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBRUQsNkZBQTZGO0FBRWxGLFFBQUEsV0FBVyxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDakQscUJBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFRLEVBQUUsT0FBWTtRQUN2RCxJQUFJLEdBQUcsRUFBRTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7YUFDSTtZQUNELHFCQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBUSxFQUFFLE9BQVk7Z0JBQ3ZELElBQUksR0FBRyxFQUFFO29CQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2pCO3FCQUNJO29CQUNELElBQUksRUFBRSxHQUFVLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQzVFLElBQUksRUFBRSxHQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFFOUIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDaEI7WUFDTCxDQUFDLENBQUMsQ0FBQTtTQUNMO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUFFRCxvREFBb0Q7QUFFekMsUUFBQSxTQUFTLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUMvQyxJQUFJLE1BQU0sR0FBSSxJQUFJLHFCQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO1FBQ2pCLElBQUksR0FBRyxFQUFFO1NBQ1I7YUFDSTtZQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEI7SUFDTCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQTtBQUVELG9EQUFvRDtBQUN6QyxRQUFBLFlBQVksR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQ2xELHFCQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFDLEVBQUUsVUFBQyxHQUFRO1FBQ2pELElBQUksR0FBRyxFQUFFO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUNJO1lBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUFFRCwrQ0FBK0M7QUFDcEMsUUFBQSxZQUFZLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUNsRCxxQkFBVSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFRLEVBQUUsTUFBVztRQUN4RSxJQUFJLEdBQUcsRUFBRTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7YUFDSTtZQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUN4QztJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBIn0=