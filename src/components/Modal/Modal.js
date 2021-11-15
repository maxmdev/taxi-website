import React from 'react';

import '../../Modal.css';

export const Modal = (props) => {
    if (!props.show) {
        return null
    }

    return (
        <div className={'modal'}>
            <div className='modal-content'>
                <div className='modal-content__header'>
                    <h2 className='modal-header_title'>{props.header}</h2>
                    <div className='modal-header__close'>
                        <button onClick={props.onClose}>&times;</button>
                    </div>
                </div>

                <div className='modal-content__body'>
                    {props.content}
                </div>
            </div>
        </div>
    )
}