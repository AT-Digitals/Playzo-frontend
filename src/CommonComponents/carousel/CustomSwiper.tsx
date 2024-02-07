import {
  A11y,
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  Zoom,
} from "swiper/modules";
import { Box, styled } from "@mui/material";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
} from "react";

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
  Zoom,
];

const DefaultSlidesPerViewOption: SwiperOptions["slidesPerView"] = 1;
const DefaultLoopOption: SwiperOptions["loop"] = true;
const DefaultPaginationOption: SwiperOptions["pagination"] = {
  clickable: true,
};
const DefaultSpeedOption: SwiperOptions["speed"] = 1500;
const DefaultEffectOption: SwiperOptions["effect"] = "slide";
const DefaultZoomOption: SwiperOptions["zoom"] = {
  maxRatio: 3, // Adjust the max zoom level as needed
};

interface CustomSwiperProps {
  slides: ReactNode[];
}

const StyledZoomContainer = styled(Box)({
  overflow: "hidden",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
  maxHeight: 600,
  height: "100%",
});

const StyledSlider = styled("div")({
  ".swiper-button-prev, .swiper-button-next": {
    background: "white", // Set the background color for the slider arrows
    color: "red", // Set the arrow color as needed
  },
});

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
      zoom: DefaultZoomOption,
    };
    Object.assign(swiperElRef.current, params);
    (swiperElRef.current as any).initialize();
  }, []);

  return (
    <StyledSlider>
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
          zoom={DefaultZoomOption}
          autoplay-delay={10000}
          autoplay-disable-on-interaction={false}
          autoplay-pause-on-mouse-enter={true}
          {...props}
          className="mySwiper"
          style={{
            height: "100%",
            // maxHeight: 600,
          }}
        >
          {slides.map((slide: any, index: any) => (
            <swiper-slide
              style={{
                height: "100%",
                maxHeight: 600,
              }}
              key={index}
            >
              <StyledZoomContainer>{slide}</StyledZoomContainer>
            </swiper-slide>
          ))}
        </swiper-container>
      </Box>
    </StyledSlider>
  );
}
