import "bootstrap/dist/css/bootstrap.min.css";
import Informacion from "./components/Informacion";

function App() {
  const comision = 'c11'
  return (
    <main className="container my-5">

      <h1>hola mundo</h1>
      <Informacion comision={comision} anio={2025}/>
    </main>
  );
}
export default App;
