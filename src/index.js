import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import './Resources/css/app.css';
import {BrowserRouter} from 'react-router-dom';
import './firebase'

const  App=()=>{
    return(
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

