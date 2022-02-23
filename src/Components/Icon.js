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
                    <div className={props.highlight? 'icon-scissor highlight': 'icon-scissor'} style={props.hidden? {visibility:'hidden'}: {}}>
                        <img src={scissorIcon}></img>
                    </div>);
            case 'rock':
                return(
                    <div className={props.highlight? 'icon-rock highlight': 'icon-rock'} style={props.hidden? {visibility:'hidden'}: {}}>
                        <img src={rockIcon}></img>
                    </div>);
            case 'paper':
                return(
                    <div className={props.highlight? 'icon-paper highlight': 'icon-paper'} style={props.hidden? {visibility:'hidden'}: {}}>
                        <img src={paperIcon}></img>
                    </div>);
            case 'lizard':
                return(
                    <div className={props.highlight? 'icon-lizard highlight': 'icon-lizard'} style={props.hidden? {visibility:'hidden'}: {}}>
                        <img src={lizardIcon}></img>
                    </div>);
            case 'spock':
                return(
                    <div className={props.highlight? 'icon-spock highlight': 'icon-spock'} style={props.hidden? {visibility:'hidden'}: {}}>
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

export default React.memo(Icon);