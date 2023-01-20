import React from 'react'
import Box from '@mui/material/Box';
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';
import {useState} from 'react';

function Login() {

    const [formData, setFormData] = useState({ 
        email:"", 
        password:""

    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value

        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        const postData = async () => {

            const response = await axios.post('http://localhost:8092/userLogin', formData);
            console.log(response);
        }
        postData();

    }

    return (
        <Box>
            <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-email"
                    type="email"
                    name='email'
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                edge="end"
                            >
                            </IconButton>
                        </InputAdornment>
                    }
                    label="email"
                />
            </FormControl>

            <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type="text"
                    name='password'
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                edge="end"
                            >
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
            <br></br>
            <Button variant="contained" color="success" onClick={handleSubmit}>
                LOGIN
            </Button>
        </Box>
    )
}

export default Login