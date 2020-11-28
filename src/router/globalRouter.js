import express from "express";
import { routers } from "../routers";
import { globalController } from "../controller/globalController";

const globalRouter = express.Router();

globalRouter.get(routers.HOME, globalController.homeController);
globalRouter.get(routers.CONTACT, globalController.contactController);

export default globalRouter;
