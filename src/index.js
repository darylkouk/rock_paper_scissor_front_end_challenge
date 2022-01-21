import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RootReducer from './RootReducer';

ReactDOM.render(
    <RootReducer>
        <App />
    </RootReducer>, 
    document.getElementById('root')
);