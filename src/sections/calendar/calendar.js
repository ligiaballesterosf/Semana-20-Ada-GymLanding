import React from 'react';
import './calendar.css';


const days = [{ day: "MON" },
{ day: "TUE" },
{ day: "WED" },
{ day: "THU" },
{ day: "FRI" },
{ day: "SAT" },
{ day: "SUN" }]

const Calendar = () => {
    return (
        <section>
            <div className="calendar-container">
                <table>
                    <tr className="day-frame">
                        {days.map(card =>

                            <th>{card.day}</th>
                        )}
                    </tr>
                    <tr><div className="line-divisor"></div></tr>

                </table>


            </div>


        </section>

    );
}

export default Calendar;
