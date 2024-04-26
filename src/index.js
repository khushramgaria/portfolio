import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router} from 'react-router-dom';
import RoutePages from './RoutePages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <RoutePages/>
        </Router>
    </React.StrictMode>
);
