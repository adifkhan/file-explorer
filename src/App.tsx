import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/shared/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
