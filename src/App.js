import React, {useEffect, useState} from 'react';
import Clock from './Components/clock';
import Buttons from './Components/buttons';
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [interv, setInterv] = useState(false);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    const unsubsrc = new Subject();
    interval(10).pipe(takeUntil(unsubsrc))
    .subscribe(() => {
      if (interv) {
        setTime(v => v + 1);
      }
    });
    return () => {
      unsubsrc.next();
      unsubsrc.complete();
    }
  }, [interv]);

  const start = () => {
    setInterv(prevState => !prevState);
    setStatus(1);
  };

  const wait = () => {
    setInterv(false);
    setStatus(2);
  };

  const stop = () => {
    setInterv(false);
    setStatus(0);
    setTime(0);
  };

  const reset = () => {
    setTime(0);
    setInterv(false);
    setStatus(0);
    start();
  };

  const resume = () => start();

  return (
    <div className='main-section'>
      <div className='clock'>
        <div className='stopwatch'>
          <Clock time={time}/>
          <Buttons status={status} resume ={resume} stop={stop} reset={reset} wait={wait} start={start}/>
        </div>
      </div>
    </div>
  );
}

export default App;
