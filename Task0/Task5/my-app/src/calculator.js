import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [value, setValue] = useState('');

  const handleButtonClick = (e) => {
    const buttonValue = e.target.value;

    if (buttonValue === 'AC') {
   
      setValue('');
    } else if (buttonValue === 'DE') {
     
      setValue(value.slice(0, -1));
    } else if (buttonValue === '=') {
      try {
      
        setValue(eval(value).toString());
      } catch {
        setValue('Error');
      }
    } else {
     
      setValue(value + buttonValue);
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <form>
          <div>
            <input type="text" value={value} readOnly className="readOnly"/>
          </div>
          <div>
            <input type="button" value="AC" onClick={handleButtonClick} />
            <input type="button" value="DE" onClick={handleButtonClick} />
            <input type="button" value="." onClick={handleButtonClick} />
            <input type="button" value="/" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="7" onClick={handleButtonClick} />
            <input type="button" value="8" onClick={handleButtonClick} />
            <input type="button" value="9" onClick={handleButtonClick} />
            <input type="button" value="*" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="4" onClick={handleButtonClick} />
            <input type="button" value="5" onClick={handleButtonClick} />
            <input type="button" value="6" onClick={handleButtonClick} />
            <input type="button" value="+" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="1" onClick={handleButtonClick} />
            <input type="button" value="2" onClick={handleButtonClick} />
            <input type="button" value="3" onClick={handleButtonClick} />
            <input type="button" value="-" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="00" onClick={handleButtonClick} />
            <input type="button" value="0" onClick={handleButtonClick} />
            <input type="button" value="=" className="equal" onClick={handleButtonClick} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Calculator;
