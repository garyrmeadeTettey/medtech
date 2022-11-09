import React from 'react'
import './register.scss'
import { Link } from 'react-router-dom'
import { TextField, Button, Box } from '@mui/material'
import { Container } from '@mui/system'


const Register = () => {
    return (
        <div>
            <Box className='main-box'>
            <Container className='container'>
            <div>
            <h1>Register</h1>

            <form className="registerForm">
                {/* <label>Username</label>
                <input type="text" placeholder="Enter your username..." /> */}
                <label>Username</label>
                <br />
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    placeholder="Enter your username..."
                    className='textfield'
                />
                <br />
                <label>Email</label>
                <br />
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    placeholder="Enter your email..."
                    className='textfield'
                />
                <br />
                <label>phone number</label>
                <br />
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    placeholder="Enter your phone number..."
                    className='textfield'
                />
                <br />
                <label>Password</label>
                <br />
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    placeholder="Enter your password..."
                    className='textfield'
                />
                <br />
                
                <label>Confirm Password</label>
                <br />
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    placeholder="Confirm your password"
                    className='textfield'
                />
                <br />
                

                {/* <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                /> */}
            </form>
            <Button variant="contained" color="success" className='btn'>
                Register
            </Button>


        </div>
            <div className="bottom">
            <h4>Already have an account?</h4>
            <Button variant="outlined" color="success" className='btn-1'>
            <Link to="/">Login</Link>
                
            </Button>

        </div>
            </Container>
        </Box>
        </div>
    
    )
}

export default Register