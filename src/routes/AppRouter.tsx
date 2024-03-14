import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import AboutUs from "../pages/aboutUs/AboutUs";
import AppLayout from "../CommonFiles/AppLayout";
import Badminton from "../pages/services/Badminton";
import BadmintonBookingCommon from "../BookingService/BadmintonCommon";
import BoardBookingCommon from "../BookingService/BoardGamesCommon";
import BoardGames from "../pages/services/BoardGames";
import BookingPDF from "../BookingService/BookingPDF";
import BowlingMachine from "../pages/services/BowlingMachine";
import BowllingMachineBookingCommon from "../BookingService/BowlingMachineCommon";
import Cafeteria from "../pages/services/Cafeteria";
import CareersPageNew from "../pages/Careers/CarrersPage";
import ContactUs from "../pages/contactus/ContactUs";
import CookiesPage from "../pages/Careers/CookiesPage";
import CricketNet from "../pages/services/CricketNet";
import CricketNetBookingCommon from "../BookingService/CricketNetCommon";
import CrossFit from "../pages/services/CrossFit";
import CustomDateCalendar from "../CommonComponents/CustomDateCalender/CustomDateCalender";
import FaqPage from "../pages/FAQ/FaqPage";
import HomePage from "../Components/HomePage";
import ImageSliderGallery from "../CommonComponents/carousel/SliderGallery";
import PartyCenter from "../pages/services/PartyCenter";
import PaymentBooking from "../BookingService/PaymentBooking";
import PlayStation from "../pages/services/PlayStation";
import PlaystationBookingCommon from "../BookingService/PlaystatinCommon";
import PrivacyPolicy from "../pages/FAQ/PrivacyPolicy";
import ServiceBooking from "../BookingService/ServiceBooking";
import ServiceNewUI from "../pages/services/ServiceNew";
import TermsandComditions from "../pages/Terms&conditions/TermsandConditions";
import Turf from "../pages/services/Turf";
import TurfBookingCoomon from "../BookingService/TurfBookingCommon";
import UserProfile from "../pages/user/UserProfile";
import routes from "./routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={routes.ROOT} element={<AppLayout />}>
        <Route path={routes.ROOT} element={<HomePage />} />
        <Route path={routes.SERVICE} element={<ServiceNewUI />} />
        <Route path={routes.PLAYSTATION} element={<PlayStation />} />
        <Route path={routes.CROSSFIT} element={<CrossFit />} />
        <Route path={routes.BADMINTON} element={<Badminton />} />
        <Route path={routes.TURF} element={<Turf />} />
        <Route path={routes.BOARDGAMES} element={<BoardGames />} />
        <Route path={routes.PARTYCENTER} element={<PartyCenter />} />
        <Route path={routes.CAFETERIA} element={<Cafeteria />} />
        <Route path={routes.ABOUTUS} element={<AboutUs />} />
        <Route path={routes.CONTACTUS} element={<ContactUs />} />
        <Route path={routes.CAREERS_PAGE} element={<CareersPageNew />} />

        <Route path={routes.USERPROFILE} element={<UserProfile />} />
        <Route path={routes.BOOKING_SERVICE} element={<ServiceBooking />} />
        <Route path={routes.TURF_BOOKING} element={<TurfBookingCoomon />} />
        <Route
          path={routes.PLAYSTATION_BOOKING}
          element={<PlaystationBookingCommon />}
        />
        <Route
          path={routes.BADMINTON_BOOKING}
          element={<BadmintonBookingCommon />}
        />
        <Route
          path={routes.BOARDGAME_BOOKING}
          element={<BoardBookingCommon />}
        />
        <Route
          path={routes.CRICKETNET_BOOKING}
          element={<CricketNetBookingCommon />}
        />
        <Route
          path={routes.BOWLINGMACHINE_BOOKING}
          element={<BowllingMachineBookingCommon />}
        />
        <Route path={routes.PAYMENT_BOOKING} element={<PaymentBooking />} />
        <Route path={routes.DATE_CALENDER} element={<CustomDateCalendar />} />
        <Route path={routes.IMAGE_GALLERY} element={<ImageSliderGallery />} />
        <Route path={routes.CRICKETNET} element={<CricketNet />} />
        <Route path={routes.BOWLINGMACHINE} element={<BowlingMachine />} />
        <Route path={routes.FAQ} element={<FaqPage />} />
        <Route
          path={routes.TERMS_AND_CONDITIONS}
          element={<TermsandComditions />}
        />
        <Route path={routes.PRIVACY_POLICY} element={<PrivacyPolicy />} />
        <Route path={routes.COOKIES_PAGE} element={<CookiesPage />} />

        <Route path={`${routes.ROOT}/:id`} element={<HomePage />} />
        <Route path={routes.BOOKING_PDF} element={<BookingPDF />} />
      </Route>
    </Route>
  )
);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
