import React from "react";
import Login from "./Login";
import Input from "./Input";

var isLoggedIn=false;

function renderConditionally(){
    if(isLoggedIn===true){
      return  (
      <h1>Hello</h1>
      );
    }

    else{
        return(
        <div>
            <Login/>
        </div>

     
        );
    }
}

function App(){
return(
    <div className="container">
       {renderConditionally()}

    </div>
);
}
export default App;