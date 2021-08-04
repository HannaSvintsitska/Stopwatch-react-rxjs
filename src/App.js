import React, {useState} from 'react';
import {interval} from 'rxjs';
import DisplayComponent from './Components/displayComponent';
import BntComponent from './Components/bntComponent';
import './App.css';

function App() {
  const [time, setTime] = useState({h:0, m:0, s:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  let updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const start = () => {
    setStatus(1);
    setInterv(setInterval(run, 1000));
  };

  const run = () => {
    if ( updatedM === 60 ) {
      updatedH++;
      updatedM = 0;
    }
    if ( updatedS === 59 ) {
      updatedM++;
      updatedS = -1;
    }
    updatedS++;
    setTime({h:updatedH, m:updatedM, s:updatedS});
  };

  const wait = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({h:0, m:0, s:0});
  };

  const reset = () => {
    clearInterval(interv);
    updatedS = 0;
    updatedM = 0;
    updatedH = 0;
    setTime({h:0, m:0, s:0});
    start();
  };

  const resume = () => start();

  return (
    <div className='main-section'>
      <div className='clock'>
        <div className='stopwatch'>
          <DisplayComponent time={time}/>
          <BntComponent status={status} resume ={resume} stop={stop} reset={reset} wait={wait} start={start}/>
        </div>
      </div>
    </div>
  );
}

export default App;
