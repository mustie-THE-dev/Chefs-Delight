import React from "react";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '6vh',
            
          }}
        >
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input
          style={{
            margin:'20px',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize:'30px',
            border:'solid 1px'
            
            
          }} type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;