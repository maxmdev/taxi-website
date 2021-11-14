export const Button = (props) => {
    return (
        <button className={'button ' + (props.classname || '')}
                onClick={props.onClick}>{props.text}</button>
    )
}