import Service from "./Service";
import ServiceGrid from "./ServiceGrid";
import assets from "../../assets";
import turfImages from "../../assets/TurfImages";

const { "Turf_logo.svg": Turf_logo } = assets;
const {
  "turf1.jpg": TurfSlide1,
  "turf2.jpg": TurfSlide2,
  "turf3.jpg": TurfSlide3,
  "turf4.jpg": TurfSlide4,
} = turfImages;

const heading1 = "Turf";
const heading2 = "Features";
const heading3 = "Benefits";
const desc1 =
  "Elevate your sports experience on our premier turf at Playzo33. Ideal for soccer, Cricket, and flag football enthusiasts, our impeccable surfaces provide the perfect arena for vibrant and thrilling games.";
const firstBullet1 =
  "Offering a versatile surface for various sports, well-lit facilities for day and night play, Ideal for soccer, Cricket, and flag football enthusiasts, and professional maintenance ensuring a safe environment.";

const secBullet1 =
  "Providing a multi-sport experience catering to soccer, Cricket, and flag football, with flexible playing hours for day or night activities and safety assurance through consistent maintenance.";

const buttonLabel = "Book Now";
export default function Turf() {
  const carouselItems = [
    <img style={{ width: "100%" }} src={TurfSlide1} alt={"title"} />,

    <img style={{ width: "100%" }} src={TurfSlide2} alt={"title"} />,
    <img style={{ width: "100%" }} src={TurfSlide3} alt={"title"} />,

    <img style={{ width: "100%" }} src={TurfSlide4} alt={"title"} />,
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
        icon={Turf_logo}
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
