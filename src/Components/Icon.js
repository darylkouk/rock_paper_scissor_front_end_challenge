import React from 'react';
import rockIcon from '../images/icon-rock.svg';
import paperIcon from '../images/icon-paper.svg';
import lizardIcon from '../images/icon-lizard.svg';
import scissorIcon from '../images/icon-scissors.svg';
import spockIcon from '../images/icon-spock.svg';
import './Assets/Icon.css';

function Icon(props) {

    const renderSwitch = (type) => {
        switch(type) {
            case 'scissor':
                return(
                    <div className='icon-scissor'>
                        <img src={scissorIcon}></img>
                    </div>);
            case 'rock':
                return(
                    <div className='icon-rock'>
                        <img src={rockIcon}></img>
                    </div>);
            case 'paper':
                return(
                    <div className='icon-paper'>
                        <img src={paperIcon}></img>
                    </div>);
            case 'lizard':
                return(
                    <div className='icon-lizard'>
                        <img src={lizardIcon}></img>
                    </div>);
            case 'spock':
                return(
                    <div className='icon-spock'>
                        <img src={spockIcon}></img>
                    </div>);
            default:
                return <div></div>;
        }
    }

    return (
        renderSwitch(props.type)
    );
}

export default Icon;