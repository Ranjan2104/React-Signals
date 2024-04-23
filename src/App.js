import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);
//   console.log("re-render");
//   return (
//     <div className="App">
//       <header className="App-header">
//       {`Count is ${count}`}
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           <button onClick={() => setCount(count + 1)}>Click</button>
//         </p>
//       </header>
//     </div>
//   );
// }

import { signal } from '@preact/signals-react';
const count = signal(0);
const fname = signal("");

function App() {
  console.log("tt");
  
  return (
    <div className="App">
      <header className="App-header">
        <p>Count is {count}, {fname}</p>
        <input onChange={(e) => fname.value = e.target.value}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={() => count.value++}>Click</button>
        </p>
      </header>
    </div>
  );
}


export default App;
