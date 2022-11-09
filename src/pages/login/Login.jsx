import "./login.scss"
import { Link } from "react-router-dom";
import { TextField, Button, Box } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";


// import { auth } from "../../firebase";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
// import { getAuth } from "firebase/auth";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  

  const handleLogin = (e) => {
    // e.preventDefault();

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user);
    alert('Invalid email or password')
  })
  .catch((error) => {
    setError(true)
  });
  }

  return (
    <>
      <div>
                <Box className="main-box">

                  <Container className="container">
                  <h1>Login</h1>
                  <label>
                    Password
                  </label>
                  <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    placeholder="Enter your password..."
                    className='textfield'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <label>Email</label>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    placeholder="Enter your email..."
                    className='textfield'
                    onchange={(e) => setEmail(e.target.value)}
                />
                  <Button onClick={handleLogin} variant="contained" color="success" className='btn1'>
                Login
                  </Button>

                
                  <h4>Don't have an account yet?</h4>
                  <Button variant="outlined" color="success" className='btn-1'>
                  <Link to="/register">Register</Link>

                  </Button>
                  
                  <Button variant="outlined" color="success" className='btn-1'>
                  <Link to="/adminhome">Admin</Link>

                  </Button>
                  <Button variant="outlined" color="success" className='btn-1'>
                  <Link to="/dochome">Doctor</Link>

                  </Button>

                  
                  </Container>

                </Box>

                <form onSubmit={handleLogin}>
                  <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                  <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                  <button type="submit">Login</button>
                </form>



        
        </div>

    </>
  )
}

export default Login