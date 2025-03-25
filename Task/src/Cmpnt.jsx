import React, { useState } from 'react';
Const Cmpnt = () => {
  const [count, setCount] = useState(10);
  const [isActive, setIsActive] = useState(false);  

  const toggleCountdown = () => {
    setIsActive(!isActive);    
    if (!isActive) {
      const countdown = setInterval(() => {
        setCount(prevCount => {
          if (prevCount <= 1) {
            clearInterval(countdown);
            setIsActive(false);
            return 10;
          }
          return prevCount - 1;
        });
      }, 1000);         
    }
}
    

  const progressPercentage = ((10 - count) / 10) * 100;

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={toggleCountdown} style={{
        backgroundColor: isActive ? 'lightgreen' : 'lightcoral',
        color: 'white',
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        {isActive ? `Countdown: ${count}` : 'Start Countdown'}
      </button>
      <div style={{
        height: '20px',
        width: '100%',
        backgroundColor: '#ddd',
        marginTop: '10px'
      }}>
        <div style={{
          height: '100%',
          width: `${progressPercentage}%`,
          backgroundColor: isActive ? 'lightgreen' : 'lightcoral',
          transition: 'width 1s'
        }}></div>
      </div>
    </div>
  );
};

export default Cmpnt;
  const [count, setCount] = useState(10);
  const [isActive, setIsActive] = useState(false);

  const toggleCountdown = () => {
    setIsActive(!isActive);
    if (!isActive) {
      const countdown = setInterval(() => {
        setCount(prevCount => {
          if (prevCount <= 1) {
            clearInterval(countdown);
            setIsActive(false);
            return 10;
          }
          document.body.classList.toggle('dark', isActive);
          document.body.style.setProperty('--progress', `${(prevCount - 1) / 10 * 100}%`);
          return prevCount - 1;
        }, 1000);
      const timer = setInterval(() => {
        setCount(prevCount => {
          if (prevCount <= 0) {
            clearInterval(timer);
            setIsActive(false);
            return 30;
          }
          return prevCount - 1;
        }, 1000);
        });
      }, 1000);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={toggleCountdown} style={{
        backgroundColor: isActive ? 'lightgreen' : 'lightcoral',
        color: 'white',
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        {isActive ? `Countdown: ${count}` : 'Start Countdown'}
      </button>
    </div>
  );
};
  const [count, setCount] = useState(10);

  const theme = {
    backgroundColor: isActive ? 'lightgreen' : 'lightcoral',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };
  const [isActive, setIsActive] = useState(false);

  const toggleCountdown = () => {
    setIsActive(!isActive);
    if (!isActive) {
      const countdown = setInterval(() => {
        setCount(prevCount => {
          if (prevCount <= 1) {
            clearInterval(countdown);
            setIsActive(false);
            return 10;
          }
          return prevCount - 1;
        });
      }, 1000);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={toggleCountdown} style={{
        backgroundColor: isActive ? 'lightgreen' : 'lightcoral',
        color: 'white',
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        {isActive ? `Countdown: ${count}` : 'Start Countdown'}
      </button>
    </div>
  );
};

export default Cmpnt;

