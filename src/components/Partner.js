export const Partner = (props) => {
    return (
        <a href={props.partner.href} title={props.partner.title} key={props.partner.src} target='_blank' rel='noreferrer'>
            <img className='item-image'
                 src={require(`../images/partners/${props.partner.src}`).default}
                 alt={props.partner.title}
                 onMouseOver={event => (event.currentTarget.src = require(`../images/partners/${props.partner.srcOver}`).default)}
                 onMouseOut={event => (event.currentTarget.src = require(`../images/partners/${props.partner.src}`).default)}
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