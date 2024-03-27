import Service from "./Service";
import ServiceGrid from "./ServiceGrid";
import assets from "../../assets";
import bowlingImage from "../../assets/Bowling";

const { "Bowling_logo.svg": Bowling_logo } = assets;
const {
  "bowling1.jpg": BowlingSlide1,
  "bowling2.jpg": BowlingSlide2,
  "bowling3.webp": BowlingSlide3,
} = bowlingImage;

const heading1 = "Bowling Machine";
const heading2 = "Features";
const heading3 = "Benefits";
const desc1 =
  "Elevate your cricket practice at Playzo33 with our cutting-edge Bowling Machine. Designed for precision and consistency, it's the perfect companion for players of all levels aiming to enhance their batting skills.";
const firstBullet1 =
  "Personalize your practice session by adjusting the machine. Mimic game scenarios for a dynamic training experience, enabling solo practice sessions without the need for a partner.";
const secBullet1 =
  "Enhance batting skills with consistent, controlled deliveries suitable for all skill levels. Tailored for individual training, promoting continuous improvement for both beginners and seasoned cricketers.";
const buttonLabel = "Book Now";
const content = "This is bowlingmachine"
export default function BowlingMachine() {
  const carouselItems = [
    <img style={{ width: "100%" }} src={BowlingSlide1} alt={"title"} />,

    <img style={{ width: "100%" }} src={BowlingSlide2} alt={"title"} />,
    <img style={{ width: "100%" }} src={BowlingSlide3} alt={"title"} />,
    <img style={{ width: "100%" }} src={BowlingSlide1} alt={"title"} />,
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
        icon={Bowling_logo}
        carouselItems={carouselItems}
        heading1={heading1}
        desc1={desc1}
        heading2={heading2}
        firstBullet1={firstBullet1}
        heading3={heading3}
        secBullet1={secBullet1}
        buttonLabel={buttonLabel}
        content1={content}
      />
    </>
  );
}
