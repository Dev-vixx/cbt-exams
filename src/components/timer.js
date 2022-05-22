import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Timer() {
const navigate = useNavigate()
let [showTimer, setShowTime] = useState(true)
    const StopStudentExam = () => {
        console.log('stoped!!!!');
        setShowTime(!true)
        navigate('/completed', {replace:true})
    }
    function counted() {
        if(!showTimer) return null;
        var startTime = document.querySelector('#hms')?.textContent ||  '0:02:00';
        var pieces = startTime.split(":");
        var time = new Date();
        time.setHours(pieces[0]);
        time.setMinutes(pieces[1]);
        time.setSeconds(pieces[2]);
        var timedif = new Date(time.valueOf() - 1000);
        var newtime = timedif.toTimeString().split(" ")[0];
        document.querySelector('#hms').textContent = newtime;
        if(newtime === '00:00:00') return StopStudentExam()
        setTimeout(counted, 1000);
        localStorage.setItem('newTime', newtime)
      }

    useEffect(()=>{
        counted()
    })
  return (
      <>
          {showTimer && <h2 style={{float: 'right', margin: '2em'}} id='hms'></h2>}
      </>
  )
}
