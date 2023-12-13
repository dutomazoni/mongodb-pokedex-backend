import animal_routes from './animal.routes';
import { Router } from 'express';

const router = Router();

router.use('api/', animal_routes);

export default router;
