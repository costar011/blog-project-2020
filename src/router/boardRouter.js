import express from "express";
import { routers } from "../routers";
import { boardController } from "../controller/boardController";

const boardRouter = express.Router();

boardRouter.get(routers.BOARD_DETAIL, boardController.detailController);

export default boardRouter;
