import { Route, Routes } from "react-router-dom";
import ContentWrapper from "./hoc/ContentWrapper";
import MainLayout from "./layouts/Main";
import Details from "./pages/Details";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<ContentWrapper Wrapper={MainLayout} Content={Home} />}
        />
        <Route
          path="/details"
          element={<ContentWrapper Wrapper={MainLayout} Content={Details} />}
        />
      </Routes>
    </>
  );
}

export default App;
