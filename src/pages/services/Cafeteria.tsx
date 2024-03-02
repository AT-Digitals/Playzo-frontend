import Service from "./Service";
import ServiceGrid from "./ServiceGrid";
import assets from "../../assets";
import cafeteriaImage from "../../assets/Cafeteriya";

const { "Cafe_logo.svg": Cafe_logo } = assets;
const {
  "cafe1.jpg": CafeteriaSlide1,
  "cafe2.jpg": CafeteriaSlide2,
  "cafe3.jpg": CafeteriaSlide3,
  "cafe4.jpg": CafeteriaSlide4,
} = cafeteriaImage;

const heading1 = "Cafeteria";
const heading2 = "Features";
const heading3 = "Benefits";
const desc1 =
  "Refuel and relax at Playzo33's Cafeteria. Our diverse menu serves delicious bites in a comfortable, social environment, providing the perfect setting for a delightful dining experience.";
const firstBullet1 =
  "Explore a diverse menu with various food options, specials, and promotions for a delightful dining experience. Enjoy comfortable seating in a social environment, creating the perfect ambiance for memorable moments.";
const secBullet1 =
  "Enjoy onsite dining without leaving, a social hub for friends, with a variety catering to quick bites or hearty meals.";
const buttonLabel = "Enquire Now";
export default function Cafeteria() {
  const carouselItems = [
    <img style={{ width: "100%" }} src={CafeteriaSlide1} alt={"title"} />,

    <img style={{ width: "100%" }} src={CafeteriaSlide2} alt={"title"} />,
    <img style={{ width: "100%" }} src={CafeteriaSlide3} alt={"title"} />,

    <img style={{ width: "100%" }} src={CafeteriaSlide4} alt={"title"} />,
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
        icon={Cafe_logo}
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
