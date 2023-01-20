import React from "react";
import Form from "./Form";

const currentTime=new Date().getHours();
console.log(currentTime);
var userIsRegistered =true;

function App(){
return(
    <div className="container">
       <Form
       isRegistered={ userIsRegistered}
       />
     </div>
      );
    }
export default App;