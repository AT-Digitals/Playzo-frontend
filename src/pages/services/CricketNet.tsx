import CricketNetSlide1 from "../../assets/CricketNetSlide1.svg";
import Cricket_logo from "../../assets/Cricket_logo.svg";
import Service from "./Service";
import ServiceGrid from "./ServiceGrid";

const heading1 = "Cricket Net";
const heading2 = "Features";
const heading3 = "Benefits";
const desc1 =
  "Immerse yourself in focused and effective cricket training with Playzo33's state-of-the-art Cricket Net. Tailored for bowlers and batsmen alike, our nets provide a controlled environment for skill refinement.";
const firstBullet1 = "Ensures a secure and controlled practice space.";
const secBullet1 =
  "Professional-grade netting ensures a secure environment for players.";
const buttonLabel = "Book Now";
export default function CricketNet() {
  const carouselItems = [
    <img style={{ width: "100%" }} src={CricketNetSlide1} alt={"title"} />,

    <img style={{ width: "100%" }} src={CricketNetSlide1} alt={"title"} />,
  ];
  return (
    <>
      <Service />
      <ServiceGrid
        direction={{ xs: "column", sm: "column", md: "row" }}
        marginTop={{ xs: 0, sm: 0, md: "11rem" }}
        icon={Cricket_logo}
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
