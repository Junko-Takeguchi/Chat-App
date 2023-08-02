import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import LoginPage from "./Pages/LoginPage.jsx";
import SignUp from "./Pages/SignUp.jsx";
import HomePage from "./Pages/HomePage.jsx";
import './App.css'
import {RecoilRoot, useRecoilValue, useSetRecoilState} from "recoil";
import {userState} from "./Store/userAtom.js";
import axios from "axios";
import {useEffect} from "react";

function App() {
    return(
        <RecoilRoot>
            <Router>
                <InitState/>
                <Routes>
                    <Route path={"/"} element={<LoginPage />}/>
                    <Route path={"/signup"} element={<SignUp />}/>
                    <Route path={"/chat"} element={<HomePage />}/>
                </Routes>
            </Router>
        </RecoilRoot>
    )
}

function InitState() {
    const setUser = useSetRecoilState(userState);
    const user = useRecoilValue(userState);
    const navigate = useNavigate();
    const init = async () => {
        const token = localStorage.getItem("token");
        const res = await axios.get('http://localhost:3000/me', {
            headers: {
                Authorization: "Bearer " + token
            }
        });

        const { username, firstName, lastName } = res.data;
        setUser({
            username: username,
            firstName: firstName,
            lastName: lastName,
        });
    }

    useEffect(() => {
        init();
    }, []);
    //
    // useEffect(() => {
    //     console.log(user); // This will show the updated user value after the state has been modified.
    // }, [user]); // Add 'user' as a dependency to the second useEffect.

    return <></>;
}


export default App
