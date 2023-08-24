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
import { useRouter } from 'next/navigation';




const theme = createTheme();
const LoginForm = () => {
const router= useRouter()

    const [showPassword,
        setShowPassword] = useState(false);
    const [isLoading,
        setLoading] = useState(false);
        const error = ''
        const [creds,
            setCreds] = useState({email:'',password:''})
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event : React.MouseEvent < HTMLButtonElement >) => {
        event.preventDefault();
    };
    // const {error,password, setPassword , handleSubmit, isLoading} = LoginHook()
    const handleSubmit = async (event : any ) => {    
        event.preventDefault();
        try {
        if (!creds?.email || !creds?.password) {
            return;
        }   
        const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/login`,{
            method: "post",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            
            //make sure to serialize your JSON body
            body: JSON.stringify({
            email: creds.email,
            password: creds.password,

            })
            })
        const res = await req.json();
        if (res?.success && res?.jwt  && res?.jwt?.length > 5  && res?.user) {
            localStorage.setItem('5if16wt1',JSON.stringify(res?.jwt))
            localStorage.setItem('8s01er-0recds',JSON.stringify(res?.user))
            
            router.push('/wishlist')
        }
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
                            
                            value={creds.password}
                            onChange={(e)=>setCreds({...creds,password:e.target.value})}
                                id="outlined-adornment-password"
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
                                color:'black',
                                background: 'white !important',
                                border: "1px solid black"
                            }
                        }}>
                            Sign In
                        </Button>

                        <Grid container>

                            <Grid className='link' item>
                                <Link href="/account/register">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
               
<Box sx={{my:4}}>

<Typography
            className='link'
            variant="body2"
            color="text.secondary"
            align="center"
          >
            {'Copyright © '}
            <a target='_blank' href="https://onbeirut.com">
                OnBeirut Agency
            </a>{' '} {new Date().getFullYear()}
            {'.'}
        </Typography>
        </Box>

            </Container>
        </ThemeProvider>
    );
}
export default LoginForm
