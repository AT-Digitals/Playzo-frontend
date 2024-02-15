import BookingParent from "./BookingParant";
import { BookingType } from "../CommonFiles/BookingType";

const BowllingMachineBookingCommon = () => {
  return <BookingParent type={BookingType.BowlingMachine} />;
};

export default BowllingMachineBookingCommon;
