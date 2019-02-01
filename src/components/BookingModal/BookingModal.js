import React, { Component } from 'react';
import './booking-modal.scss';
import InputBox from "../../lib/InputBox/InputBox";
import Button from "../../lib/Button/Button";
import SelectBox from "../../lib/SelectBox/SelectBox";

class BookingModal extends Component {
    render() {
        return (
            <div>
                <h3>Бронирование c {this.props.from} по {this.props.to}</h3>
                <div className={'caption'}>Дополнительная информация</div>
                <form className={'booking__form'} onSubmit={this.handleFormSubmit.bind(this)}>
                    <InputBox label='Стоимость Аренды' type='number' name='price' onChange={this.handlePriceChange.bind(this)}/>
                    <SelectBox
                        label='Площадка'
                        name='source'
                        onChangeHandler={this.handlePriceChange.bind(this)}
                        options={[{name: 'cian', value: 'cian'}, {name: 'avito', value: 'avito'}]}
                    />

                    <div className={'booking__form-controls'}>
                        <Button type={'primary'}>
                            Сохранить
                        </Button>
                        <Button type={'secondary'} clickHandler={this.props.hideHandler}>
                            Отмена
                        </Button>
                    </div>
                </form>
            </div>
        );
    }

    handlePriceChange(event) {
        this.setState({ price: event.target.value });
    }

    handleFormSubmit(event) {
        event.preventDefault();
    }
}

export default BookingModal;