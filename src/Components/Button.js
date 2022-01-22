import React from 'react';
import './Assets/Button.css';


function Button(props) {

    const handleButton = props.onClick;

    return ( 
        <div className={props.isVariant? 'button-container white-variant':'button-container'} onClick={handleButton}>
            <div className='button-title'>{props.title}</div>
        </div>
    );
}

export default Button;