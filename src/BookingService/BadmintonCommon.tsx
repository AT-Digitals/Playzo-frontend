import BookingParent from "./BookingParant";
import { BookingType } from "../CommonFiles/BookingType";

const BadmintonBookingCommon = () => {
  return <BookingParent type={BookingType.Badminton} />;
};

export default BadmintonBookingCommon;
