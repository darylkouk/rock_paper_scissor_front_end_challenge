import React from 'react';
import './Assets/Button.css';


function Button(props) {

    const handleButton = props.onClick;
    
    return ( 
        <button className={props.isVariant? 'button-container white-variant':'button-container'} onClick={handleButton}>
            <span className='button-title'>{props.title}</span>
        </button>
    );
}

export default React.memo(Button);