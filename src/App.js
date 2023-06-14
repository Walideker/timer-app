import React, { useState, useRef, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'



function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState('start')
  useEffect(() => {
    return () => clearInterval(id.current)
  }, [])
  let id = useRef
  function handleTime() {
    id.current = setInterval(() => {
      setTime((prev) => prev + 1)
    }, 1000)
    setName('continue')
  }
  return (
    <center>
      <div className="container  ">
        <nav className="navbar navbar-expend">
          <div className="navbar-brand">
            <i className="bi bi-stopwatch timer"></i>
          </div>
        </nav>
        <div className="mt-5">
          <h1 className="pt-5 ">{time}</h1>
          <button className="btn btn-success " onClick={() => handleTime()}>{name}</button>
          <button className="btn btn-success m-2 " onClick={() => clearInterval(id.current)}>pause</button>
          <button className="btn btn-success" onClick={() => {
            clearInterval(id.current)
            setTime(0);
            setName('start')
          }}>reset</button>
        </div>
      </div>
    </center>
  );
}

export default Timer;
