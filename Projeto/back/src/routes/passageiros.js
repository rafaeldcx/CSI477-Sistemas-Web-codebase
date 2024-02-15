import { Router } from "express";
import { GetAllPassageiroController } from "../controller/passageiros/GetAllPassageirosController.js";
import { GetByIdPassageiroController } from "../controller/passageiros/GetByIdPassageiroController.js";
import { CreatePassageiroController} from "../controller/passageiros/CreatePassageiroController.js";
import { DeletePassageiroController } from "../controller/passageiros/DeletePassageiroController.js";
import { UpdatePassageiroController } from "../controller/passageiros/UpdatePassageiroController.js";

const passageiroRoutes = Router();

const getAllPassageirosController = new GetAllPassageiroController();
passageiroRoutes.get('/passageiros', getAllPassageirosController.handle);

const getByIdPassageiroController = new GetByIdPassageiroController();
passageiroRoutes.get('/passageiros/:id', getByIdPassageiroController.handle);

const createPassageiroController = new CreatePassageiroController();
passageiroRoutes.post('/passageiros', createPassageiroController.handle);

const deletePassageiroController = new DeletePassageiroController();
passageiroRoutes.delete('/passageiros', deletePassageiroController.handle);

const updatePassageiroController = new UpdatePassageiroController();
passageiroRoutes.put('/passageiros', updatePassageiroController.handle);

export { passageiroRoutes };

export default passageiroRoutes;