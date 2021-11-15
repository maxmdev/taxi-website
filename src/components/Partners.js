import React from 'react';

import {SectionHeader} from "./SeactionHeader";
import {Partner} from "./Partner";
import Carousel, { CarouselItem } from "./Carousel";
import '../Partners.css';

export const Partners = (props) => {
    return (
        <SectionHeader
            className={props.className}
            heading = {props.heading}
            description = {props.description}
            id = {props.id}
            content = {
                <Carousel>
                    {
                        props.partners.map(
                            partner => <CarouselItem key={partner.src}><Partner partner={partner}/></CarouselItem>
                        )
                    }
                </Carousel>
            }
        />
    )
}

Partners.defaultProps = {
    className: 'partners',
    heading: 'Our Partners',
    description: 'Reliable taxi aggregators',
    id: 'partners',
    partners: [
        {
            href: '#faketaxi',
            title: 'Fake Taxi',
            src: 'fake-taxi.png',
            srcOver: 'hover/fake-taxi.png'
        },
        {
            href: '#yandex',
            title: 'YandexTaxi',
            src: 'yandex.png',
            srcOver: 'hover/yandex.png'
        },
        {
            href: '#mytaxi',
            title: 'My Taxi',
            src: 'mytaxi.png',
            srcOver: 'hover/mytaxi.png'
        },
        {
            href: '#uber',
            title: 'Uber',
            src: 'uber.png',
            srcOver: 'hover/uber.png'
        },
        {
            href: '#maxim',
            title: 'Maxim Taxi',
            src: 'maxim.png',
            srcOver: 'hover/maxim.png'
        }
    ]
}