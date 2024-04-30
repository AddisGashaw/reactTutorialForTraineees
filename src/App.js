// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



//Second Portion

import FirstComponent from "./components/FirstComponent";
import PropsExample from "./components/propsExample";

function App() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>This is my first React component.</p>
      <FirstComponent/>
              {/* Passing Props:  You can pass props to a component by including them as attributes when rendering the component. */}
      <PropsExample name="Addis" />



      {/*   DYNAMIC PROPS .....PUT THIS AT THE TOP const username = "Alice";

  <PropsExample name={username}/> */}





  {/*  
  ----------Function passing---------------
  
  //put at the top 
  const handleClick = () => {
    console.log("Button clicked!");



    <PropsExample handleClick={handleClick} />
  };

  
  
  
  */}


  {/* 
  put at the top
      const handleClick = (value) => {
    console.log("Button clicked with value:", value);
  };
      <PropsExample handleClick={handleClick} />

  */}

    </div>
  );
}

export default App;





