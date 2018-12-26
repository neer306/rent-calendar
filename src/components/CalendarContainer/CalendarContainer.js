import React, { Component } from 'react';
import Modal from '../../lib/Modal/Modal';
import './calendar-container.scss';
import BookingModal from "../BookingModal/BookingModal";

class CalendarContainer extends Component {

    state = {
        daysArray: [],
        modalOpen: false,
        clickCount: 0
    };

    componentWillMount() {
        this.setState({
            daysArray: this.getDaysArray(this.props.date),
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            daysArray: this.getDaysArray(this.props.date),
        });
    }

    render() {
        const calendarDayClass = (item) => {
            [
                'calendar__day',
                item.booked ? 'calendar__day_booked' : null,
                item.currentMonth ? 'calendar__day_not-current' : null,
            ].join(' ')
        };
        const daysArray = this.state.daysArray.map((item, index) =>
            <div key={index}
                 className={calendarDayClass(item)}
                 onClick={this.onDayClick.bind(this, index)}>
                {item.number}
            </div>
        );

        return (
            <div>
                <div className='calendar'>
                    {daysArray}
                </div>
                <Modal show={this.state.modalOpen} handleClose={this.hideModal}>
                    <BookingModal/>
                </Modal>
            </div>
        );
    }

    showModal = () => {
        this.setState({ modalOpen: true });
    };

    hideModal = () => {
        this.setState({ modalOpen: false });
    };

    onDayClick  = (index) => {
        if (this.state.daysArray[index].booked) {
            // ToDO
            return;
        }

        this.setBooked(index);
    };

    setBooked(dayIndex) {
        this.setState({
            daysArray: this.state.daysArray.map((item, index) => {
                if (index === dayIndex) {
                    item.booked = true;
                }
                return item;
            })
        });
    }

    getDaysArray(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const calendarDays = new Date(year, month + 1, 0).getDate();
        const dateArray = [];

        for (let i = 1; i <= calendarDays; i++) {
            dateArray.push({
                number: i,
                currentMonth: true,
                dateObject: new Date(year, month, i),
                booked: false,
            });
        }

        const firstDayDate = new Date(year, month, dateArray[0].number);
        let firstDay = firstDayDate.getDay();
        const lastDayDate = new Date(year, month, dateArray[dateArray.length - 1].number);
        let lastDay = lastDayDate.getDay();

        while (firstDay > 1) {
            const number = new Date(firstDayDate.setDate(firstDayDate.getDate() - 1)).getDate();
            dateArray.unshift({
                number: number,
                currentMonth: false,
                dateObject: new Date(year, month - 1, number),
                booked: false,
            });
            firstDay--;
        }

        while (lastDay > 0 && lastDay < 7) {
            const number = new Date(lastDayDate.setDate(lastDayDate.getDate() + 1)).getDate();
            dateArray.push({
                number: number,
                currentMonth: false,
                dateObject: new Date(year, month + 1, number),
                booked: false,
            });
            lastDay++;
        }

        return dateArray;
    }
}

export default CalendarContainer;