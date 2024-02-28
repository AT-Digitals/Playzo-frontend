import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';




// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function PopupCarousel() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

    return (
        <>
            <Swiper
                // style={{
                //   '--swiper-navigation-color': '#fff',
                //   '--swiper-pagination-color': '#fff',
                // }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
                style={{ width: "100%", maxWidth: "1200", height: "554px" }}
            >
                <SwiperSlide >
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide>
            </Swiper>
            <Swiper
                // onSwiper={(swiper: any) => setThumbsSwiper(swiper as SwiperClass)}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
                style={{ marginTop: "20px" }}
            >
                <SwiperSlide style={{ width: "100%", maxWidth: '166px', height: '166px' }}>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" width={166} height={166} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "100%", maxWidth: '166px', height: '166px' }}>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" width={166} height={166} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "100%", maxWidth: '166px', height: '166px' }}>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" width={166} height={166} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "100%", maxWidth: '166px', height: '166px' }}>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" width={166} height={166} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "100%", maxWidth: '166px', height: '166px' }}>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" width={166} height={166} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "100%", maxWidth: '166px', height: '166px' }}>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" width={166} height={166} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "100%", maxWidth: '166px', height: '166px' }} >
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" width={166} height={166} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "100%", maxWidth: '166px', height: '166px' }}>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" width={166} height={166} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "100%", maxWidth: '166px', height: '166px' }}>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" width={166} height={166} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "100%", maxWidth: '166px', height: '166px' }}>
                    <img src="https://swiperjs.com/demos/images/nature-10.jpg" width={166} height={166} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
