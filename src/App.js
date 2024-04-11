import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Send from "./pages/Send";
// 추가
import Detail2 from "./pages/Detail2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/send" element={<Send />} />
        {/* 추가 */}
        <Route path="/detail2" element={<Detail2 />} />
      </Routes>
    </>
  );
}

export default App;
