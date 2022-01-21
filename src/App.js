import React from 'react';
import HeaderBanner from './Components/HeaderBanner';
import './App.css';
import Pentagon from './Components/Pentagon';
import Button from './Components/Button';
import Modal from './Components/Modal';


function App() {



    return ( 
    <div className='app-layout'>
        <HeaderBanner />
        <Pentagon />
        <Button title="rules" />
        <Modal />
    </div> );
}

export default App;