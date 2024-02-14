import BookingParent from "./BookingParant";
import { BookingType } from "../CommonFiles/BookingType";

const PlaystationBookingCommon = () => {
  return <BookingParent type={BookingType.Playstaion} />;
};

export default PlaystationBookingCommon;
