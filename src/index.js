import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FormHandling from './components/FormHandling';
import FormHandlingTwo from './components/FormHandlingTwo';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormHandlingTwo />
  </React.StrictMode>
);


// In React, a root component is the entry point for rendering your application's UI. 
// It represents the top-level component in the component tree and serves as the container for all other components.

// The createRoot() method accepts a DOM element as an argument, typically obtained using document.getElementById().
// It creates a root instance that can be used to render React components  into the specified DOM element.

///REACT BEFORE VERSSION 18
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

