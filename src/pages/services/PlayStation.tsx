import Service from "./Service";
import ServiceGrid from "./ServiceGrid";
import assets from "../../assets";
import playstationImage from "../../assets/Playstation";

const {"Play_logo.svg": Play_logo} = assets
const {"play1.webp": plyaStationSlide2, "play2.jpg": plyaStationSlide3, "play3.avif": plyaStationSlide4} = playstationImage

const heading1 = "Play Station";
const heading2 = "Features";
const heading3 = "Benefits";
const desc1 =
  "Dive into a gaming paradise at Playzo33's PlayStation area. Equipped with the latest consoles and a vast game selection, it's the ultimate destination for gamers seeking excitement and entertainment. Immerse yourself in unparalleled gaming experiences.";
const firstBullet1 =
  "Embark on the ultimate gaming adventure with top-notch consoles, a diverse range of game genres, and a comfortable setup. Immerse yourself for an enjoyable and immersive gaming experience like never before.";
const secBullet1 =
  "Access the latest games and consoles, ideal for solo or group play, catering to diverse gaming preferences. Engage with a vibrant gaming community in an energetic atmosphere.";
const buttonLabel = "Book Now";
export default function PlayStation() {
  const carouselItems = [
    <img style={{ width: "100%" }} src={plyaStationSlide4} alt={"title"} />,

    <img style={{ width: "100%" }} src={plyaStationSlide2} alt={"title"} />,
    <img style={{ width: "100%" }} src={plyaStationSlide3} alt={"title"} />,

    <img style={{ width: "100%" }} src={plyaStationSlide4} alt={"title"} />,
    <img style={{ width: "100%" }} src={plyaStationSlide2} alt={"title"} />,
  ];
  return (
    <>
      <Service />
      <ServiceGrid
        radiusTopleft={"20px"}
        radiusTopright={"0px"}
        radiusbottompleft={"20px"}
        radiusbottompright={"0px"}
        position={"end"}
        direction={{ xs: "column", sm: "column", md: "row-reverse" }}
        icon={Play_logo}
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
