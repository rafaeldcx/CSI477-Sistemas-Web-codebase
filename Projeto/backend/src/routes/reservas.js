import { Router } from "express";
import { CreateReservaController } from "../controller/reservas/CreateReservaController.js";
import { DeleteReservaController } from "../controller/reservas/DeleteReservaController.js";
import { GetByIdReservaController } from "../controller/reservas/GetByIdReservaController.js";
import { GetAllReservaController } from "../controller/reservas/GetAllReservaController.js";
import { UpdateReservaController } from "../controller/reservas/UpdateReservaController.js";

const reservaRoutes = Router();

const createReservaController = new CreateReservaController();
reservaRoutes.post('/reservas', createReservaController.handle);

const deleteReservaController = new DeleteReservaController();
reservaRoutes.delete('/reservas', deleteReservaController.handle);

const getByIdReservaController = new GetByIdReservaController();
reservaRoutes.get('/reservas/:reserva_id', getByIdReservaController.handle);

const getAllReservaController = new GetAllReservaController();
reservaRoutes.get('/reservas', getAllReservaController.handle);

const updateReservaController = new UpdateReservaController();
reservaRoutes.put('/reservas', updateReservaController.handle);

export { reservaRoutes };

export default reservaRoutes;