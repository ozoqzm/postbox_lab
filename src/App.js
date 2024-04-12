import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Send from "./pages/Send";
import data from "./pages/data.json";

function App() {
  const [dataList, setDataList] = useState(data);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home dataList={dataList} />} />
        <Route
          path="/detail/:postId"
          element={<Detail dataList={dataList} />}
        />
        <Route path="/send" element={<Send />} />
      </Routes>
    </>
  );
}

export default App;
