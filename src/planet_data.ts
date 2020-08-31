import mongoose from 'mongoose';

const uri: string = 'mongodb+srv://root:root@cluster0.to72o.mongodb.net/planets?retryWrites=true&w=majority';

mongoose.connect(uri, (err: any) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Successful connection to Database.");
    }
});

export const PlanetSchema = new mongoose.Schema({
    name: {type:String, required: true},
    size: {type:Number, required: true},
    distance_to_sun: {type:Number, required: true},
    rings: {type:Number, required: true},
    orbital_speed: {type:Number, required: true},
    number_of_moons: {type:Number, required: true}
}, {collection: "planet_data"});



const PlanetData = mongoose.model('planet_data', PlanetSchema);
export default PlanetData;