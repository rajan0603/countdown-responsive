import "./DisplayTime.css";
import React from "react";

function DisplayTime ({data}) {
    return (
        <>
            {!(data.message.length > 0) ? (
                <div className="card-container">
                    <div className="card">
                        {data.days}
                        <span className="card-text">Days</span>
                    </div>
                    <div className="card">
                        {data.hours}
                        <span className="card-text">Hours</span>
                    </div>
                    <div className="card">
                        {data.minutes}
                        <span className="card-text">Minutes</span>
                    </div>
                    <div className="card">
                        {data.seconds}
                        <span className="card-text">Seconds</span>
                    </div>
                </div>
            ) : (
                <div className="message">
                    {data.message}
                </div>
            )}
        </>
    );
};

export default DisplayTime;