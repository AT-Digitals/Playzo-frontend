import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


import routes from "./routes";
import HomePage from "../Components/HomePage";
import AppLayout from "../CommonFiles/AppLayout";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path={routes.ROOT} element={<AppLayout />}>
                    <Route path={routes.ROOT} element={<HomePage />} />
                </Route>
            </Routes>
        </Router>
    );
}
