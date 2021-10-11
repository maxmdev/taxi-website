import {SectionHeader} from "./SeactionHeader";

const defaultProps = {
    className: 'reviews',
    heading: 'Drivers about our work',
    description: 'Analyze feedback and join to us',
    id: 'reviews',
    content: {
        reviews: [
            {
                id: 1,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus erat sed mi rutrum venenatis. Donec eu dapibus libero. Ut et condimentum tellus, eget luctus lectus. Praesent suscipit nisl in dolor lacinia, at ultricies tellus blandit. Mauris convallis velit eu neque ultrices, sit amet pellentesque mi luctus.',
                author: {
                    name: 'John Doe',
                    position: 'Driver',
                    photo: 'images/drivers/1.png'
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
                        {
                            props.content.reviews.map(review => {
                                return (
                                    <div className='comments-item' key={'id' + review.id}>
                                        <div className='comments-item__rating'>
                                            <span className={'rating-star__' + review.rating}/>
                                        </div>
                                        <div className='comments-item__author'>
                                            <div className='comments-item__photo'>
                                                <img src={require(`../${review.author.photo}`).default}
                                                     className='photo-round' alt={review.author.name}/>
                                            </div>
                                            <span className='author-name'>{review.author.name}</span>
                                            <p className='author-position'>{review.author.position}</p>
                                        </div>
                                        <div className='comments-item__text'>
                                            {review.text}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
        />
    )
}