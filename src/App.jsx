import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./Pages/LoginPage.jsx";
import SignUp from "./Pages/SignUp.jsx";
import HomePage from "./Pages/HomePage.jsx";
import './App.css'

function App() {
    return(
        <Router>
            <Routes>
                <Route path={"/"} element={<LoginPage />}/>
                <Route path={"/signup"} element={<SignUp />}/>
                <Route path={"/chat"} element={<HomePage />}/>
              </Routes>
        </Router>
    )
}

export default App
