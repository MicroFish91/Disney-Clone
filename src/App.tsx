import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContentWrapper from "./hoc/ContentWrapper";
import MainLayout from "./layouts/Main";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<ContentWrapper Wrapper={MainLayout} Content={Home} />}
        />
      </Routes>
    </div>
  );
}

export default App;
