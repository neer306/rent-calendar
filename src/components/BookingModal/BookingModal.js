import React, { Component } from 'react';
import './booking-modal.scss';

class BookingModal extends Component {
    render() {
        return (
            <div>
                <h3>Бронирование {this.props.from} по ${this.props.to}</h3>
                <div>Дополнительная информация</div>
            </div>
        );
    }
}

export default BookingModal;