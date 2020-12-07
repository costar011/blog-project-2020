import express from "express"; // express framework를 사용하기 위해 import함
import dotenv from "dotenv"; // 보안코딩을 위해 dotenv를 import함
dotenv.config(); // 보안 코딩
import morgan from "morgan"; // debugging을 위해 morgan을 import함
import globalRouter from "./router/globalRouter";
import path from "path";

const PORT = process.env.PORT;

// express를 app에 넣는다.
const app = express();

// app.js 에게 퍼그를 써야한다고 신호를 줌
// pug <- 키워드
app.set("view engine", "pug");

// 내 경로 확인 하는 법
// console.log(path.resolve(__dirname));

// app에게 morgan를 써야한다고 신호를 준다.
// dev <- 키워드
app.use(morgan(`dev`));

// app.js 에게 CSS나 js는 /assets에 있다.
app.use(express.static(path.join(__dirname, "/assets")));

app.get("/", globalRouter);

app.get("/contact", globalRouter);

// 설정 끝난 후 Server Start
app.listen(PORT, () => {
  console.log(`✅  ${PORT} Server Start`);
});
