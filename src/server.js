import express from "express"; // express framework를 사용하기 위해 import함
import dotenv from "dotenv";
dotenv.config(); // 보안 코딩
import morgan from "morgan"; // debugging을 위해 morgan을 import함
import globalRouter from "./router/globalRouter";

const PORT = process.env.PORT;

// express를 app에 넣는다.
const app = express();

// app.js 에게 퍼그를 써야한다고 신호를 줌
// pug <- 키워드
app.set("view engine", "pug");

// app에게 morgan를 써야한다고 신호를 준다.
// dev <- 키워드
app.use(morgan(`dev`));

app.get("/", globalRouter);

// 설정 끝난 후 Server Start
app.listen(PORT, () => {
  console.log(`✅  ${PORT} Server Start`);
});
