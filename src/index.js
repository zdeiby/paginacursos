import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Index/App';
import { Login } from './Login/index';
import { Register } from './Register/index';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
    <Router>
        <Routes>
            <Route path='/' element={<App/>} ></Route>
            <Route path='/login' element={ <Login/>} ></Route>
            <Route path='/register' element={ <Register/>} ></Route>
        </Routes>
        </Router>
    </React.Fragment>
);

