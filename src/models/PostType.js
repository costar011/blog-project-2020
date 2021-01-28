import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const <--변하지 않는다는 의미  Schema <-- 객체는 대문자로 시작함

const PostType = new Schema(
  {
    typeName: {
      type: String,
      required: true,
    },

    isDelete: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`PostType`, PostType, `PostType`);
// (`별칭`, 실제 객체 , `몽고DB안에 있는 어떤 컬렉션과 연결할건데?`)
