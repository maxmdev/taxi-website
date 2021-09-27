import {SectionHeader} from "./SeactionHeader";

const defaultProps = {
    className: 'partners',
    heading: 'Our Partners',
    description: 'Reliable taxi aggregators'
}

export const Partners = ({props = defaultProps}) => {
    return (
        <>
            <SectionHeader
                className={props.className}
                heading = {props.heading}
                description = {props.description}
            />
        </>
    )
}