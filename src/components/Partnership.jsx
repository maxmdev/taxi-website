import {SectionHeader} from "./SeactionHeader";

const defaultProps = {
    classname: 'partnership',
    heading: 'Profitable Cooperation',
    description: 'Why drivers choose us',
    blocks: [
        {
            key: "start",
            title: "Fast Start",
            description: "Leave a request right now and start work in a few hours"
        },
        {
            key: "payments",
            title: "High Revenue",
            description: "Get paid with 4% lower commission than other companies"
        }
    ]
}

export const Partnership = ({props = defaultProps}) => {
    return (
        <>
            <SectionHeader
                className={props.classname}
                heading={props.heading}
                description={props.description}
            />
            <div className="partnership-content container">
                {
                    props.blocks.map(block => {
                        return (
                            <div key={block.key} className="partnership-content__info">
                                <div className={'info-image__' + block.key}/>
                                <h4>{block.title}</h4>
                                <p>{block.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}