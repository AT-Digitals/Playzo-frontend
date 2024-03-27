import Service from "./Service";
import ServiceGrid from "./ServiceGrid";
import assets from "../../assets";
import partycenterImage from "../../assets/Partycenter";

const { "Party_logo.svg": Party_logo } = assets;
const {
  "party1.webp": PartyCenterSlide1,
  "party2.jpg": PartyCenterSlide2,
  "party3.jpeg": PartyCenterSlide3,
  "party4.jpg": PartyCenterSlide4,
} = partycenterImage;

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
const content = "This is partycenter"
export default function PartyCenter() {
  const carouselItems = [
    <img
      style={{ width: "100%", height: "100%" }}
      src={PartyCenterSlide1}
      alt={"title"}
    />,

    <img
      style={{ width: "100%", height: "100%" }}
      src={PartyCenterSlide2}
      alt={"title"}
    />,
    <img
      style={{ width: "100%", height: "100%" }}
      src={PartyCenterSlide3}
      alt={"title"}
    />,

    <img
      style={{ width: "100%", height: "100%" }}
      src={PartyCenterSlide4}
      alt={"title"}
    />,
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
        icon={Party_logo}
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
