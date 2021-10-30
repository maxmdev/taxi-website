export const Button = (props) => {
    return (
        <button className={'button ' + (props.classname || '')}>{props.text}</button>
    )
}