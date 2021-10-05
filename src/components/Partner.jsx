const defaultProps = {
    href: '#link',
    title: 'A partner title',
    src: 'maxim.png',
    srcOver: 'hover/maxim.png'
}

export const Partner = ({props = defaultProps}) => {
    return (
        <a href={props.href} title={props.title} key={props.src} target='_blank' rel='noreferrer'>
            <img className='item-image'
                 src={require(`../images/partners/${props.src}`).default}
                 alt={props.title}
                 onMouseOver={event => (event.currentTarget.src = require(`../images/partners/${props.srcOver}`).default)}
                 onMouseOut={event => (event.currentTarget.src = require(`../images/partners/${props.src}`).default)}
            />
        </a>
    )
}