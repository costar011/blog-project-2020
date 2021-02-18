import Post from "../models/Post";
import { globalController } from "./globalController";
const detailController = async (req, res) => {
  try {
    const postData = await Post.findOne({ _id: req.params.id });
    res.render("screens/boardDetail", { postData });

    console.log(postData);
  } catch (e) {
    console.log(e);
    res.render("screens/home");
  }
};

const boardWriteController = (req, res) => {
  const type = req.params.type;

  res.render("screens/boardWrite", { type });
};

const boardWriteDbController = (req, res) => {
  console.log(req.body.title);
  console.log(req.body.desc);
  // 1. postType에 들어갈 objectid가 필요해요.
  // 2. 현재날짜 시간을 구해서 -> 문자열로 형변환.

  globalController.javascriptController(req, res);
};

export const boardController = {
  detailController,
  boardWriteController,
  boardWriteDbController,
};
