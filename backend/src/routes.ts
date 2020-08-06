import { Router } from  'express';

import ContentController from './controllers/ContentController'

const routes = Router()

routes.get('/', ContentController.show)

export default routes;