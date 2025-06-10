import "bootstrap/dist/css/bootstrap.min.css";
import Informacion from "./components/Informacion";
import Contador from "./components/Contador";

function App() {
  const comision = 'c11'
  return (
    <main className="container my-5">

      <h1>hola mundo</h1>
      <Informacion comision={comision} anio={2025}/>
      <Contador />
    </main>
  );
}
export default App;
