import Service from "./Service";
import ServiceGrid from "./ServiceGrid";
import TurfSlide1 from '../../assets/TurfSlide1.svg'

const heading1="Turf";
const heading2="Features";
const heading3="Benefits";
const desc1="Elevate your sports experience on our premier turf at Playzo33. Ideal for soccer, field hockey, and flag football enthusiasts, our impeccable surfaces provide the perfect arena for vibrant and thrilling games.";
const firstBullet1="Versatile surface for various sports.";
const firstBullet2="Well-lit facilities for day and night play.";
const firstBullet3="Professional maintenance ensures a safe environment.";
const secBullet1="Multi-sport experience catering to soccer, field hockey, and flag football.";
const secBullet2="Flexible playing hours, allowing sports day or night.";
const secBullet3="Safety assurance with consistent maintenance.";
const buttonLabel="Book Now"
export default function Turf() {
        const carouselItems = [
        <img
        style={{ width:"100%" }}
        src={TurfSlide1}
        alt={"title"}
      />,
      
      <img
      style={{ width:"100%"}}
      src={TurfSlide1}
      alt={"title"}
    />
      ];
    return <>
<Service />
<ServiceGrid carouselItems={carouselItems} heading1={heading1} desc1={desc1} heading2={heading2} firstBullet1={firstBullet1} firstBullet2={firstBullet2} firstBullet3={firstBullet3} heading3={heading3} secBullet1={secBullet1} secBullet2={secBullet2} secBullet3={secBullet3} buttonLabel={buttonLabel} />

    </>
}