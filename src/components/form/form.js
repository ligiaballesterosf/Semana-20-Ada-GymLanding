import React, {useState} from 'react';
import './form.css';

const Form = ({addExcercise}) => {
    const [day, setDay] = useState("MON");
    const [excercise, setExcercise] = useState("Burpees");
    const [times, setTimes] = useState("");
    const [series, setSeries] = useState("");
    const handleClick = (e) => {
        e.preventDefault();
        addExcercise({day, excercise, times, series})
    };
    return (
        <form>
             <label>DAY: </label>
            <select onChange={e=>setDay(e.target.value)} id="day">
                <option selected="selected" value="MON">Monday</option>
                <option value="TUE">Tuesday</option>
                <option value="WED">Wednesday</option>
                <option value="THU">Thursday</option>
                <option value="FRI">Friday</option>
                <option value="SAT">Saturday</option>
                <option value="SUN">Sunday</option>
            </select>
            <label>EXERCISE: </label>
            <select id="exercises" onChange={e=>setExcercise(e.target.value)}>
                <option selected="selected" value="Burpees">Burpees</option>
                <option value="Push Up">Push Up</option>
                <option value="Swimming laps">Swimming laps</option>
                <option value="Climbing the stairs">Climbing the stairs</option>
                <option value="Side Plank Rotation Burpee">Side Plank Rotation Burpee</option>
                <option value="Wide Grip Pushup">Wide Grip Pushup</option>
                <option value="Clap Pushup">Clap Pushup</option>
            </select>,
            <label>TIMES: </label>
            <input type="text" placeholder="Ej: 9 Times" onChange={e=>setTimes(e.target.value)}></input>
            <label>SERIES: </label>
            <input type="text" placeholder="Ej: 3 Series" onChange={e=>setSeries(e.target.value)}></input>
            <button type="button" onClick={e => handleClick(e)}>GO!</button>

        </form>



    );
}

export default Form;
