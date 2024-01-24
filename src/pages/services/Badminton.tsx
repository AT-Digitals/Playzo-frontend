import Badmintonslide1 from '../../assets/Badmintonslide1.svg'
import Service from "./Service";
import ServiceGrid from "./ServiceGrid";

const heading1="Badminton";
const heading2="Features";
const heading3="Benefits";
const desc1="Indulge in the fast-paced action of badminton on our professional courts. Whether you're a seasoned player or a casual enthusiast, our facilities are designed for a great badminton experience.";
const firstBullet1="Pro-level courts suitable for all-level play.";
const firstBullet2="Well-lit environment for day or night matches.";
const firstBullet3="Player-friendly setup for casual or competitive games.";
const secBullet1="Versatile play accommodating players of all levels.";
const secBullet2="Convenient playing hours, including evening sessions.";
const secBullet3="Competitive atmosphere for both friendly and challenging matches.";
const buttonLabel="Enquire Now"
export default function Badminton() {
        const carouselItems = [
        <img
        style={{ width:"100%" }}
        src={Badmintonslide1}
        alt={"title"}
      />,
      
      <img
      style={{ width:"100%"}}
      src={Badmintonslide1}
      alt={"title"}
    />
      ];
    return <>
<Service />
<ServiceGrid carouselItems={carouselItems} heading1={heading1} desc1={desc1} heading2={heading2} firstBullet1={firstBullet1} firstBullet2={firstBullet2} firstBullet3={firstBullet3} heading3={heading3} secBullet1={secBullet1} secBullet2={secBullet2} secBullet3={secBullet3} buttonLabel={buttonLabel} />

    </>
}