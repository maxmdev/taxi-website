export const SectionHeader = (props) => {
    return (
        <section className={props.className}>
            <h2>{props.heading}</h2>
            <p>{props.description}</p>
        </section>
    )
}