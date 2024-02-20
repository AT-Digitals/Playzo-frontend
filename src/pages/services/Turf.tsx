import Service from "./Service";
import ServiceGrid from "./ServiceGrid";
import TurfSlide1 from "../../assets/TurfImages/turf1.jpg";
import TurfSlide2 from "../../assets/TurfImages/turf2.jpg";
import TurfSlide3 from "../../assets/TurfImages/turf3.jpg";
import TurfSlide4 from "../../assets/TurfImages/turf4.jpg";
import Turf_logo from "../../assets/Turf_logo.svg";

const heading1 = "Turf";
const heading2 = "Features";
const heading3 = "Benefits";
const desc1 =
  "Elevate your sports experience on our premier turf at Playzo33. Ideal for soccer, field hockey, and flag football enthusiasts, our impeccable surfaces provide the perfect arena for vibrant and thrilling games.";
const firstBullet1 =
  "Offering a versatile surface for various sports, well-lit facilities for day and night play, and professional maintenance ensuring a safe environment.";

const secBullet1 =
  "Providing a multi-sport experience catering to soccer, field hockey, and flag football, with flexible playing hours for day or night activities and safety assurance through consistent maintenance.";

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
        direction={{ xs: "column", sm: "column", md: "row" }}
        marginTop={{ xs: 0, sm: 0, md: "6rem" }}
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
