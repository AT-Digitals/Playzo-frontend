import BowlingSlide1 from '../../assets/BowlingSlide1.svg'
import Bowling_logo from '../../assets/Bowling_logo.svg'
import Service from "./Service";
import ServiceGrid from "./ServiceGrid";

const heading1="Bowling Machine";
const heading2="Features";
const heading3="Benefits";
const desc1="Elevate your cricket practice at Playzo33 with our cutting-edge Bowling Machine. Designed for precision and consistency, it's the perfect companion for players of all levels aiming to enhance their batting skills.";
const firstBullet1="Adjust machine for a personalized practice session.";
const firstBullet2="Mimics game scenarios for a more dynamic training experience.";
const firstBullet3="Allows solo practice sessions without the need for a partner.";
const secBullet1="Hone your batting skills with consistent and controlled deliveries.";
const secBullet2="Suitable for players at any skill level, from beginners to seasoned cricketers.";
const secBullet3="Perfect for individual training sessions, ensuring continuous improvement.";
const buttonLabel="Book Now"
export default function BowlingMachine() {
        const carouselItems = [
        <img
        style={{ width:"100%" }}
        src={BowlingSlide1}
        alt={"title"}
      />,
      
      <img
      style={{ width:"100%"}}
      src={BowlingSlide1}
      alt={"title"}
    />
      ];
    return <>
<Service />
<ServiceGrid icon={Bowling_logo} carouselItems={carouselItems} heading1={heading1} desc1={desc1} heading2={heading2} firstBullet1={firstBullet1} firstBullet2={firstBullet2} firstBullet3={firstBullet3} heading3={heading3} secBullet1={secBullet1} secBullet2={secBullet2} secBullet3={secBullet3} buttonLabel={buttonLabel} />

    </>
}