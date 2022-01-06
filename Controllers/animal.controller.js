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

animal_routes.put_animal = async (req, res) => {
    try {
        let animalId = req.params.animalId
        let animal = await Animal.findOne({_id: animalId})
        let { name, species, diet, img, description} = req.body.animal

        if(animal){
            if (name){
                animal.name = name
            }
            if (species){
                animal.species = species
            }
            if(diet){
                animal.diet = diet;
            }
            if(img){
                animal.img = img;
            }
            if(description){
                animal.description = description;
            }

            let new_animal = await Animal.findByIdAndUpdate(animal._id, animal, { new: true})
            return res.status(200).json({ animal: new_animal });
        }else{
            return res.status(400).json({message: 'animal not found'});
        }

    } catch (error) {
        return res.status(400).json({error});
    }
};

animal_routes.delete_animal = async (req, res) => {
    try {
        await Animal.findByIdAndRemove({_id: req.params.animalId})
        return res.status(200).json({ message: 'Animal deleted successfully!' });
    } catch (error) {
        return res.status(400).json({});
    }
};

export { animal_routes };
