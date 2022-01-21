import React from 'react';
import imageRules from '../images/image-rules-bonus.svg';
import iconClose from '../images/icon-close.svg';
import './Assets/Modal.css';
import { connect } from 'react-redux';
import * as actions from '../Actions';

function Modal(props) {

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
                    <div className='modal-close' onClick={handleClose}>
                        <img src={iconClose}></img>
                    </div>
                </div>
                <div className='modal-body'>
                    <img src={imageRules}></img>
                </div>
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