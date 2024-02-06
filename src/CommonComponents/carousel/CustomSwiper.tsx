import {
  A11y,
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
} from "swiper/modules";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
} from "react";

import { Box } from "@mui/material";
import { SwiperOptions } from "swiper/types/swiper-options";
import { SwiperProps } from "swiper/react";
import { register } from "swiper/element/bundle";

register();

const DefaultModules: SwiperOptions["modules"] = [
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Thumbs,
  FreeMode,
];

const DefaultSlidesPerViewOption: SwiperOptions["slidesPerView"] = 1;
const DefaultLoopOption: SwiperOptions["loop"] = true;
const DefaultPaginationOption: SwiperOptions["pagination"] = {
  clickable: true,
};
const DefaultSpeedOption: SwiperOptions["speed"] = 1500;
const DefaultEffectOption: SwiperOptions["effect"] = "slide";

interface CustomSwiperProps {
  slides: ReactNode[];
}

export default function CustomSwiper({
  slides,
  ...props
}: CustomSwiperProps &
  DetailedHTMLProps<HTMLAttributes<HTMLElement> & SwiperProps, HTMLElement>) {
  const swiperElRef = useRef(null);

  useEffect(() => {
    if (!swiperElRef.current) {
      return;
    }
    const params = {
      modules: DefaultModules,
      pagination: DefaultPaginationOption,
    };
    Object.assign(swiperElRef.current, params);
    (swiperElRef.current as any).initialize();
  }, []);

  return (
    <Box
      sx={{
        ".swiper-button-prev": {
          color: "red",
        },
      }}
    >
      <swiper-container
        ref={swiperElRef}
        slides-per-view={DefaultSlidesPerViewOption}
        loop={DefaultLoopOption}
        speed={DefaultSpeedOption}
        effect={DefaultEffectOption}
        autoplay-delay={10000}
        autoplay-disable-on-interaction={false}
        autoplay-pause-on-mouse-enter={true}
        {...props}
        className="mySwiper"
        style={{
          height: "100%",
          maxHeight: 600,
        }}
      >
        {slides.map((slide: any, index: any) => (
          <swiper-slide key={index}>{slide}</swiper-slide>
        ))}
      </swiper-container>
    </Box>
  );
}
