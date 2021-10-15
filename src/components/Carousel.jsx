import React, { useState } from 'react';
import '../carousel.css';

export const CarouselItem = ({children, width}) => {
    return (
        <div className='carousel-item' style={{width: width}}>
            {children}
        </div>
    )
}

const Carousel = ({children}) => {
    const [activeIndex, setActiveIndex] = useState(() => {
        return 0
    });

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 4;
        } else if (newIndex >= React.Children.count(children) - 3) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    }

    return (
        <div className='carousel'>
            <div className='carousel-wrapper'>
                <div className='carousel-wrapper__inner' style={{transform: `translateX(-${activeIndex * 25}%)`}}>
                    {React.Children.map(children, (child, index) => {
                        return React.cloneElement(child, {width: '25%'});
                    })}
                </div>
                <div className='carousel-wrapper__carousel-indicators'>
                    <button className='carousel-indicators__prev' onClick={() => {
                        updateIndex(activeIndex - 1)
                    }}/>

                    <button className='carousel-indicators__next' onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default Carousel;