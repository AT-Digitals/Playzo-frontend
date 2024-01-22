import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutUs from "../pages/aboutUs/AboutUs";
import AppLayout from "../CommonFiles/AppLayout";
import Badminton from "../pages/services/Badminton";
import BoardGames from "../pages/services/BoardGames";
import BowlingMachine from "../pages/services/BowlingMachine";
import Cafeteria from "../pages/services/Cafeteria";
import ContactUs from "../pages/contactus/ContactUs";
import CricketNet from "../pages/services/CricketNet";
import CrossFit from "../pages/services/CrossFit";
import HomePage from "../Components/HomePage";
import LoginForm from "../pages/login/LoginForm";
import PartyCenter from "../pages/services/PartyCenter";
import PlayStation from "../pages/services/PlayStation";
import Service from "../pages/services/Service";
import Turf from "../pages/services/Turf";
import UserProfile from "../pages/user/UserProfile";
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
                    <Route path={routes.CRICKETNET} element={<CricketNet />} />
                    <Route path={routes.BOWLINGMACHINE} element={<BowlingMachine />} />
                    <Route path={routes.CAFETERIA} element={<Cafeteria />} />
                    <Route path={routes.ABOUTUS} element={<AboutUs />} />
                    <Route path={routes.CONTACTUS} element={<ContactUs />} />
                    <Route path={routes.USERPROFILE} element={<UserProfile />} />
                </Route>
            </Routes>
        </Router>
    );
}
