import Service from "./Service";
import ServiceGrid from "./ServiceGrid";
import assets from "../../assets";
import badmintonImage from "../../assets/BadmintonImages";

const { "Badmin_logo.svg": Badmin_logo } = assets;
const {
  "badminton1.jpg": Badmintonslide2,
  "badminton2.jpg": Badmintonslide3,
  "badminton3.jpg": Badmintonslide4,
} = badmintonImage;

const heading1 = "Badminton";
const heading2 = "Features";
const heading3 = "Benefits";
const desc1 =
  "Indulge in the fast-paced action of badminton on our professional courts. Whether you're a seasoned player or a casual enthusiast, our facilities are designed for a great badminton experience.";
const firstBullet1 =
  "Experience pro-level courts suitable for all-level play in a well-lit environment perfect for day or night matches. Enjoy a player-friendly setup for casual or competitive games.";

const secBullet1 =
  "Enjoy versatile play accommodating all levels, with convenient playing hours, including evening sessions. Experience a competitive atmosphere for both friendly and challenging matches.";

const buttonLabel = "Enquire Now";
const content = "This is badminton"
export default function Badminton() {
  const carouselItems = [
    <img style={{ width: "100%" }} src={Badmintonslide2} alt={"title"} />,
    <img style={{ width: "100%" }} src={Badmintonslide3} alt={"title"} />,

    <img style={{ width: "100%" }} src={Badmintonslide4} alt={"title"} />,
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
        direction={{
          xs: "column",
          sm: "column",
          md: "column",
          lg: "row-reverse",
        }}
        icon={Badmin_logo}
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
