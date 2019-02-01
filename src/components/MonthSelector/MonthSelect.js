import React, { PureComponent } from 'react';
import './month-selector.scss';
import Button from "../../lib/Button/Button";

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
                <Button type={'secondary'} clickHandler={onNextMonth}>-</Button>
                <div className={'month-selector__name'}>{this.dateRepresent(date)}</div>
                <Button type={'secondary'} clickHandler={onPrevMonth}>+</Button>
            </div>
        );
    }
}

export default MonthSelect;