import React from 'react';

export const Partner = (props) => {
    console.log(props.partner.src)
    return (
        <a href={props.partner.href} title={props.partner.title} key={props.partner.src} target='_blank'
           rel='noreferrer noopener'>
            <img className='item-image'
                 src={require(`../images/partners/${props.partner.src}`)}
                 alt={props.partner.title}
                 onMouseOver={event =>
                     (event.currentTarget.src = require(`../images/partners/${props.partner.srcOver}`))}
                 onMouseOut={event =>
                     (event.currentTarget.src = require(`../images/partners/${props.partner.src}`))}
            />
        </a>
    )
}

Partner.defaultProps = {
    href: '#link',
    title: 'A partner title',
    src: 'maxim.png',
    srcOver: 'hover/maxim.png'
}