import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import LoginPage from "./Pages/LoginPage.jsx";
import SignUp from "./Pages/SignUp.jsx";
import HomePage from "./Pages/HomePage.jsx";
import './App.css'
import {RecoilRoot, useRecoilValue, useSetRecoilState} from "recoil";
import {userDataSelector, userState} from "./Store/userAtom.js";
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
    const user = useRecoilValue(userDataSelector);

    useEffect(() => {
        // Update the 'userState' atom with the data from the selector
        setUser({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
        });
    }, [user, setUser]);
    return <></>;
}



export default App
