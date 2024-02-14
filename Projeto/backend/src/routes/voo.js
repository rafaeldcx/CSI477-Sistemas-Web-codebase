import { Router } from "express";
import { CreateVooController } from "../controller/voos/CreateVooController.js";
import { DeleteVooController } from "../controller/voos/DeleteVooController.js";
import { GetAllVooController } from "../controller/voos/GetAllVooController.js";
import { GetByIdVooController } from "../controller/voos/GetByIdVooController.js";
import { UpdateVooController } from "../controller/voos/UpdateVooController.js";

const vooRoutes = Router();

const createVooController = new CreateVooController();
vooRoutes.post('/voos', createVooController.handle);

const deleteVooController = new DeleteVooController();
vooRoutes.delete('/voos', deleteVooController.handle);

const getAllVooController = new GetAllVooController();
vooRoutes.get('/voos', getAllVooController.handle);

const getByIdVooController = new GetByIdVooController();
vooRoutes.get('/voos/:voo_id', getByIdVooController.handle);

const updateVooController = new UpdateVooController();
vooRoutes.put('/voos', updateVooController.handle);

export { vooRoutes };

export default vooRoutes;