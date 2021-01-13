import express from "express";
import { routers } from "../routers";
import { globalController } from "../controller/globalController";

const globalRouter = express.Router();

globalRouter.get(routers.HOME, globalController.homeController);
globalRouter.get(routers.CONTACT, globalController.contactController);
globalRouter.get(routers.JAVASCRIPT, globalController.javascriptController);

export default globalRouter;
