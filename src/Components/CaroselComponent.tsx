import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Card, CardContent, Typography } from '@mui/material'
import { FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa'
import { useState } from 'react';
import Image1 from '../assets/Rectangle 678.png';
import Image2 from "../assets/Rectangle 677.png";
import Image3 from "../assets/Rectangle 673.png";

export default function Carousel() {

    const [sliderRef, setSliderRef] = useState(null);


    const sliderSettings = {
        // removes default buttons
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
    }

    const hotelCards = [
        {
            imageSrc: Image1,
            name: 'Prakash',
            type: 'Badminton',
            member: 'Member since 2022',
        },
        {
            imageSrc: Image2,
            name: 'Shwetha',
            type: 'Badminton',
            member: 'Member since 2022',
        },
        {
            imageSrc: Image3,
            name: 'Anand',
            type: 'Badminton',
            member: 'Member since 2022',
        },
        {
            imageSrc: Image2,
            name: 'Benny',
            type: 'Badminton',
            member: 'Member since 2022',
        },
    ]

    return (
        <div className='content'  >
            <Slider {...sliderSettings}>
                {hotelCards.map((card, index) => (
                    <Card>
                        <img src={card.imageSrc} width={300} height={400} alt="member1" />
                        <CardContent>
                            <Typography>
                                {card.name}
                            </Typography>
                            <Typography>
                                {card.type}
                            </Typography>
                            <Typography>
                                {card.member}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Slider>
            <div className='controls'>
                <button>
                    <FaChevronLeft />
                </button>
                <button>
                    <FaChevronRight />
                </button>
            </div>
        </div>
    )
}