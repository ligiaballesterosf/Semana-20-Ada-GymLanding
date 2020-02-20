import React from 'react';
import './form.css';

const Form = () => {
    return (

        <form>
            <label>Ejercicio</label>
            <input type="text" placeholder="Ej: Burpees"></input>
            <label>Repeticiones</label>
            <input type="text" placeholder="Ej: 9 Repeticiones"></input>
            <label>Series</label>
            <input type="text" placeholder="Ej: 3 Series"></input>
            <button>Agregar</button>

        </form>



    );
}

export default Form;
