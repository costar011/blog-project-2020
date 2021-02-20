import Post from "../models/Post";
import PostType from "../models/PostType";
import { globalController } from "./globalController";
import mongoose from "mongoose";

const detailController = async (req, res) => {
  try {
    const postData = await Post.findOne({ _id: req.params.id });
    res.render("screens/boardDetail", { postData });
  } catch (e) {
    console.log(e);
    res.render("screens/home");
  }
};

const boardWriteController = (req, res) => {
  const type = req.params.type;

  res.render("screens/boardWrite", { type });
};

const boardWriteDbController = async (req, res) => {
  console.log(req.body.title);
  console.log(req.body.desc);
  console.log(req.body.type);

  let searchType = "";

  if (req.body.type === "javascript") {
    searchType = "JS";
  }
  try {
    const type = await PostType.findOne({ typeName: searchType });

    const currentTime = new Date().toString();
    const allPost = await Post.find();
    const postNo = allPost.length + 1;

    console.log(postNo);
    console.log(type);
    console.log(currentTime);

    const newPostTpyeId = mongoose.Types.ObjectId(type._id);

    const result = await Post.create({
      title: req.body.title,
      description: req.body.desc,
      author: `관리자`,
      hit: 0,
    });
  } catch (e) {
    console.log(e);
  }

  globalController.javascriptController(req, res);
};

export const boardController = {
  detailController,
  boardWriteController,
  boardWriteDbController,
};
