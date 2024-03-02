import Service from "./Service";
import ServiceGrid from "./ServiceGrid";
import assets from "../../assets";
import boardGameImage from "../../assets/BoardGames";

const { "Board_logo.svg": Board_logo } = assets;
const {
  "Board1.jpg": BoardGameSlide1,
  "Board2.avif": BoardGameSlide2,
  "Board3.webp": BoardGameSlide3,
} = boardGameImage;

const heading1 = "Board Games";
const heading2 = "Features";
const heading3 = "Benefits";
const desc1 =
  "Immerse yourself in a world of classic and modern board games at Playzo33. Whether it's strategic showdowns or casual play, our dedicated space guarantees a fun-filled time with friends and family.";
const firstBullet1 =
  "Discover a diverse collection of classic and modern board games in a dedicated space designed for an enjoyable gaming experience. All-ages entertainment caters to players of all levels.";

const secBullet1 =
  "Forge social bonds with laughter-filled moments. Diverse game selection suits various moods, creating memorable experiences during board game sessions for lasting enjoyment.";

const buttonLabel = "Book Now";
export default function BoardGames() {
  const carouselItems = [
    <img style={{ width: "100%" }} src={BoardGameSlide1} alt={"title"} />,

    <img style={{ width: "100%" }} src={BoardGameSlide2} alt={"title"} />,

    <img style={{ width: "100%" }} src={BoardGameSlide3} alt={"title"} />,
    <img style={{ width: "100%" }} src={BoardGameSlide1} alt={"title"} />,

    <img style={{ width: "100%" }} src={BoardGameSlide3} alt={"title"} />,
  ];
  return (
    <>
      <Service />

      <ServiceGrid
        radiusTopleft={"0px"}
        radiusTopright={"20px"}
        radiusbottompleft={"0px"}
        radiusbottompright={"20px"}
        direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
        icon={Board_logo}
        carouselItems={carouselItems}
        heading1={heading1}
        desc1={desc1}
        heading2={heading2}
        firstBullet1={firstBullet1}
        heading3={heading3}
        secBullet1={secBullet1}
        buttonLabel={buttonLabel}
      />
    </>
  );
}
