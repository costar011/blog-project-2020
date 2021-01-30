import Post from "../models/Post";
import PostType from "../models/PostType";

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

    res.render("screens/javascript", { dataResult });
  } catch (e) {
    console.log(e);
    res.render("screens/home");
  }
};

export const globalController = {
  homeController,
  contactController,
  javascriptController,
};
