import React from 'react';
import './form.css';

const Form = () => {
    return (

        <form>
            <label>EXERCISE</label>
            <input type="text" placeholder="Ej: Burpees"></input>
            <label>TIMES</label>
            <input type="text" placeholder="Ej: 9 Times"></input>
            <label>SERIES</label>
            <input type="text" placeholder="Ej: 3 Series"></input>
            <button>GO!</button>

        </form>



    );
}

export default Form;
