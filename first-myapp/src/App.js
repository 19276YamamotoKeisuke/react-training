import ToDoApp from "./components/ToDoApp";
 
function App() {
  return (
    <div className="container is-fluid">
      <ToDoApp />
    </div>
  );
}
 
export default App;

// import './App.css';
// import {useState} from 'react';



// const App = () => {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div className="App">
//         <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
//         <h1>{counter}</h1>
//         <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
//         {/*36:28*/}
//     </div>
//   );
// }
// export default App;