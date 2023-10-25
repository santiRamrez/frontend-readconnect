'use client'

import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';

// My Components
import Input from './Input'

import HTTP from '../utils/HTTP'

//Next js
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'

const RegisterComponent = () => {
    const [data, setData] = useState({})
    const router = useRouter()
    
    const handleChange = (obj) => {
        setData((prev) => {
          const output = {
            ...prev,
            [obj.name]: obj.value,
          };
          return output;
        });
    };

    const handleSubmit = (e) => {
      e.preventDefault()
      const json = JSON.stringify(data)
      const request = new HTTP()
      request.postRecord(json, "signup/")
        .then((resp) => {
          localStorage.setItem("redconnect", resp.token)
          router.push('/books')
        })
    
    }

  return (
    <Box>
        <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
            <Card sx={{
                p: 4,
                width: 1,
                maxWidth: 420,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'spaceAround',
                justifyContent: 'spaceAround',
            }}>
                <Stack spacing={3}>
                    <Typography variant="h4">Create an account</Typography>
                    <br></br>

                    <Input size="small" name="username" label="Username" helpText="Ig: JohnMayer" value={(val) => handleChange(val) }/>
                    <Input size="small" name="email" label="Email" helpText="Ig: johnmayer@gmail.com" value={(val) => handleChange(val) }/>
                    <Input size="small" name="password" label="Password" helpText="Ig: qwerty (at least 5 characters)" value={(val) => handleChange(val) }/>
                    <Button type="submit" onClick={handleSubmit} variant="contained" color="success">Send</Button>
                </Stack>
            </Card>
        </Stack>
    </Box>
  );
};

export default RegisterComponent;