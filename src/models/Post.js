import mongoose, { isValidObjectId } from "mongoose";

const Schema = mongoose.Schema;
// const <--변하지 않는다는 의미  Schema <-- 객체는 대문자로 시작함

const Post = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    hit: {
      type: Number,
      required: true,
      default: 0,
    },
    postType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: `PostType`,
    },
    createdAt: {
      type: String,
      required: true,
    },
    lastUpdataAt: {
      type: String,
      required: true,
    },
    isDelete: {
      type: Boolean,
      required: true,
      default: false,
    },
    comments: {
      type: Array,
      required: true,
    },
    no: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model(`Post`, Post, `Post`);
// (`별칭`, 실제 객체 , `몽고DB안에 있는 어떤 컬렉션과 연결할건데?`)
