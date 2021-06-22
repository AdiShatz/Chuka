import React, { useState } from "react";


function LoginButton(){

const [name, setName] = useState("אורח");

function handleClick(){
  setName("ניר");
}

return(
          <button onClick={handleClick}>{name}</button>
);
        }

export default LoginButton;
