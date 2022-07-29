import React from "react";

function Login() {
  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60vh',
      background:'whitesmoke',
      
    }}
    >
      <div>
      <h1>Login</h1>
      <form>
        <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '6vh',
          margin:'2px'
        }}
        >
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          
          margin:'20px 0 15px 80px'
        }}
        type="submit" value="Submit" />
      </form>
    </div>
    </div>
  );
}

export default Login;