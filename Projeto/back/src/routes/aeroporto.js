import { Router } from "express";
import { CreateAeroportoController } from "../controller/aeroportos/CreateAeroportoController.js";
import { DeleteAeroportoController } from "../controller/aeroportos/DeleteAeroportoController.js";
import { GetAllAeroportoController } from "../controller/aeroportos/GetAllAeroportoController.js";
import { GetByIdAeroportoController } from "../controller/aeroportos/GetByIdAeroportoController.js";
import { UpdateAeroportoController } from "../controller/aeroportos/UpdateAeroportoController.js";

const aeroportoRoutes = Router();

const createAeroportoController = new CreateAeroportoController();
aeroportoRoutes.post('/aeroportos', createAeroportoController.handle);

const getAllAeroportoController = new GetAllAeroportoController();
aeroportoRoutes.get('/aeroportos', getAllAeroportoController.handle);

const getByIdAeroportoController = new GetByIdAeroportoController();
aeroportoRoutes.get('/aeroportos/:aeroporto_id', getByIdAeroportoController.handle);

const updateAeroportoController = new UpdateAeroportoController();
aeroportoRoutes.put('/aeroportos', updateAeroportoController.handle);

const deleteAeroportoController = new DeleteAeroportoController();
aeroportoRoutes.delete('/aeroportos', deleteAeroportoController.handle);

export { aeroportoRoutes };

export default aeroportoRoutes;