import React, { Component } from 'react';
import MonthSelect from "./MonthSelector/MonthSelect";
import CalendarContainer from "./CalendarContainer/CalendarContainer";


class App extends Component {

    state = {
        date: new Date()
    };

    nextMonth = () => {
        this.setState({
            date: new Date(this.state.date.getFullYear(), this.state.date.getMonth() + 1, 1),
        })
    };

    prevMonth = () => {
        this.setState({
            date: new Date(this.state.date.getFullYear(), this.state.date.getMonth() - 1, 1),
        })
    };

    render() {
        return (
            <div>
                <MonthSelect date={this.state.date} onNextMonth={this.nextMonth} onPrevMonth={this.prevMonth}/>
                <CalendarContainer date={this.state.date}/>
            </div>
        );
    }
}

export default App;