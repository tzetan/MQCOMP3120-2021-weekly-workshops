import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { useState } from 'react';


const units = [
  {code: 'COMP1010', title:'Fundamentals of Computer Science', offering: ['S1', 'S2']},
  {code: 'COMP1750', title:'Introduction to Business Information Systems', offering: ['S1']},
  {code: 'COMP2110', title:'Web Technology', offering: ['S1', 'S2']},
  {code: 'COMP2750', title:'Applications Modelling and Development', offering: ['S1']},
  {code: 'MMCC2045', title:'Interactive Web Design', offering: ['S2']},
  {code: 'COMP3120', title:'Advanced Web Development', offering: ['S2']},
  {code: 'COMP3130', title:'Mobile Application Development', offering: ['S1']}
]

const Unit = ({unit}) => {

  const [title, setTitle] = useState(unit.title);

  return(
    <div>
      <li> {unit.code} - {title} </li>
      <button onClick={() => setTitle(title.toUpperCase())}> Up </button>
      <button onClick={() => setTitle(title.toLowerCase())}> Down </button>
    </div>
  );
}

const App = (props) => {
  // const {units} = props;

  return(
    <div className="App">
      <header className="App-header">
        <h2> COMP3120: Advanced Web Development </h2>
        <ul> 
          {units.map(unit => <Unit key={unit.code} unit={unit} />)}
          {/* <Unit code = "COMP3120" title = "Advanced Web Development" /> */}
        </ul>
      </header>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App units={units} />
  </React.StrictMode>,
  document.getElementById('root')
);


