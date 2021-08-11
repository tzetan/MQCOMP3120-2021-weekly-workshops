import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



// const Unit = ({ unit }) => {

//   const [title, setTitle] = useState(unit.title);

//   return (
//     <div>
//       <li> {unit.code} - {title} </li>
//       <button onClick={() => setTitle(title.toUpperCase())}> Up </button>
//       <button onClick={() => setTitle(title.toLowerCase())}> Down </button>
//     </div>
//   );
// }

// const App = (props) => {
//   // const {units} = props;

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2> COMP3120: Advanced Web Development </h2>
//         <ul>
//           {units.map(unit => <Unit key={unit.code} unit={unit} />)}
//           {/* <Unit code = "COMP3120" title = "Advanced Web Development" /> */}
//         </ul>
//       </header>
//     </div>
//   )
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
