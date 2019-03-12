import { Router } from 'express';
const router = new Router();
import logTime from '../middlewares/logtime';
import ProductController from '../controllers/product.controllers';

router
    .get('/create', ProductController.create)
    .post('/store', [logTime], ProductController.store)
    .get('/:id/edit', ProductController.edit)
    .put('/:id', ProductController.update)
    .get('/', ProductController.index)
    .get('/:id', [logTime], ProductController.show)
    .delete('/:id', ProductController.delete);
export default router;
