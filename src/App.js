import './App.css';
import { useState } from 'react';
import colors from './data/colors';
import Quote from './components/Quote';
import Buttons from './components/Buttons';

function App() {

  // 'theme color indexes'
  const [tci, setTCI] = useState([0]);
  // 'quote indexes'
  const [qi, setQI] = useState([3]);

  const randomValue = function (which, num, arr) {
    const val = Math.floor(Math.random() * num);
    console.log(val, qi, tci);
    if (arr.includes(val)) {
      randomValue(which, num, arr);
      return;
    } else {
      if (arr.length < 5) {
        which === 'quote' ? setQI([...arr, val])
          : setTCI([...arr, val]);
      } else {
        which === 'quote' ? setQI([...arr].slice(1).concat(val))
          : setTCI([...arr].slice(1).concat(val));
      }
    }
  };

  return (
    <div
      className='frame'
      style={{backgroundColor:colors[tci[tci.length - 1]]}}
    >
      <div id='quote-box'>
        <Quote
          qi={qi}
          tci={tci}
        />
        <Buttons
          qi={qi}
          tci={tci}
          randomValue={randomValue}
        />
      </div>
    </div>
  );

};

export default App;
