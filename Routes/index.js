import animal_routes from './animal.routes';
import { Router } from 'express';

const router = Router();

router.use(animal_routes);

export default router;
