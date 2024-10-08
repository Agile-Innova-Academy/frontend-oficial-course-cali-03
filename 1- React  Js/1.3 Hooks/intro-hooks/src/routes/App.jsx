import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Counter from "../componets/Counter";
import Login from "../componets/Login";
import Register from "../componets/Register";
import Home from "../componets/Home";

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate  to="/"/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
