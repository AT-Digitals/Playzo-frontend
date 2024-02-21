import CrossFitslide1 from "../../assets/CrossFit/cross1.jpg";
import CrossFitslide2 from "../../assets/CrossFit/cross2.jpg";
import CrossFitslide3 from "../../assets/CrossFit/cross3.jpg";
import CrossFitslide4 from "../../assets/CrossFit/cross4.webp";
import Cross_logo from "../../assets/Cross_logo.svg";
import Service from "./Service";
import ServiceGrid from "./ServiceGrid";

const heading1 = "CrossFit";
const heading2 = "Features";
const heading3 = "Benefits";
const desc1 =
  "Take on the challenge at Playzo33's CrossFit area. With the latest gear and certified trainers, our space is tailored for fitness enthusiasts seeking dynamic and effective workouts. Elevate your fitness journey with us.";
const firstBullet1 =
  "Access cutting-edge equipment for diverse workouts with certified trainers providing expert guidance. Immerse yourself in an energetic atmosphere that fosters focused and effective workout sessions.";
const secBullet1 =
  "Engage in varied workouts challenging all fitness levels with expert guidance from certified professionals. Join a positive fitness community that promotes health and wellness for everyone.";
const buttonLabel = "Enquire Now";
export default function CrossFit() {
  const carouselItems = [
    <img
      style={{ width: "100%", height: "100%" }}
      src={CrossFitslide1}
      alt={"title"}
    />,

    <img
      style={{ width: "100%", height: "100%" }}
      src={CrossFitslide2}
      alt={"title"}
    />,
    <img
      style={{ width: "100%", height: "100%" }}
      src={CrossFitslide3}
      alt={"title"}
    />,

    <img
      style={{ width: "100%", height: "100%" }}
      src={CrossFitslide4}
      alt={"title"}
    />,
    <img
      style={{ width: "100%", height: "100%" }}
      src={CrossFitslide3}
      alt={"title"}
    />,
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
        direction={{ xs: "column", sm: "column", md: "row-reverse" }}
        icon={Cross_logo}
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
