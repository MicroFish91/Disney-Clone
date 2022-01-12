import { Route, Routes } from "react-router-dom";
import ContentWrapper from "./hoc/ContentWrapper";
import MainLayout from "./layouts/Main";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Login from "./pages/Login";

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
        <Route
          path="/login"
          element={<ContentWrapper Wrapper={MainLayout} Content={Login} />}
        />
      </Routes>
    </>
  );
}

export default App;
