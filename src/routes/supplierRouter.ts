import { Router } from 'express';
import { SupplierController } from '../controllers/SupplierController';
const router = Router();

router.get('/listsupplier',new SupplierController().index)
router.post('/addsupplier',new SupplierController().create)

export default router;