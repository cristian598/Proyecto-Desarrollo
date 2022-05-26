import { Box, Button, Container, Grid, Link, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { userContext } from '../../context/authContext'
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate()
    const { singIn, logInGoogle } = useContext(userContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await singIn(email, password)
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleGoogleSingIn = async () => {
        try {
            await logInGoogle()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container >
            <Box
                sx={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Typography component="h1" variant="h5">
                    Ingresar
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, width: 350 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="email"
                                fullWidth
                                id="email"
                                label="Email"
                                autoFocus
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="password"
                                fullWidth
                                id="password"
                                label="Contraseña"
                                type={'password'}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        id='submit'
                        variant="contained"
                        sx={{ mt: 3, mb: 2, textTransform: 'none' }}
                    >
                        Ingresar
                    </Button>
                    <Link
                        sx={{ ':hover': { cursor: 'pointer' } }}
                        onClick={() => navigate('/register')}
                    >
                        Registrar
                    </Link>
                </Box>
                <Box>
                    <Button
                        fullWidth
                        id='google'
                        variant="contained"
                        onClick={handleGoogleSingIn}
                        sx={{ mt: 3, mb: 2, textTransform: 'none' }}
                    >
                        Ingresar con Google
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}