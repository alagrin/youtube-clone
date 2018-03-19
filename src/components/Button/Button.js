import React from 'react';

const Button = (props) => {
    return <button style={buttonStyle}>{props.children}</button>
}

const buttonStyle = {
    borderRadius: '10px',
    color: '#F00',
    marginLeft: '20px'
}

export default Button;