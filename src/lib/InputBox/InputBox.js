import React from 'react';
import './input-box.scss';

const InputBox = (props) => (
    <div className="input-box">
        <label className="input-box__label">{props.label}</label>
        <input
            className="input-box__control"
            name={props.name}
            type={props.type || 'text'}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder} />
    </div>
);


export default InputBox;