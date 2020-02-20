import React from 'react';
import './App.css';
import Calendar from './sections/calendar/calendar.js'
import Form from './components/form/form.js'


const App = () => {
  return (

    <div className="principal-bg">

      <h1>GYM SCHEDULE</h1>
      <Calendar></Calendar>
     
      <form>
        <Form></Form>
      </form>

    </div>

  );
}

export default App;
