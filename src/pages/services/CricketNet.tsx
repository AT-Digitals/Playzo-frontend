import CricketNetSlide1 from "../../assets/CricketNet/crick1.webp";
import CricketNetSlide2 from "../../assets/CricketNet/crick2.jpg";
import CricketNetSlide3 from "../../assets/CricketNet/crick3.jpg";
import CricketNetSlide4 from "../../assets/CricketNet/crick4.jpg";
import Cricket_logo from "../../assets/Cricket_logo.svg";
import Service from "./Service";
import ServiceGrid from "./ServiceGrid";

const heading1 = "Cricket Net";
const heading2 = "Features";
const heading3 = "Benefits";
const desc1 =
  "Immerse yourself in focused and effective cricket training with Playzo33's state-of-the-art Cricket Net. Tailored for bowlers and batsmen alike, our nets provide a controlled environment for skill refinement.";
const firstBullet1 =
  "Create a secure and controlled practice space with adjustable tension for customized training sessions. Perfect for full-range shots and effective bowling practice.";
const secBullet1 =
  "Professional-grade netting ensures a secure environment for players. Adjust the tension settings for specific skill refinement, catering to both batting and bowling practice needs.";
const buttonLabel = "Book Now";
export default function CricketNet() {
  const carouselItems = [
    <img style={{ width: "100%" }} src={CricketNetSlide1} alt={"title"} />,

    <img style={{ width: "100%" }} src={CricketNetSlide2} alt={"title"} />,
    <img style={{ width: "100%" }} src={CricketNetSlide3} alt={"title"} />,

    <img style={{ width: "100%" }} src={CricketNetSlide4} alt={"title"} />,
  ];
  return (
    <>
      <Service />
      <ServiceGrid
        radiusTopleft={"0px"}
        radiusTopright={"20px"}
        radiusbottompleft={"0px"}
        radiusbottompright={"20px"}
        direction={{ xs: "column", sm: "column", md: "row" }}
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
