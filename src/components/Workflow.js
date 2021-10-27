import {SectionHeader} from "./SeactionHeader";
import useWindowSize from "./useWindowSize/useWindowSize";

import '../Workflow.css';

const defaultProps = {
    className: 'workflow',
    id: 'workflow',
    heading: 'How to Start',
    description: 'Integration process could take from 2 to 5 hours',
    content: [
        {
            image: 'agreement.svg',
            header: 'Fill request form',
            description: 'to talk with our manager about details'
        },
        {
            image: 'handshake.svg',
            header: 'Sign agreement',
            description: 'with digital signature or in person'
        },
        {
            image: 'taxi-car.svg',
            header: 'Take orders',
            description: 'at a convenient time and start to earn money'
        }
    ]
}

export const Workflow = ({props = defaultProps}) => {
    const mobileWidth = 610;

    const { width } = useWindowSize();

    return (
        <SectionHeader
            className = {props.className}
            id = {props.id}
            heading = {props.heading}
            description = {props.description}
            content = {
                <div className='workflow-content container'>
                    <div className='workflow-content__divider'/>
                    {
                        props.content.map((step, index) => {
                            return (
                                <div className='workflow-content__item' key={'item' + index}>
                                    { width > mobileWidth && (<img src={require(`../images/icons/${step.image}`).default}
                                         alt={step.header + ' image'}
                                         className='workflow-content__image'/>)
                                    }
                                    <span className='workflow-content__circle'>
                                            <span className='workflow-content__circle-inner'>
                                                <span className='workflow-content__circle-center'/>
                                            </span>
                                        </span>
                                    <div className='workflow-content__description'>
                                        <h4 className='workflow-content__description-header'>{step.header}</h4>
                                        <p className='workflow-content__description-detail'>{' ' + step.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }
        />
    )
}