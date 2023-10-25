import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';

// My Components
import Input from './Input'

import HTTP from '../utils/HTTP'

//Next js
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const LoginComponent = () => {
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
      request.postRecord(json, "login/")
        .then((resp) => {
          // Compare token at the response with token at localstorage
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
                <Stack spacing={2}>
                    <Typography variant="h4">Login</Typography>
                    <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
                        Did you not have an account?, <Link href="/register">Sign up here!</Link>
                    </Typography>
                    <br></br>
                    <Input size="small" name="username" label="Correo Electrónico" helpText="Ej: tucorreo@gmail.com" value={(val) => handleChange(val)}/>
                    <Input size="small" name="password" label="Contraseña" helpText="Ej: clave (mínimo 5 caracteres)" value={(val) => handleChange(val)}/>
                    <Button onClick={handleSubmit} variant="contained" color="success">Send</Button>
                </Stack>
            </Card>
        </Stack>
    </Box>
  );
};

export default LoginComponent;
