
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [user,Setuser]=useState("")
  const [pass,setPass]=useState("")
  const [error,setError]=useState("")


const handleSubmit = () => {
  if(user.trim()==="" || pass.trim()===""){
    setError("Both the fields are required.")


  }
  else{
    setError("")
  }
}

  return (
    <div>
        {/* Do not remove the main div */}
        

        <input  id="username" type="text" value={user} onChange={(e)=>Setuser(e.target.value)}/>
        <input  id="password" type="password" value={pass} onChange={(e)=>setPass(e.target.value)}/>

        <button onClick={handleSubmit}>Submit</button>

        {
          error &&<p id="errorMessage" style={{color:"red"}}>{error}</p>
        }
    </div>
  )
}

export default App
