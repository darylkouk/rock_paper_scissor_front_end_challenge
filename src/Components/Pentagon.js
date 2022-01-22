import React from 'react';
import { connect } from 'react-redux';
import pentagonImage from '../images/bg-pentagon.svg';
import './Assets/Pentagon.css';
import Icon from './Icon';
import * as actions from '../Actions';

function Pentagon(props) {

    const handlePick = (e) => {
        props.handlePlayerPick(e.currentTarget.id);
    }

    return ( 
        <div>
            <div className='pentagon-container'>
                <img className='pentagon-image' src={pentagonImage}></img>
                <div className='icons-container'>
                    <div className='icon-image-one' id='scissor' onClick={handlePick}>
                        <Icon type='scissor' />
                    </div>
                    <div className='icon-image-two' id='spock' onClick={handlePick}>
                        <Icon type='spock' />
                    </div>
                    <div className='icon-image-three' id='paper' onClick={handlePick}>
                        <Icon type='paper' />
                    </div>
                    <div className='icon-image-four' id='lizard' onClick={handlePick}>
                        <Icon type='lizard' />
                    </div>
                    <div className='icon-image-five' id='rock' onClick={handlePick}>
                        <Icon type='rock' />
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default connect(null, actions)(Pentagon);