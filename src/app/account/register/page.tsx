"use client"
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {
    Typography,
    Grid,
    Container,
    CssBaseline,
    Box,
    Avatar,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    FormControl,
} from '@mui/material';
import Link from 'next/link'
import { useState} from 'react';
import {AiOutlineEye,AiOutlineLock,AiOutlineEyeInvisible} from 'react-icons/ai';

// import LoginHook from '../../../src/Hooks/accountHooks/LoginHook';
// import {VisibilityOff, Visibility} from '@mui/icons-material';

export function Copyright(props : any) {
    return (
        <Typography
            className='link'
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}>
            {'Copyright © '}
            <a target='_blank' href="https://onbeirut.com">
                OnBeirut Agency
            </a>{' '} {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

const LoginForm = () => {
    const [showPassword,
        setShowPassword] = useState(false);
    const [isLoading,
        setLoading] = useState(false);
        const error = ''
        const [creds,
            setCreds] = useState({email:'',password:'',name:''})
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event : React.MouseEvent < HTMLButtonElement >) => {
        event.preventDefault();
    };
    // const {error,password, setPassword , handleSubmit, isLoading} = LoginHook()
    const handleSubmit = async (event : any ) => {    
        try {
        event.preventDefault();
        const req = await fetch(`${process.env.NODE_ENV}/register`,{

        })
        const res = await req.json();
        console.log('res: ', res);
    }
    catch(err) {
        console.log('err: ', err);
            
    }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth='sm' sx={{
                width: '100%',my:8,maxWidth:'400px'
            }}>
                <CssBaseline/>
                <Box
                    sx={{
                    boxShadow: 'rgb(0 0 0 / 15%) 0px 8px 24px',
                    p: {
                        xs: ' 2em 1em',
                        md: '2em 3em '
                    },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Avatar
                    className='bg'
                        sx={{
                        m: 1,
                        // bgcolor: '#d42c2a'
                    }}>
                        <AiOutlineLock/>
                    </Avatar>
                    <Typography
                        sx={{
                        fontSize: "1em",
                        textAlign: 'center'
                    }}
                        color={error
                        ? 'red'
                        : 'black'}
                        component="h1">
                        {error
                            ? error
                            : 'Sign in'}
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{
                        mt: 1
                    }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            value={creds.name}
                            onChange={(e)=>setCreds({...creds,name:e.target.value})}
                            data-cy='create-name'
                            id="name"
                            label="Full Name"
                            name="name"
                            autoComplete="name"
                            autoFocus/>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            value={creds.email}
                            onChange={(e)=>setCreds({...creds,email:e.target.value})}
                            data-cy='create-email'
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus/>

                        <FormControl
                            sx={{
                            mt: 1,
                            width: '100%'
                        }}
                            variant="outlined">

                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                sx={{
                                width: '100%'
                            }}
                            
                            value={creds.email}
                            onChange={(e)=>setCreds({...creds,password:e.target.value})}
                                id="outlined-adornment-password"
                                name='password'
                                type={showPassword
                                ? 'text'
                                : 'password'}
                                endAdornment={< InputAdornment position = "end" > <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end">
                                {showPassword
                                    ? <AiOutlineEyeInvisible/>
                                    : <AiOutlineEye/>}
                            </IconButton> 
                            </InputAdornment>}
                                label="Password"/>
                        </FormControl>

                        <FormControlLabel
                            control={< Checkbox value = "remember" color = "primary" />}
                            label="Remember me"/>
                        <Button
    className='bg'
disabled={isLoading}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                            mt: 3,
                            border: !isLoading
                                ? "1px solid "
                                : 'none',
                            mb: 2,
                            ":hover": {
                                color:'white',
                                background: 'white',
                                border: "1px solid black"
                            }
                        }}>
                            Sign In
                        </Button>

                        <Grid container>

                            <Grid className='link' item>
                                <Link href="/account/login">
                                    {"Already Registered? Login"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{
                    my: 4
                }}/>
            </Container>
        </ThemeProvider>
    );
}
export default LoginForm
