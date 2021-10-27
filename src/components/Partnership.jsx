import {SectionHeader} from "./SeactionHeader";
import '../Partnership.css';

const defaultProps = {
    classname: 'partnership',
    heading: 'Profitable Cooperation',
    description: 'Why drivers choose us',
    id: 'partnership',
    blocks: [
        {
            key: 'start',
            title: 'Fast Start',
            description: 'Leave a request right now and start work in a few hours'
        },
        {
            key: 'payments',
            title: 'High Revenue',
            description: 'Get paid with 4% lower commission than other companies'
        },
        {
            key: 'schedule',
            title: 'Convenient Schedule',
            description: 'Take orders at a convenient time: work from 2 hours a day or on a full basis'
        },
        {
            key: 'support',
            title: '24 / 7 Support',
            description: 'Ask questions in online chat or get phone support'
        }
    ]
}

export const Partnership = ({props = defaultProps}) => {
    return (
        <SectionHeader
            className={props.classname}
            heading={props.heading}
            description={props.description}
            id={props.id}
            content = {
                <div className="partnership-content">
                    {
                        props.blocks.map(block => {
                            return (
                                <div key={block.key} className="partnership-content__info">
                                    <div className={'info-image info-image__' + block.key}/>
                                    <h4>{block.title}</h4>
                                    <div className='info-border'/>
                                    <p>{block.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            }
        />
    )
}