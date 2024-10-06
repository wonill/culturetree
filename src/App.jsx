// import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header.jsx";
import MainPage from "./pages/MainPage";
import Footer from "./layout/Footer.jsx";

function App() {
  // const [count, setCount] = useState(0);
  // const getPerformanceInfo = async () => {
  //   try {
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
