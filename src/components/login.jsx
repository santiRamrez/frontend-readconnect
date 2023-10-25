import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';

// My Components
import Input from './Input'

//Next js
import Link from 'next/link';

const LoginComponent = () => {




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
                    <Input size="small" name="username" label="Correo Electrónico" helpText="Ej: tucorreo@gmail.com" />
                    <Input size="small" name="password" label="Contraseña" helpText="Ej: clave (mínimo 5 caracteres)" />
                    <Button variant="contained" color="success">Send</Button>
                </Stack>
            </Card>
        </Stack>
    </Box>
  );
};

export default LoginComponent;
