import React from 'react';
import './select-box.scss';


const SelectBox = (props) => (
    <div className="select-box">
        <label className="select-box__label">{props.label}</label>
        <select className="select-box__control" name={props.name} value={props.value} onChange={props.onChangeHandler}>
            {props.options.map(({ name, value }) =>
                <option value={value} key={value}>{name}</option>
            )}
        </select>
    </div>
);


export default SelectBox;