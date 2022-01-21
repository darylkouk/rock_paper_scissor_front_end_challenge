import React from 'react';
import imageRules from '../images/image-rules-bonus.svg';
import iconClose from '../images/icon-close.svg';
import './Assets/Modal.css';
import { connect } from 'react-redux';
import * as actions from '../Actions';
import { useState, useEffect } from 'react';

function Modal(props) {

    const match = () => {
        if (!window.matchMedia) {
            return false;
        }
        return window.matchMedia('(min-width:400px)').matches;
    };

    const [IsNotMobile, setIsNotMobile] = useState(match);
    
    useEffect(() => {
        // Update state on window `resize` event.
        // Usage of `match` function defined outside of `useEffect`
        // ensures that it has current values of arguments.
        const handler = () => setIsNotMobile(match);
        window.addEventListener('resize', handler);
        // Remove event listener on cleanup.
        return () => window.removeEventListener('resize', handler);
    });

    const handleClose = () => {
        props.closeModal();
    }

    return ( 
        props.isOpen? 
        <div className='modal'>
            <div className='modal-container'>
                <div className='modal-header'>
                    <div className='modal-title'>
                        rules
                    </div>
                    {IsNotMobile?
                        <div className='modal-close' onClick={handleClose}>
                            <img src={iconClose}></img>
                        </div>
                        :
                        <div></div>}
                </div>
                <div className='modal-body'>
                    <img src={imageRules}></img>
                </div>
                {IsNotMobile?
                    <div></div>
                    :
                    <div className='modal-close' onClick={handleClose}>
                        <img src={iconClose}></img>
                    </div>}
            </div>
        </div>
        :
        <div></div>
    );
}

function mapStateToProps(state) {
    return {
        isOpen: state.modal
    };
}

export default connect(mapStateToProps, actions)(Modal);