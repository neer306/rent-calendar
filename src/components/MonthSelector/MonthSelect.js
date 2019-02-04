import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { nextMonth, prevMonth } from '../../actions';

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
        const { nextMonth, prevMonth, currentDate } = this.props;

        return (
            <div className='month-selector'>
                <Button type={'secondary'} clickHandler={prevMonth.bind(this, currentDate)}>-</Button>
                <div className={'month-selector__name'}>{this.dateRepresent(currentDate)}</div>
                <Button type={'secondary'} clickHandler={nextMonth.bind(this, currentDate)}>+</Button>
            </div>
        );
    }
}

export default connect(state => ({
        currentDate: state.currentDate
    }), {
    nextMonth,
    prevMonth
})(MonthSelect);
