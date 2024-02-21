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
    <>
      <Box
        sx={{
          background:
            "repeating-linear-gradient(-45deg, transparent, transparent 1em, rgba(127, 215, 245, 0.1) 0, rgba(127, 215, 245, 0.1) 2em, transparent 0, transparent 1em, rgba(127, 215, 245, 0.1) 0, rgba(127, 215, 245, 0.1) 4em, transparent 0, transparent 1em, rgba(192, 235, 250, 0.4) 0, rgba(192, 235, 250, 0.2) 2em), repeating-linear-gradient(45deg, transparent, transparent 1em, rgba(127, 215, 245, 0.2) 0, rgba(127, 215, 245, 0.1) 2em, transparent 0, transparent 1em, rgba(127, 215, 245, 0.15) 0, rgba(127, 215, 245, 0.1) 4em, transparent 0, transparent 1em, rgba(192, 235, 250, 0.3) 0, rgba(192, 235, 250, 0.1) 2em), #fff;",
          backgroundBlendMode: "multiply",
        }}
      >
        <Box padding={"0 40px"}>
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
      </Box>
    </>
  );
}
