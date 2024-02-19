import BoardGameSlide1 from "../../assets/BoardGameSlide1.svg";
import Board_logo from "../../assets/Board_logo.svg";
import Service from "./Service";
import ServiceGrid from "./ServiceGrid";

const heading1 = "Board Games";
const heading2 = "Features";
const heading3 = "Benefits";
const desc1 =
  "Dive into a world of classic and modern board games at Playzo33. Whether you're into strategic showdowns or casual play, our dedicated space promises a fun-filled time with friends and family.";
const firstBullet1 = "Diverse collection of classic and modern board games.";

const secBullet1 = "Social bonding through laughter-filled moments.";

const buttonLabel = "Book Now";
export default function BoardGames() {
  const carouselItems = [
    <img style={{ width: "100%" }} src={BoardGameSlide1} alt={"title"} />,

    <img style={{ width: "100%" }} src={BoardGameSlide1} alt={"title"} />,
  ];
  return (
    <>
      <Service />

      <ServiceGrid
        direction={{ xs: "column", sm: "column", md: "row" }}
        marginTop={{ xs: 0, sm: 0, md: "4rem" }}
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
