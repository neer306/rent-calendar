import React from 'react';
import './modal.scss';


const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal modal_open" : "modal";

    return (
        <div className={showHideClassName}>
            <div className='modal__overlay' onClick={handleClose}>
            </div>
            <div className='modal__content'>
                {children}
            </div>
        </div>
    );
};

export default Modal;