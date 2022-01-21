import React from 'react';
import pentagonImage from '../images/bg-pentagon.svg';
import rockIcon from '../images/icon-rock.svg';
import './Assets/Pentagon.css';

function Pentagon() {

    return ( 
        <div>
            <div className='pentagon-container'>
                <img className='pentagon-image' src={pentagonImage}></img>
                <div className='icons-container'>
                    <div className='icon-image-one'>
                        <img src={rockIcon}></img>
                    </div>
                    <div className='icon-image-two'>
                        <img src={rockIcon}></img>
                    </div>
                    <div className='icon-image-three'>
                        <img src={rockIcon}></img>
                    </div>
                    <div className='icon-image-four'>
                        <img src={rockIcon}></img>
                    </div>
                    <div className='icon-image-five'>
                        <img src={rockIcon}></img>
                </div></
                div>
            </div>
            
        </div>
    );
}

export default Pentagon;