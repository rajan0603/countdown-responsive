import React, { useEffect } from "react";
import "./HomePage.css";
import { useState} from "react";
import DisplayTime from "../DisplayTime/DisplayTime";
import InputForm from "../InputForm/InputForm";

function HomePage (){
    const [isTimeRunning, setIsTimeRunning] = useState(false);
    const [data, setData] = useState({
        days : 0,
        hours : 0,
        minutes : 0,
        seconds : 0,
        message : "",
    });
    const [intervalId, setIntervalId] = useState(null);

    const startCountdown = (targetDatetime) => {
        clearInterval(intervalId);
        
        const interval = setInterval(() => {
            const now = new Date();
            const target = new Date(targetDatetime);

            if(target > now){
                const distance = target-now;

                const days = Math.floor(distance/(1000*60*60*24));
                const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
                const minutes = Math.floor((distance % (1000*60*60)) / (1000*60) );
                const seconds = Math.floor((distance % (1000*60)) / (1000));

                if (days <= 99 && hours <= 23 && minutes <= 59 && seconds <= 59) {
                    setIsTimeRunning(true);
                    setData({ days, hours, minutes, seconds, message: "" });
                } else {
                    setData({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    message: "Selected time is more than 100 days",
                    });
                }
            }
            else{
                setIsTimeRunning(false);
                setData({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    message: "🎉 The countdown is over! What's next on your adventure? 🎉",
                });
                clearInterval(interval)
            };
        }, 1000);
        setIntervalId(interval)
    };

    useEffect(() => {
        return () => {
            clearInterval(intervalId);
        };
    }, [intervalId]);

    const handleDatetime = (date) => {
        startCountdown(date);
    };

    const isClose = () => {
        clearInterval(intervalId);
        setIsTimeRunning(false);
        setData({
            days : 0,
            hours : 0,
            minutes : 0,
            seconds : 0,
            message : "",
        });
    }
    
    return (
        <div className="home-container">
            <h1 className="heading">Countdown <span className="highlight">Timer</span></h1>
            <InputForm 
                handleDatetime = {handleDatetime}
                isClose = {isClose}
                isTimeRunning = {isTimeRunning}
            />
            <DisplayTime data = {data} />
        </div>
    )
}

export default HomePage;