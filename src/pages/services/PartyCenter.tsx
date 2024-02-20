import PartyCenterSlide1 from "../../assets/PartyCenterSlide1.svg";
import Party_logo from "../../assets/Party_logo.svg";
import Service from "./Service";
import ServiceGrid from "./ServiceGrid";

const heading1 = "Party Center";
const heading2 = "Features";
const heading3 = "Benefits";
const desc1 =
  "Host unforgettable celebrations at Playzo33's Party Center. Our versatile facilities, tailored party packages, and vibrant atmosphere ensure a stress-free and enjoyable event.";
const firstBullet1 = "Versatile event spaces for various types of parties.";
const secBullet1 = "Stress-free planning with assistance in event details.";
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
        marginTop={{ xs: 0, sm: 0, md: "11rem" }}
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
