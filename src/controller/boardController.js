import Post from "../models/Post";

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

export const boardController = {
  detailController,
};
