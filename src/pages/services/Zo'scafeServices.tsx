import BoardGames from "./BoardGames";
import { Box } from "@mui/material";
import Cafeteria from "./Cafeteria";
import PartyCenter from "./PartyCenter";
import PlayStation from "./PlayStation";
import ServiceHeaders from "./ServiceHeader";
import { useEffect } from "react";

export default function ZocafeServices() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <>
      <Box
        sx={{
          background: `
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 1em,
              rgba(127, 215, 245, 0.05) 0,    /* Decreased opacity to 0.05 */
              rgba(127, 215, 245, 0.05) 2em,
              transparent 0,
              transparent 1em,
              rgba(127, 215, 245, 0.05) 0,
              rgba(127, 215, 245, 0.05) 4em,
              transparent 0,
              transparent 1em,
              rgba(192, 235, 250, 0.05) 0,
              rgba(192, 235, 250, 0.1) 2em
            ),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 1em,
              rgba(127, 215, 245, 0.1) 0,
              rgba(127, 215, 245, 0.05) 2em,  /* Decreased opacity to 0.05 */
              transparent 0,
              transparent 1em,
              rgba(127, 215, 245, 0.05) 0,
              rgba(127, 215, 245, 0.05) 4em,
              transparent 0,
              transparent 1em,
              rgba(192, 235, 250, 0.05) 0,
              rgba(192, 235, 250, 0.05) 2em
            ),
            whitesmoke
          `,
          backgroundBlendMode: "multiply",
          scrollBehavior: "smooth",
        }}
      >
        <Box padding={{ xs: 0, sm: 0, md: "0 10px", lg: "0 40px" }}>
          <ServiceHeaders />

          <PlayStation />
          <BoardGames />
          <Cafeteria />
          <PartyCenter />
        </Box>
      </Box>
    </>
  );
}
