import React from 'react';
import { useEffect, useState } from 'react';
import Icon from './Icon';
import './Assets/Outcome.css';
import Button from './Button';
import { connect } from 'react-redux';
import * as actions from '../Actions';

function Outcome(props) {

    const selectionArray = [
        'scissor',
        'rock',
        'spock',
        'lizard',
        'paper'
    ];

    const [IsHidden, setIsHidden] = useState(true);
    const [HousePick, setHousePick] = useState(selectionArray[Math.floor(Math.random()*5)]);
    const [Result, setResult] = useState();

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

    const handlePlayAgain = () => {
        props.handlePlayerPick('');
    }

    const renderResult = (flag) => {
        return flag? 
            <div className='outcome-result' style={IsHidden? {display:'none'}:{}}>
                <div className='outcome-title'>
                    {Result}
                </div>
                <Button title='play again' isVariant={true} onClick={handlePlayAgain} />
            </div>
            :
            <div></div>
    }

    useEffect(() => {
        setTimeout(() => {
            checkWinLogic();
            if(Result == 'you win') {
                props.handleScore(1);
            }
            else if(Result == 'you lose') {
                props.handleScore(-1);
            }
            setIsHidden(false);
        }, 2000);
    }, [IsHidden]);

    const checkWinLogic = () => {
        if(props.playerPick == 'scissor') {
            if(HousePick == 'paper' || HousePick == 'lizard')
                setResult('you win');
            else if(HousePick == 'scissor')
                setResult('you draw');
            else
                setResult('you lose');
        }
        else if(props.playerPick == 'paper') {
            if(HousePick == 'spock' || HousePick == 'rock')
                setResult('you win');
            else if(HousePick == 'paper')
                setResult('you draw');
            else
                setResult('you lose');
        }
        else if(props.playerPick == 'rock') {
            if(HousePick == 'scissor' || HousePick == 'lizard')
                setResult('you win');
            else if(HousePick == 'rock')
                setResult('you draw');
            else
                setResult('you lose');
        }
        else if(props.playerPick == 'lizard') {
            if(HousePick == 'spock' || HousePick == 'paper')
                setResult('you win');
            else if(HousePick == 'lizard')
                setResult('you draw');
            else
                setResult('you lose');
        }
        else if(props.playerPick == 'spock') {
            if(HousePick == 'scissor' || HousePick == 'rock')
                setResult('you win');
            else if(HousePick == 'spock')
                setResult('you draw');
            else
                setResult('you lose');
        }
    }

    return (
        <div className='outcome-container'>
            <div className='outcome-item'>
                <div className='outcome-title'>
                    you picked
                </div>
                <div className='outcome-icon'>
                    <Icon type={props.playerPick} highlight={Result == 'you win'}/>
                </div>
            </div>
            {renderResult(IsNotMobile)}
            <div className='outcome-item'>
                <div className='outcome-title'>
                    the house picked
                </div>
                <div className='outcome-icon'>
                    <Icon type={HousePick} hidden={IsHidden} highlight={Result == 'you lose'} />
                </div>
            </div>
            {renderResult(!IsNotMobile)}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        playerPick: state.playerPick
    }
}

export default connect(mapStateToProps, actions)(Outcome);