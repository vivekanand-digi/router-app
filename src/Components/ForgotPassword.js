import React from 'react'
import Box from '@mui/material/Box';
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';
import {useState} from 'react';


function ForgotPassword() {

    const [formData, setFormData] = useState({ 
        email:"", 
        phoneNumber:"",
        EnterNewPassword:""

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

            const response = await axios.post('http://localhost:8092/forgotPassword', formData);
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
                    value={formData.email}
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
                <InputLabel htmlFor="outlined-adornment-phoneNumber">PhoneNumber</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-phoneNumber"
                    type="number"
                    name='phoneNumber'
                    value={formData.phoneNumber}
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
                <InputLabel htmlFor="outlined-adornment-enterNewPassword">EnterNewPassword</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-enterNewPassword"
                    type="text"
                    name='enterNewPassword'
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                edge="end"
                            >
                            </IconButton>
                        </InputAdornment>
                    }
                    label="enterNewPassword"
                />
            </FormControl>
            <br></br>
            <Button variant="contained" color="success" onClick={handleSubmit}>
                CONFIRM
            </Button>
        </Box>
    )
}

export default ForgotPassword