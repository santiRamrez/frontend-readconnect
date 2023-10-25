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

const RegisterComponent = () => {
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

                    <Input size="small" name="name" label="Name and Lastname" helpText="Ig: John Mayer" />
                    <Input size="small" name="username" label="Email" helpText="Ig: youraccount@gmail.com" />
                    <Input size="small" name="password" label="Password" helpText="Ig: qwerty (at least 5 characters)" />
                    <Button variant="contained" color="success">Send</Button>
                </Stack>
            </Card>
        </Stack>
    </Box>
  );
};

export default RegisterComponent;