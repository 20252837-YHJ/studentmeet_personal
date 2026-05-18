const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// 정적 파일 서빙 (현재 폴더의 HTML, CSS, JS 파일 제공)
app.use(express.static(path.join(__dirname)));

// 루트 접속 시 index.html 반환
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// 답변 열람 페이지
app.get("/answers", (req, res) => {
  res.sendFile(path.join(__dirname, "answers.html"));
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`✅ StudentMeet 서버가 실행 중입니다.`);
  console.log(`👉 브라우저에서 열기: http://localhost:${PORT}`);
});
