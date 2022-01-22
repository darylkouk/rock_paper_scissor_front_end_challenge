import React from 'react';
import { useEffect, useState } from 'react';
import Icon from './Icon';
import './Assets/Outcome.css';
import Button from './Button';

function Outcome() {

    const selectionArray = [
        'scissor',
        'rock',
        'spock',
        'lizard',
        'paper'
    ];

    const [IsHidden, setIsHidden] = useState(true);

    const match = () => {
        if(!window.matchMedia)
        {
            return false;
        }

        return window.matchMedia('(min-width:600px)').matches;
        
    }

    const [IsNotMobile, setIsNotMobile] = useState(match);

    useEffect(() => {
        const handler = () => {
            setIsNotMobile(match);
        }
        window.addEventListener('resize', handler);
    
        return () => {
            window.removeEventListener('resize', handler);
        };
    });

    const renderResult = (flag) => {
        return flag? 
            <div className='outcome-result' style={IsHidden? {display:'none'}:{}}>
                <div className='outcome-title'>
                    you losed
                </div>
                <Button title='play again' isVariant={true} />
            </div>
            :
            <div></div>
    }

    useEffect(() => {
        setTimeout(() => {
            setIsHidden(false);
        }, 2000);
    })

    return (
        <div className='outcome-container'>
            <div className='outcome-item'>
                <div className='outcome-title'>
                    you picked
                </div>
                <div className='outcome-icon'>
                    <Icon type='paper' />
                </div>
            </div>
            {renderResult(IsNotMobile)}
            <div className='outcome-item'>
                <div className='outcome-title'>
                    the house picked
                </div>
                <div className='outcome-icon'>
                    <Icon type={selectionArray[Math.floor(Math.random()*5)]} hidden={IsHidden} />
                </div>
            </div>
            {renderResult(!IsNotMobile)}
        </div>
    );
}

export default Outcome;