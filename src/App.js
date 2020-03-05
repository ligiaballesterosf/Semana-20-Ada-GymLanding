import React, { useReducer } from 'react';
import './App.css';
import Calendar from './sections/calendar/calendar.js'
import Form from './components/form/form.js';
import Card from './components/card/card';

const initialState = [
  {
    day: "MON",
    excercises: []
  },
  {
    day: "TUE",
    excercises: []
  },
  {
    day: "WED",
    excercises: []
  },
  {
    day: "THU",
    excercises: []
  },
  {
    day: "FRI",
    excercises: []
  },
  {
    day: "SAT",
    excercises: []
  },
  {
    day: "SUN",
    excercises: []
  },
]

const reducer = (state, action) => {
  switch (action.type) {
    case 'addExcercise':
      const clone = [...state];
      const index = clone.findIndex(item => action.payload.day === item.day);
      clone[index].excercises.push({ excercise: action.payload.excercise, times: action.payload.times, series: action.payload.series });
      return clone;
    case 'addTimes':
      const index1 = clone.findIndex(item => action.payload.times === item.times);
      clone[index1].excercises.push({ excercise: action.payload.excercise, times: action.payload.times, series: action.payload.series });
      return clone;
    case 'addSeries':
      const index3 = clone.findIndex(item => action.payload.series === item.series);
      clone[index3].excercises.push({ excercise: action.payload.excercise, times: action.payload.times, series: action.payload.series });
      return clone;
    default:
      return state;


  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addExcercise = (payload) => {
    dispatch({ type: 'addExcercise', payload: payload })
  };
  const addTimes = (payload) => {
    dispatch({ type: 'addTimes', payload: payload })
  };
  const addSeries = (payload) => {
    dispatch({ type: 'addSeries', payload: payload })
  };
  return (
console.log(state) ||
    <div className="principal-bg">
      <h1>GYM SCHEDULE</h1>
      <div className="cards-container">
        {state.map(item => <Card key={item.day} day={item.day} exc={item.excercises}></Card>)}
      </div>
      <form>
        <Form addExcercise={addExcercise} addTimes={addTimes} addSeries={addSeries}></Form>
      </form>
    </div>

  );
}

export default App;
