import React from 'react';
import './SmallButton.css';

const SmallButton = ({ text, onClick, type = 'button' }) => {
    return (
        <button className="small-button" type={type} onClick={onClick}>
            {text}
        </button>
    );
};

export default SmallButton;
