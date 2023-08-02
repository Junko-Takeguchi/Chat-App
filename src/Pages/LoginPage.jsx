import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useSetRecoilState} from "recoil";
import {userState} from "../Store/userAtom.js";
function LoginPage() {
    const setUsername = useSetRecoilState(userState);
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h4" sx={{color: "blue"}}>
                        Chat App
                    </Typography>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Username"
                            autoFocus
                            value={username}
                            onChange={(e)=>{
                                setUserName(e.target.value);
                            }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e)=>{
                                setPassword(e.target.value);
                            }}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={()=>{
                                axios.post('http://localhost:3000/login',{
                                    //username,firstName, lastName, password
                                    username: username,
                                    password: password
                                })
                                    .then((res)=>res.data)
                                    .then((data)=> {
                                        localStorage.setItem("token", data.token);
                                        setUsername((prevUser) => ({
                                            ...prevUser,
                                            username: username,
                                        }));
                                        navigate('/chat');
                                    })
                                    .catch((e)=>console.log(e));
                            }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                            </Grid>
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
    );
}

export default LoginPage;