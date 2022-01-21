import React from 'react';
import pentagonImage from '../images/bg-pentagon.svg';
import './Assets/Pentagon.css';
import Icon from './Icon';

function Pentagon() {

    return ( 
        <div>
            <div className='pentagon-container'>
                <img className='pentagon-image' src={pentagonImage}></img>
                <div className='icons-container'>
                    <div className='icon-image-one'>
                        <Icon type='scissor' />
                    </div>
                    <div className='icon-image-two'>
                        <Icon type='spock' />
                    </div>
                    <div className='icon-image-three'>
                        <Icon type='paper' />
                    </div>
                    <div className='icon-image-four'>
                        <Icon type='lizard' />
                    </div>
                    <div className='icon-image-five'>
                        <Icon type='rock' />
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Pentagon;