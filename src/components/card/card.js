import React from 'react';

const Card = ({ day, exc }) => {
    return (

        <div className="card">
            <h2>{day}</h2>
            {exc.map(item =>
                <div>
                    <p>{item.excercise}</p>
                    <p>{item.times}</p>
                    <p>{item.series}</p>
                </div>
            )}
        </div>
    )
};

export default Card;