import React from 'react';

import './Notification.css';

export const Notification = (props) => {
    if(!props.show) {
        return null
    }

    return (
       <div className='notification' onClick={props.hide}>
           <div className='notification-content'>
               {props.message}
           </div>
       </div>
    )
}

Notification.defaultProps = {
    message: 'Successfully copied!'
}