import Badmin_logo from "../../assets/Badmin_logo.svg";
import Badmintonslide1 from "../../assets/Badmintonslide1.svg";
import Badmintonslide2 from "../../assets/BadmintonImages/badminton1.jpg";
import Badmintonslide3 from "../../assets/BadmintonImages/badminton2.jpg";
import Badmintonslide4 from "../../assets/BadmintonImages/badminton3.jpg";
import Service from "./Service";
import ServiceGrid from "./ServiceGrid";

const heading1 = "Badminton";
const heading2 = "Features";
const heading3 = "Benefits";
const desc1 =
  "Indulge in the fast-paced action of badminton on our professional courts. Whether you're a seasoned player or a casual enthusiast, our facilities are designed for a great badminton experience.";
const firstBullet1 =
  "Experience pro-level courts suitable for all-level play in a well-lit environment perfect for day or night matches. Enjoy a player-friendly setup for casual or competitive games.";

const secBullet1 =
  "Enjoy versatile play accommodating all levels, with convenient playing hours, including evening sessions. Experience a competitive atmosphere for both friendly and challenging matches.";

const buttonLabel = "Enquire Now";
export default function Badminton() {
  const carouselItems = [
    <img style={{ width: "100%" }} src={Badmintonslide1} alt={"title"} />,

    <img style={{ width: "100%" }} src={Badmintonslide2} alt={"title"} />,
    <img style={{ width: "100%" }} src={Badmintonslide3} alt={"title"} />,

    <img style={{ width: "100%" }} src={Badmintonslide4} alt={"title"} />,
  ];
  return (
    <>
      <Service />
      <ServiceGrid
        position={"end"}
        direction={{ xs: "column", sm: "column", md: "row-reverse" }}
        icon={Badmin_logo}
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
