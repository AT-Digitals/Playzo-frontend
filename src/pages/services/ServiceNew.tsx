import Badminton from "./Badminton";
import BoardGames from "./BoardGames";
import BowlingMachine from "./BowlingMachine";
import { Box } from "@mui/material";
import Cafeteria from "./Cafeteria";
import CricketNet from "./CricketNet";
import CrossFit from "./CrossFit";
import PartyCenter from "./PartyCenter";
import PlayStation from "./PlayStation";
import ServiceHeaders from "./ServiceHeader";
import Turf from "./Turf";

export default function ServiceNewUI() {
  return (
    <Box>
      <ServiceHeaders />

      <Turf />
      <Badminton />
      <BowlingMachine />
      <Cafeteria />
      <CricketNet />
      <CrossFit />
      <PartyCenter />
      <PlayStation />
      <BoardGames />
    </Box>
  );
}
