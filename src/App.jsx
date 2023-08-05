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
                <Routes>
                    <Route path={"/"} element={<LoginPage />}/>
                    <Route path={"/signup"} element={<SignUp />}/>
                    <Route path={"/chat"} element={<HomePage />}/>
                </Routes>
            </Router>
        </RecoilRoot>
    )
}
export default App
