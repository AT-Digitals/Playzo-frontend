import Cafe_logo from "../../assets/Cafe_logo.svg";
import CafeteriaSlide1 from "../../assets/CafeteriaSlide1.svg";
import Service from "./Service";
import ServiceGrid from "./ServiceGrid";

const heading1 = "Cafeteria";
const heading2 = "Features";
const heading3 = "Benefits";
const desc1 =
  "Refuel and relax at Playzo33's Cafeteria. Our diverse menu serves delicious bites in a comfortable, social environment, providing the perfect setting for a delightful dining experience.";
const firstBullet1 =
  "Explore a diverse menu with various food options, specials, and promotions for a delightful dining experience. Enjoy comfortable seating in a social environment, creating the perfect ambiance for memorable moments.";
const secBullet1 =
  "Enjoy onsite dining without leaving, a social hub for friends, with a variety catering to quick bites or hearty meals. It's the perfect place for convenient gatherings and a delightful dining experience.";
const buttonLabel = "Enquire Now";
export default function Cafeteria() {
  const carouselItems = [
    <img style={{ width: "100%" }} src={CafeteriaSlide1} alt={"title"} />,

    <img style={{ width: "100%" }} src={CafeteriaSlide1} alt={"title"} />,
  ];
  return (
    <>
      <Service />
      <ServiceGrid
        position={"end"}
        direction={{ xs: "column", sm: "column", md: "row-reverse" }}
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
