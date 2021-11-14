export const SectionHeader = (props) => {
    return (
        <section className={props.className} id={props.id}>
            <h2>{props.heading}</h2>
            <p>{props.description}</p>
            {props.content}
        </section>
    )
}