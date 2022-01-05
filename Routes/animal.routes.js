import {animal_routes} from '../Controllers';
import { Router } from 'express';

let router = Router();

router.get(
    '/',
    animal_routes.get_standard_message
);

router.get(
    '/animal/:Id',
    animal_routes.get_animal
);

router.post(
    '/animal',
    animal_routes.post_animal
);

router.get(
    '/animal_name/:name',
    animal_routes.get_animal_by_name
);

router.get(
    '/all_animals',
    animal_routes.get_animals
);

export default router;
