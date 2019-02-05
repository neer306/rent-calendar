import React, { Component } from 'react';
import { connect } from "react-redux";

import Modal from '../../lib/Modal/Modal';
import './calendar-container.scss';
import BookingModal from "../BookingModal/BookingModal";
import { selectDays, clearSelectedDays } from "../../actions";


class CalendarContainer extends Component {

    state = {
        modalOpen: false,
        clickCount: 0,
        selectedDayIndexFrom: null,
        selectedDayIndexTo: null
    };

    render() {
        const { daysArray } = this.props;

        const calendarDayClass = (item) => {
            return [
                'calendar__day',
                item.selected ? 'calendar__day_selected' : null,
                !item.currentMonth ? 'calendar__day_not-current' : null,
            ]
                .filter(item => !!item)
                .join(' ');
        };
        const daysArrayView = daysArray.map((item, index) =>
            <div key={index}
                 className={calendarDayClass(item)}
                 onClick={this.onDayClick.bind(this, index)}>
                {item.number}
            </div>
        );

        const getSelectedDateFrom = () => {
            return this.state.selectedDayIndexFrom
                ? daysArray[this.state.selectedDayIndexFrom].dateObject.toLocaleDateString()
                : null;
        };
        const getSelectedDateTo = () => {
            return this.state.selectedDayIndexTo
                ? daysArray[this.state.selectedDayIndexTo].dateObject.toLocaleDateString()
                : null;
        };

        return (
            <div>
                <div className='calendar'>
                    {daysArrayView}
                </div>
                <Modal show={this.state.modalOpen} handleClose={this.hideModal}>
                    <BookingModal from={getSelectedDateFrom()} to={getSelectedDateTo()} hideHandler={this.hideModal}/>
                </Modal>
            </div>
        );
    }

    showModal() {
        this.setState({ modalOpen: true });
    };

    hideModal = () => {
        this.setState({ modalOpen: false });
    };

    onDayClick  = (index) => {
        this.regDaySelection(index)
    };

    regDaySelection(index) {
        if (this.props.selectedDays.count) {
            this.props.selectDays(this.range(this.props.selectedDays.indexFrom, index));
            this.showModal();
        } else {
            this.props.selectDays([index]);
        }

        // if (this.state.clickCount === 0) {
        //     this.props.clearSelectedDays();
        //     this.props.selectDays([index]);
        //
        //     this.setState({
        //         selectedDayIndexFrom: index,
        //         clickCount: 1
        //     });
        // } else {
        //     this.props.selectDays(this.range(this.state.selectedDayIndexFrom, index));
        //     this.setState({
        //         selectedDayIndexTo: index,
        //         clickCount: 0
        //     });
        // }
    }

    range(num1, num2) {
        const from =  num1 < num2 ? num1 : num2;
        const to = num1 < num2 ? num2 : num1;
        const array = [];

        for (let i = from; i <= to; i++) {
            array.push(i);
        }
        return array;
    }
}

export default connect(
    state => ({ currentDate: state.currentDate, daysArray: state.daysArray, selectedDays: state.selectedDays }),
    { selectDays, clearSelectedDays }
)(CalendarContainer);