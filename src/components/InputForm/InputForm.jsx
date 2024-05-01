import "./InputForm.css";
import React, { useState } from "react";


function InputForm ({handleDatetime, isClose, isTimeRunning}) {
    const [date, setDate]  = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        handleDatetime(date);
    };

    return (
        <div >
            <form onSubmit={handleSubmit} className="input-cotainer">
                <input 
                    type="datetime-local"
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className ="input-field"
                />
                {!isTimeRunning && (
                    <button type="submit" className="button">Start Timer</button>
                )}
                {isTimeRunning && (
                    <button type="button" className="button" onClick = {isClose}>Cancel Timer</button>
                )}
            </form>
        </div>
    );
};

export default InputForm;