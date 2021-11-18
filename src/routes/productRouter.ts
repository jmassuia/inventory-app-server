import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';
import { Protect } from '../middleware/Protect';
import { RestrictTo } from '../middleware/RestrictTo';
const router = Router();

router.get('/', 
    new Protect().execute,
    new ProductController().index)

router.post('/',new ProductController().create)

router.patch('/:id',
    new Protect().execute, 
    new RestrictTo().execute('admin'),
    new ProductController().update)

router.delete('/:id',
    new Protect().execute,
    new RestrictTo().execute('admin'),
    new ProductController().remove)

export default router;