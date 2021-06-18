import React from 'react';
import './Modal.scss';

const Modal = (props) => {

    return (
        <div className="modal">
            <div className="bg" onClick={() => {
                props.setModal(false)
            }}>

                <div className="content">
                    <button className="close" onClick={() => {
                        props.setModal(false)
                    }}>
                        <i class="fas fa-window-close"></i>
                    </button>
                    <p>방 등록 성공!</p>
                </div>             
            </div>
        </div>
    );
};

export default Modal;