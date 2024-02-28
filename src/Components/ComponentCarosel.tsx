// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Box } from "@mui/material";
import assets from '../assets';


// import required modules
import { Pagination } from 'swiper/modules';
import CardComponent from './CardComponent';

const {"Image (3).png": Image3, "Image (4).png": Image4, "Image (5).png": Image5} = assets

const items = [
    {
        title: "Special Weekday Rates",
        label: "Avail Now!",
        description:
            "Enjoy our exclusive weekday rates and make the most of your afternoons with friends. Book now and save!",
        image: Image3,
    },
    {
        title: "Playzo Membership",
        label: "Explore Now!",
        description:
            "Unlock a world of benefits with Playzo Membership. Enjoy discounts priority access, and member-only events!",
        image: Image4,
    },
    {
        title: "Celebration Package",
        label: "Book Now!",
        description:
            "Host your next celebration at Playzo! Our Celebration Package includes turf time, activities, and a dedicated party area.",
        image: Image5,
    },
    {
        title: "Special Weekday Rates",
        label: 'Avail Now!',
        description: 'Enjoy our exclusive weekday rates and make the most of your afternoons with friends. Book now and save!',
        image: Image3,
    },
    {
        title: "Playzo Membership",
        label: 'Explore Now!',
        description: 'Unlock a world of benefits with Playzo Membership. Enjoy discounts priority access, and member-only events!',
        image: Image4,
    },
    {
        title: "Celebration Package",
        label: 'Book Now!',
        description: 'Host your next celebration at Playzo! Our Celebration Package includes turf time, activities, and a dedicated party area.',
        image: Image5,
    },
];

export default function App() {
    return (
        <Box width="100%" maxWidth={1200} paddingY={5} margin="0 auto">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                style={{ height: 660 }}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CardComponent
                            key={index}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            buttonLabel={item.label}
                        /></SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}
