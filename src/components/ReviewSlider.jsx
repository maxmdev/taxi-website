import React, { useState } from "react";
const defaultProps = {
    content: {
        reviews: []
    }
}
export const ReviewSlider = ({props = defaultProps}) => {
    const [active, setActive] = useState(() => {
        return props.reviews[0].id;
    });

    const addActiveClass = (active, id) => {
        if (active === id) {
            return ' active';
        }

        return '';
    }

    const changeActive = (id) => {
        setActive(() => id)
    }

    return (
        <div className='comments-item' key={'id' + props.reviews[active].id}>
            <div className='comments-item__photos'>
                {
                    props.reviews.map(review => {
                        return (
                            <div className={'comments-item__photo' + addActiveClass(active, review.id)} key={ review.id }>
                                <img src={require(`../${review.author.photo}`).default}
                                     className={'photo-round' + addActiveClass(active, review.id)}
                                     onClick={ () => changeActive(review.id) }
                                     alt={ review.author.name }/>
                            </div>
                        )
                    })
                }
            </div>

            <div className='comments-item__comment'>
                <div className='comments-item__rating'>
                    <span className={'rating-star__' + props.reviews[active].rating}/>
                </div>
                <div className='comments-item__author'>

                    <span className='author-name'>{ props.reviews[active].author.name }</span>
                    <p className='author-position'>{ props.reviews[active].author.position }</p>
                </div>
                <div className='comments-item__text'>
                    <p>{ props.reviews[active].text }</p>
                </div>
            </div>
        </div>
    )
}