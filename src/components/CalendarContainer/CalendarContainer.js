import React, { Component } from 'react';
import Modal from '../../lib/Modal/Modal';
import './calendar-container.scss';
import BookingModal from "../BookingModal/BookingModal";

class CalendarContainer extends Component {

    state = {
        daysArray: [],
        modalOpen: false,
        clickCount: 0,
        selectedDayIndexFrom: null,
        selectedDayIndexTo: null
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
            return [
                'calendar__day',
                item.selected ? 'calendar__day_selected' : null,
                !item.currentMonth ? 'calendar__day_not-current' : null,
            ]
                .filter(item => !!item)
                .join(' ');
        };
        const daysArray = this.state.daysArray.map((item, index) =>
            <div key={index}
                 className={calendarDayClass(item)}
                 onClick={this.onDayClick.bind(this, index)}>
                {item.number}
            </div>
        );

        const getSelectedDateFrom = () => {
            return this.state.selectedDayIndexFrom
                ? this.state.daysArray[this.state.selectedDayIndexFrom].dateObject.toLocaleDateString()
                : null;
        };
        const getSelectedDateTo = () => {
            return this.state.selectedDayIndexTo
                ? this.state.daysArray[this.state.selectedDayIndexTo].dateObject.toLocaleDateString()
                : null;
        };

        return (
            <div>
                <div className='calendar'>
                    {daysArray}
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

    setSelected(dayIndexArray) {
        this.setState({
            daysArray: this.state.daysArray.map((item, index) => {
                if (dayIndexArray.includes(index)) {
                    item.selected = true;
                }
                return item;
            })
        });
    }

    regDaySelection(index) {
        if (this.state.clickCount === 0) {
            this.setState(state => ({
                daysArray: state.daysArray.map(item => {
                    item.selected = false;
                    return item;
                }),
                selectedDayIndexFrom: index,
                clickCount: 1
            }), () => this.setSelected([index]));
        } else {
            this.setSelected(this.range(this.state.selectedDayIndexFrom, index));
            this.setState({
                selectedDayIndexTo: index,
                clickCount: 0
            });
            this.showModal();
        }
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
                selected: false,
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
                selected: false,
            });
            firstDay--;
        }

        while (lastDay > 0 && lastDay < 7) {
            const number = new Date(lastDayDate.setDate(lastDayDate.getDate() + 1)).getDate();
            dateArray.push({
                number: number,
                currentMonth: false,
                dateObject: new Date(year, month + 1, number),
                selected: false,
            });
            lastDay++;
        }

        return dateArray;
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

export default CalendarContainer;