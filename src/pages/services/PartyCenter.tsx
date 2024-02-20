import PartyCenterSlide1 from "../../assets/PartyCenterSlide1.svg";
import Party_logo from "../../assets/Party_logo.svg";
import Service from "./Service";
import ServiceGrid from "./ServiceGrid";

const heading1 = "Party Center";
const heading2 = "Features";
const heading3 = "Benefits";
const desc1 =
  "Host unforgettable celebrations at Playzo33's Party Center. Our versatile facilities, tailored party packages, and vibrant atmosphere ensure a stress-free and enjoyable event.";
const firstBullet1 =
  "Discover versatile event spaces suitable for various types of parties. Enjoy tailored party packages designed to suit specific celebration needs, complemented by entertainment options for a lively atmosphere.";
const secBullet1 =
  "Enjoy stress-free event planning with assistance in all details. Create lasting memories in a vibrant setting with all-inclusive packages catering to various budgets and preferences.";
const buttonLabel = "Enquire Now";
export default function PartyCenter() {
  const carouselItems = [
    <img style={{ width: "100%" }} src={PartyCenterSlide1} alt={"title"} />,

    <img style={{ width: "100%" }} src={PartyCenterSlide1} alt={"title"} />,
  ];

  return (
    <>
      <Service />
      <ServiceGrid
        direction={{ xs: "column", sm: "column", md: "row" }}
        icon={Party_logo}
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
