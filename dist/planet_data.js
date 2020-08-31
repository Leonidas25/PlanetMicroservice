"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanetSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var uri = 'mongodb+srv://root:root@cluster0.to72o.mongodb.net/planets?retryWrites=true&w=majority';
mongoose_1.default.connect(uri, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Successful connection to Database.");
    }
});
exports.PlanetSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    size: { type: Number, required: true },
    distance_to_sun: { type: Number, required: true },
    rings: { type: Number, required: true },
    orbital_speed: { type: Number, required: true },
    number_of_moons: { type: Number, required: true }
}, { collection: "planet_data" });
var PlanetData = mongoose_1.default.model('planet_data', exports.PlanetSchema);
exports.default = PlanetData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbmV0X2RhdGEuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJwbGFuZXRfZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzREFBZ0M7QUFFaEMsSUFBTSxHQUFHLEdBQVcsd0ZBQXdGLENBQUM7QUFFN0csa0JBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBUTtJQUMzQixJQUFJLEdBQUcsRUFBRTtRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzVCO1NBQ0k7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7S0FDckQ7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVVLFFBQUEsWUFBWSxHQUFHLElBQUksa0JBQVEsQ0FBQyxNQUFNLENBQUM7SUFDNUMsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO0lBQ25DLElBQUksRUFBRSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQztJQUNuQyxlQUFlLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUM7SUFDOUMsS0FBSyxFQUFFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO0lBQ3BDLGFBQWEsRUFBRSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQztJQUM1QyxlQUFlLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUM7Q0FDakQsRUFBRSxFQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUMsQ0FBQyxDQUFDO0FBSWhDLElBQU0sVUFBVSxHQUFHLGtCQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxvQkFBWSxDQUFDLENBQUM7QUFDL0Qsa0JBQWUsVUFBVSxDQUFDIn0=