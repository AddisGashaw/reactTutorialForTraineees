import React from 'react'

function propsExample(props) {
  return (
<h1>Hello, {props.name}!</h1> )
}

export default propsExample





///this is for handling function argument 
//  function propsExample(props) {
//   return (
//     <div>
//       <button onClick={props.handleClick}>Click me</button>
//     </div>
//   );
// }




// for the third case 

// function ChildComponent(props) {
//     const handleClick = () => {
//       const value = "Example value";
//       props.handleClick(value);
//     };
  
//     return (
//       <div>
//         <button onClick={handleClick}>Click me</button>
//       </div>
//     );
//   }



