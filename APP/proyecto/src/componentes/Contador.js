//Hook useState
import { useState, useEffect } from "react";
import "./Contador.css";
const Contador = (props) => {
    const [count, setCount] = useState(0);
    const [nombre, setNombre] = useState(props.nombre);
    const [producto, setProducto] = useState("");
    useEffect(() =>{
        console.log(`El producto agregado fue: ${producto}`);
    })
    return (
        <div>
            <h1>Hola {nombre}</h1>
            <button onClick={()=>setNombre("Pedro")}> Cambiar nombre </button>
            <input type="text" onChange={(e) => setProducto(e.target.value)}/>
            <h1>El valor actual es: {count}</h1>
            <button onClick={()=>setCount(count - 1)}> - </button>
            <button onClick={()=>setCount(count + 1)}> + </button>
            <h1>El producto ingresado fue {producto}</h1>
        </div>

    );
}
export default Contador;