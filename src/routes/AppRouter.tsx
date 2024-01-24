import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutUs from "../pages/aboutUs/AboutUs";
import AppLayout from "../CommonFiles/AppLayout";
import Badminton from "../pages/services/Badminton";
import BoardGames from "../pages/services/BoardGames";
import Cafeteria from "../pages/services/Cafeteria";
import ContactUs from "../pages/contactus/ContactUs";
import CrossFit from "../pages/services/CrossFit";
import CustomDateCalendar from "../CommonComponents/CustomDateCalender/CustomDateCalender";
import HomePage from "../Components/HomePage";
import ImageSliderGallery from "../CommonComponents/carousel/SliderGallery";
import LoginForm from "../pages/login/LoginForm";
import PartyCenter from "../pages/services/PartyCenter";
import PlayStation from "../pages/services/PlayStation";
import Service from "../pages/services/Service";
import Turf from "../pages/services/Turf";
import UserProfile from "../pages/user/UserProfile";
import ServiceBooking from "../BookingService/ServiceBooking";
import TurfBooking from "../BookingService/TurfBooking";
import PlaystationBooking from "../BookingService/PlaystationBooking";
import BadmintonBooking from "../BookingService/BadmintonBooking";
import BoardgameBooking from "../BookingService/BoardgameBooking";
import CricketnetBooking from "../BookingService/CricketnetBooking";
import BowlingmachineBooking from "../BookingService/BowlingmachineBooking";
import PaymentBooking from "../BookingService/PaymentBooking";
import routes from "./routes";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={routes.LOGIN} element={<LoginForm />} />
        <Route path={routes.ROOT} element={<AppLayout />}>
          <Route path={routes.ROOT} element={<HomePage />} />
          <Route path={routes.SERVICE} element={<Service />} />
          <Route path={routes.PLAYSTATION} element={<PlayStation />} />
          <Route path={routes.CROSSFIT} element={<CrossFit />} />
          <Route path={routes.BADMINTON} element={<Badminton />} />
          <Route path={routes.TURF} element={<Turf />} />
          <Route path={routes.BOARDGAMES} element={<BoardGames />} />
          <Route path={routes.PARTYCENTER} element={<PartyCenter />} />
          <Route path={routes.CAFETERIA} element={<Cafeteria />} />
          <Route path={routes.ABOUTUS} element={<AboutUs />} />
          <Route path={routes.CONTACTUS} element={<ContactUs />} />
          <Route path={routes.USERPROFILE} element={<UserProfile />} />
          <Route path={routes.BOOKING_SERVICE} element={<ServiceBooking />} />
          <Route path={routes.TURF_BOOKING} element={<TurfBooking />} />
          <Route path={routes.PLAYSTATION_BOOKING} element={<PlaystationBooking />} />
          <Route path={routes.BADMINTON_BOOKING} element={<BadmintonBooking />} />
          <Route path={routes.BOARDGAME_BOOKING} element={<BoardgameBooking />} />
          <Route path={routes.CRICKETNET_BOOKING} element={<CricketnetBooking />} />
          <Route path={routes.BOWLINGMACHINE_BOOKING} element={<BowlingmachineBooking />} />
          <Route path={routes.PAYMENT_BOOKING} element={<PaymentBooking />} />
          <Route path={routes.DATE_CALENDER} element={<CustomDateCalendar />} />
          <Route path={routes.IMAGE_GALLERY} element={<ImageSliderGallery />} />
        </Route>
      </Routes>
    </Router>
  );
}
