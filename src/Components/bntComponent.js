import React from 'react';

function BntComponent(props) {
  return (
    <div>
      {(props.status === 0)? 
            <button className='stopwatch-btn'
                    onClick={props.start}>Start
            </button> : ''
      }

        {(props.status === 1)? 
            <div>
                <button className='stopwatch-btn stopwatch-btn-stop'
                    onClick={props.stop}>Stop
                </button>
                <button className='stopwatch-btn stopwatch-btn-wait'
                    onClick={props.wait}>Wait
                </button>
                <button className='stopwatch-btn stopwatch-btn-reset'
                    onClick={props.reset}>Reset
                </button> 
            </div> : ''
        }
        {(props.status === 2)? 
            <div>
                <button className='stopwatch-btn stopwatch-btn-stop'
                    onClick={props.stop}>Stop
                </button>
                <button className='stopwatch-btn stopwatch-btn-resume'
                    onClick={props.resume}>Resume
                </button>
                <button className='stopwatch-btn stopwatch-btn-reset'
                    onClick={props.reset}>Reset
                </button> 
            </div> : ''
        }
      
    </div>
  );
}

export default BntComponent;