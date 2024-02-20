import CrossFitslide1 from "../../assets/CrossFitslide1.svg";
import Cross_logo from "../../assets/Cross_logo.svg";
import Service from "./Service";
import ServiceGrid from "./ServiceGrid";

const heading1 = "CrossFit";
const heading2 = "Features";
const heading3 = "Benefits";
const desc1 =
  "Challenge yourself at Playzo33's CrossFit area. Equipped with the latest gear and led by certified trainers, our space is designed for fitness enthusiasts seeking dynamic and effective workouts.";
const firstBullet1 = "Cutting-edge equipment for varied workouts.";
const secBullet1 = "Varied workouts challenging all fitness levels.";
const buttonLabel = "Enquire Now";
export default function CrossFit() {
  const carouselItems = [
    <img style={{ width: "100%" }} src={CrossFitslide1} alt={"title"} />,

    <img style={{ width: "100%" }} src={CrossFitslide1} alt={"title"} />,
  ];
  return (
    <>
      <Service />
      <ServiceGrid
        direction={{ xs: "column", sm: "column", md: "row-reverse" }}
        marginTop={"11rem"}
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
