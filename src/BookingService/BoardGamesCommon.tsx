import BookingParent from "./BookingParant";
import { BookingType } from "../CommonFiles/BookingType";

const BoardBookingCommon = () => {
  return <BookingParent type={BookingType.BoardGame} />;
};

export default BoardBookingCommon;
