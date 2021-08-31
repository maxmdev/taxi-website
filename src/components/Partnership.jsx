import {SectionHeader} from "./SeactionHeader";

const defaultProps = {
    classname: 'partnership',
    heading: 'Выгодное сотрудничество',
    description: 'Почему водители выбирают именно нас'
}

export const Partnership = (props) => {
    return (
        <SectionHeader
            className={props.classname || defaultProps.classname}
            heading={props.heading || defaultProps.heading}
            description={props.description || defaultProps.description}
        />
    )
}