import React from 'react';
import { connect } from 'react-redux';
import './Assets/Button.css';
import * as actions from '../Actions';


function Button(props) {

    const handleButton = () => {
        props.openModal();
    }

    return ( 
        <div className='button-container' onClick={handleButton}>
            <div className='button-title'>{props.title}</div>
        </div>
    );
}

export default connect(null, actions)(Button);