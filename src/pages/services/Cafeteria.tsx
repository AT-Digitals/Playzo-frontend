import Cafe_logo from "../../assets/Cafe_logo.svg";
import CafeteriaSlide1 from "../../assets/CafeteriaSlide1.svg";
import Service from "./Service";
import ServiceGrid from "./ServiceGrid";

const heading1 = "Cafeteria";
const heading2 = "Features";
const heading3 = "Benefits";
const desc1 =
  "Refuel and relax at Playzo33's Cafeteria. Our diverse menu offers delicious bites in a comfortable and social dining environment.";
const firstBullet1 = "Diverse menu offering various food options.";
const secBullet1 = "Onsite dining convenience without leaving the premises.";
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
        direction={{ xs: "column", sm: "column", md: "row-reverse" }}
        marginTop={"11rem"}
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
