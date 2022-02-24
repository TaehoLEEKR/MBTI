import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Link } from 'react-router-dom';
import Result from "./component/Result";
import Question from "./component/question";
import Main from "./component/main"


const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Main/>} />
            <Route path="/question" element={<Question/>} />
            <Route exact path="/result" element={<Result/>} />
        </Routes>
    ) 
}

export default App

 