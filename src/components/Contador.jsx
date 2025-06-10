import { useState } from "react";

useState
const Contador = () => {
    // craer un estado
    const [numero, setNumero] = useState(1)
    // let numero = 1;

    const sumar = () => {
        setNumero(numero + 1)
        console.log(numero);

    }

    const restar = () => {
        if (numero <= 1) {
            // alert("El numero no puede ser menor a 1")
            return;
        }
        setNumero(numero - 1)
        console.log(numero);
    }
    return (
        <section className="text-center mt-5">
            <h2>Contador</h2>
            <h3>N°:{numero}</h3>
            <button className="btn btn-primary me-3" onClick={sumar}>+</button>
            <button className="btn btn-danger" onClick={restar}>-</button>
        </section>
    );
};

export default Contador;
