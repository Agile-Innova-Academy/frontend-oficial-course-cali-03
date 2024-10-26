import { useReducer } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reducersUser from "../reducers/reducers/reducersUser";
import { AuthContext } from "../context/AuthContext";
import PublicRouters from "./PublicRouters";
import PrivateRouters from "./PrivateRouters";
import Home from "../components/Home";
import DashboardRouters from "./DashboardRouters";

const init = () => {
  return { logged: false };
};
function App() {
  const [state, dispatch] = useReducer(reducersUser, {}, init);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          {/* Rutas Públicas */}
          <Route
            path="/login"
            element={
              <PublicRouters>
                <Login />
              </PublicRouters>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRouters>
                <Register />
              </PublicRouters>
            }
          />
          {/* Rutas privadas */}
          <Route
            path="/*"
            element={
              <PrivateRouters>
             <DashboardRouters/>
              </PrivateRouters>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
