import React from 'react';
import HeaderBanner from './Components/HeaderBanner';
import './App.css';
import Pentagon from './Components/Pentagon';
import Button from './Components/Button';
import Modal from './Components/Modal';
import Outcome from './Components/Outcome';
import { connect } from 'react-redux';
import * as actions from './Actions';

function App(props) {

    const handlePopup = React.useCallback(() => {
        props.openModal();
    }, []);

    return ( 
    <div className='app-layout'>
        <HeaderBanner />
        {props.playerHasPicked ==''? <Pentagon /> : <Outcome />}
        <Modal />
        <div className='app-button'>
            <Button title="rules" onClick={handlePopup} />
        </div>
    </div> );
}

function mapStateToProps(state) {
    return {
        playerHasPicked: state.playerPick
    }
}

export default connect(mapStateToProps, actions)(App);