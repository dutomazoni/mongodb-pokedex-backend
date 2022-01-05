import {Animal} from '../Models';

let animal_routes = {};

animal_routes.get_standard_message = async (req, res) => {
    try {
        return res.status(200).json({ message: "REAL LIFE ANIMALS POKEDEX!" });
    } catch (error) {
        return res.status(400).json({});
    }
};

animal_routes.post_animal= async (req, res) => {
    try {
        let new_animal = req.body.animal
        await Animal.create(new_animal)

        return res.status(200).json({ new_animal: new_animal });
    } catch (error) {
        return res.status(400).json({error});
    }
};

animal_routes.get_animal = async (req, res) => {
    try {
        const animal = await Animal.findOne({_id: req.params.Id});
        return res.status(200).json({ animal: animal });
    } catch (error) {
        return res.status(400).json({error});
    }
};

animal_routes.get_animal_by_name = async (req, res) => {
    try {
        const animal = await Animal.findOne({name: req.params.name});
        return res.status(200).json({ animal: animal });
    } catch (error) {
        return res.status(400).json({error});
    }
};

animal_routes.get_animals = async (req, res) => {
    try {
        const animals = await Animal.find();
        return res.status(200).json({ animals });
    } catch (error) {
        return res.status(400).json({error});
    }
};


export { animal_routes };
