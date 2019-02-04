import React, { Component } from 'react';
import {connect} from "react-redux";

import MonthSelect from "./MonthSelector/MonthSelect";
import CalendarContainer from "./CalendarContainer/CalendarContainer";
import './main.scss';
import { initial } from "../actions";


class App extends Component {
    componentDidMount() {
        const { initial } = this.props;
        initial();
    }

    render() {
        return (
            <div>
                <MonthSelect/>
                <CalendarContainer/>
            </div>
        );
    }
}

export default connect(
    null,
    { initial },
)(App);
