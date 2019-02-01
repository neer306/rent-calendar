import React from 'react';
import './button.scss';

const getClassByType = (type) => {
        return `button button_${type}`
};

const Button = (props) => (
        <button type={'button'} className={getClassByType(props.type)} onClick={props.clickHandler}>
                {props.children}
        </button>
);


export default Button;