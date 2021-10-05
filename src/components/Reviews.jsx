import {SectionHeader} from "./SeactionHeader";

const defaultProps = {
    className: 'reviews',
    heading: 'Drivers about our work',
    description: 'Analyze feedback and join to us',
    id: 'reviews',
    content: 'Content'
}

export const Reviews = ({props = defaultProps}) => {
    return (
        <SectionHeader
            className={props.className}
            heading={props.heading}
            description={props.description}
            id={props.id}
            content={
                <div className='reviews-content'>
                    <div className='reviews-content__border'/>
                    <div className='reviews-content__comments'>

                    </div>
                </div>
            }
        />
    )
}