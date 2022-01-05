import { model, Schema } from 'mongoose';

const animal = new Schema(
    {
        name: {type: String, required: true},
        species: {type: String, required: true},
        diet: {type: String, required: true},
        description: {type: String, required: true},
        img: {type: String, required: true},
        created: {type: Boolean, required: true}
    }
);

const Animal = model('Animal', animal, 'Animal');

export { Animal };
