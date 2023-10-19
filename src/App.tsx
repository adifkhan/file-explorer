import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/shared/Header";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Toaster
        position="top-center"
        toastOptions={{
          // Define default options
          duration: 5000,
          style: {
            background:
              "linear-gradient(45deg, rgba(23,107,135,.5) 0%, rgba(100,204,197,1) 35%, rgba(100,204,197,1) 65%, rgba(23,107,135,.5) 100%)",
            color: "var(--primary-color)",
            fontSize: "1.5rem",
          },
        }}
      />
    </div>
  );
}

export default App;
