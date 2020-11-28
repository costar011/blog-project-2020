import express from "express";
import dotenv from "dotenv";
dotenv.config(); // 보안 코딩
import morgan from "morgan";

const PORT = process.env.PORT;

// express를 app에 넣는다.
const app = express();

// app.js 에게 퍼그를 써야한다고 신호를 줌
// view engine <- 키워드
app.set("view engine", "pug");
app.use(morgan(`dev`));

// 설정 끝난 후 Server Start
app.listen(PORT, () => {
  console.log(`✅  ${PORT} Server Start`);
});
