import React from 'react'
import Box from '@mui/material/Box';
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';
import {useState} from 'react'; 
import { useNavigate } from "react-router-dom";

function Registration() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userName:"", 
        email:"", 
        phoneNumber:"", 
        dateOfBirth:"",
        address:"",
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
            try {
                const response = await axios.post('http://localhost:8092/userRegister', formData);
                if(response===false){
                    alert('login Error')
                    }else{
                        alert('Registarion Successfully')
                        navigate("/Login");
                    }
                
            } catch (error) {
                alert(error)
            }
 
        }
        postData();

        }

    return (
        <Box>
            <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-userName">user Name</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-userName"
                    type="text"
                    name='userName'
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                edge="end"
                            >
                            </IconButton>
                        </InputAdornment>
                    }
                    label="userName"
                />
            </FormControl>
           
            <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-email">email</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-email"
                    type="text"
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
                <InputLabel htmlFor="outlined-adornment-dateOfBirth">dateOfBirth</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-dateOfBirth"
                    type="text"
                    name='dateOfBirth'
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                edge="end"
                            >
                            </IconButton>
                        </InputAdornment>
                    }
                    label="dateOfBirth"
                />
            </FormControl>
            <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-phoneNumber">phoneNumber</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-phoneNumber"
                    type="text"
                    name='phoneNumber'
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                edge="end"
                            >
                            </IconButton>
                        </InputAdornment>
                    }
                    label="phoneNumber"
                />
            </FormControl>

            
            <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-address">address</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-address"
                    type="text"
                    name='address'
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                edge="end"
                            >
                            </IconButton>
                        </InputAdornment>
                    }
                    label="address"
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
                Submit
            </Button>
        </Box>
    )
}

export default Registration