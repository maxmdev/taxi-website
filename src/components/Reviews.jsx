import {SectionHeader} from "./SeactionHeader";
import {ReviewSlider} from "./ReviewSlider";
import {RequestForm} from "./RequestForm";

const defaultProps = {
    className: 'reviews',
    heading: 'Drivers about our work',
    description: 'Analyze feedback and join to us',
    id: 'reviews',
    content: {
        reviews: [
            {
                id: 0,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus erat sed mi rutrum venenatis. Donec eu dapibus libero. Ut et condimentum tellus, eget luctus lectus. Praesent suscipit nisl in dolor lacinia, at ultricies tellus blandit. Mauris convallis velit eu neque ultrices, sit amet pellentesque mi luctus.',
                author: {
                    name: 'John Doe',
                    position: 'Driver',
                    photo: 'images/drivers/1.png'
                },
                rating: 5
            },
            {
                id: 1,
                text: 'Phasellus facilisis, nulla nec molestie hendrerit, tortor neque venenatis dolor, et aliquet lorem mauris at nulla. Donec quis iaculis risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut gravida lacus ut ultrices vehicula. Pellentesque orci ligula, euismod ac tristique non, bibendum eget ex.',
                author: {
                    name: 'Lord Keks',
                    position: 'Car Owner',
                    photo: 'images/drivers/2.png'
                },
                rating: 5
            },
            {
                id: 2,
                text: 'Nunc diam elit, malesuada eleifend nulla non, pellentesque feugiat nunc. Mauris elementum, nunc in dignissim mollis, neque est molestie quam, id pretium dolor mi at turpis. Curabitur vitae convallis elit, quis vehicula augue. Nullam vehicula turpis a auctor facilisis. Praesent rhoncus ac massa eu rutrum.',
                author: {
                    name: 'Kim Wu Son',
                    position: 'Driver',
                    photo: 'images/drivers/3.png'
                },
                rating: 5
            }
        ]
    }
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
                        <ReviewSlider props={props.content}/>
                        <div className='comments-taxi'/>
                    </div>
                    <div className='reviews-content__request container'>
                        <h2>Become a Driver</h2>
                        <p>Leave your request and become a part of our team</p>
                        <RequestForm/>
                    </div>
                </div>
            }
        />
    )
}