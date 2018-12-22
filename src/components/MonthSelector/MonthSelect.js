import React, { Component, PureComponent } from 'react';
import './month-selector.scss';

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

class MonthSelect extends PureComponent {
    
    dateRepresent(date) {
        return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    }    

    render() {
        console.log('render', this.props);
        const { date, onNextMonth, onPrevMonth } = this.props;
        return (
            <div className='month-selector'>
                <button onClick={onNextMonth}>+</button>
                <div>{this.dateRepresent(date)}</div>
                <button onClick={onPrevMonth}>-</button>
            </div>
        );
    }
}

export default MonthSelect;