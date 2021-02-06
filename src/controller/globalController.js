import Post from "../models/Post";
import PostType from "../models/PostType";
import dotenv from "dotenv";
dotenv.config();

const homeController = (req, res) => {
  console.log("I'm home Controller");
  res.render("screens/home");
};

const contactController = (req, res) => {
  res.render("screens/contact");
};

const javascriptController = async (req, res) => {
  try {
    const dataResult = await Post.find().populate({
      path: "PostType",
      model: PostType,
    });

    if (process.env.NODE_ENV === "development") {
      console.log("dev mode!!!!!!!!");
    }

    const devMode = process.env.NODE_ENV === "development";

    res.render("screens/javascript", { dataResult, devMode });
  } catch (e) {
    console.log(e);
    res.render("screens/home");
  }
};

const boardwriteController = async (req, res) => {
  console.log("I'm BOARDWRITE PAGE!!!!!!!!!!");
  res.render("screens/boardWrite");
};

export const globalController = {
  homeController,
  contactController,
  javascriptController,
  boardwriteController,
};
