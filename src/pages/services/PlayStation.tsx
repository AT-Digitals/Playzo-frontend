import Play_logo from "../../assets/Play_logo.svg";
import Service from "./Service";
import ServiceGrid from "./ServiceGrid";
import plyaStationSlide from "../../assets/plyaStationSlide.svg";

const heading1 = "Play Station";
const heading2 = "Features";
const heading3 = "Benefits";
const desc1 =
  "Immerse yourself in a gaming paradise at Playzo33's PlayStation area. With the latest consoles and a vast selection of games, it's the ultimate destination for gamers seeking excitement and entertainment.";
const firstBullet1 =
  "State-of-the-art consoles for an ultimate gaming experience.";
const secBullet1 = "Access to the latest games and consoles.";
const buttonLabel = "Book Now";
export default function PlayStation() {
  const carouselItems = [
    <img style={{ width: "100%" }} src={plyaStationSlide} alt={"title"} />,

    <img style={{ width: "100%" }} src={plyaStationSlide} alt={"title"} />,
  ];
  return (
    <>
      <Service />
      <ServiceGrid
        direction={{ xs: "column", sm: "column", md: "row-reverse" }}
        marginTop={"9rem"}
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
