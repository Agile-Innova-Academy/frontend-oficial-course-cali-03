import Home from "../components/Home";
import NavBars from "../components/NavBars";
import Proyect from "../components/Proyect";
import { proyect } from "../data/data";
import "../styles/main.css"
const name = ["daniel", "Derlyn", "Juan", "valen", "Yesenia", "Edwing"];

function App() {
  return (
    <>
      <NavBars />

      {name.map((item, index) => (
        <Home key={index} name={item} />
      ))}
      {/* mostrar los proyectos realizados */}
      {proyect.map((item, index) => (
        <Proyect key={index} datos={item} />
      ))}
    </>
  );
}

export default App;
