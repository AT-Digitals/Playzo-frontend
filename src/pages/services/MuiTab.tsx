import { Box, IconButton, Tab, Tabs, Typography } from "@mui/material";
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom";

import routes from "../../routes/routes";

const tabList = [
  {
    href: routes.TURF,
    label: "Turf",
  },
  {
    href: routes.PLAYSTATION,
    label: "Play Station",
  },
  {
    href: routes.BOARDGAMES,
    label: "Board Games",
  },
  {
    href: routes.BADMINTON,
    label: "Badminton",
  },
  {
    href: routes.CRICKETNET,
    label: "Cricket Net",
  },
  {
    href: routes.BOWLINGMACHINE,
    label: "Bowling Machine",
  },

  {
    href: routes.PARTYCENTER,
    label: "Party Center",
  },
  {
    href: routes.CROSSFIT,
    label: "Cross Fit",
  },

  {
    href: routes.CAFETERIA,
    label: "Cafeteria",
  },
];

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }
}

function samePageLinkNavigation(
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

export default function MuiTab() {
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" &&
        samePageLinkNavigation(
          event as React.MouseEvent<HTMLAnchorElement, MouseEvent>
        ))
    ) {
      console.log(newValue);
    }
  };

  const handleNextTab = () => {
    const currentIndex = tabList.findIndex((tab) => tab.href === currentTab);
    const nextIndex = (currentIndex + 1) % tabList.length;
    navigate(tabList[nextIndex].href);
  };

  const routeMatch = useRouteMatch([
    routes.CRICKETNET,
    routes.BOWLINGMACHINE,
    routes.PLAYSTATION,
    routes.CROSSFIT,
    routes.BADMINTON,
    routes.TURF,
    routes.BOARDGAMES,
    routes.PARTYCENTER,
    routes.CAFETERIA,
  ]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <>
      <Box
        flexDirection={"row"}
        sx={{
          width: "100%",
          maxWidth: "880px", // Set the maximum width for the box
          margin: "auto", // Center the box
          display: "flex",
          // flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Tabs
          value={currentTab}
          onChange={handleChange}
          aria-label="nav tabs example"
          role="navigation"
          centered
          sx={{
            "--Tab-indicatorThickness": "0px",
            ".MuiTabs-indicator": {
              display: "none",
            },
            ".MuiButtonBase-root": {
              fontSize: { xs: "14px", sm: "20px" },
              fontWeight: "700",
              textTransform: "capitalize",
            },
            ".Mui-selected": {
              fontStyle: "italic",
            },
            ".MuiTabs-flexContainer": {
              flexWrap: "wrap",
            },
            width: "95%", // Make sure the Tabs take full width
          }}
        >
          {tabList.map((tab, index) => (
            <Tab
              style={{
                flexWrap: "wrap",
              }}
              label={tab.label}
              value={tab.href}
              to={tab.href}
              component={Link}
              key={index}
            />
          ))}
        </Tabs>
        <Box display={{ lg: "none" }} onClick={handleNextTab}>
          <Typography fontWeight={"bold"} fontSize={"20px"}>
            <IconButton
              style={{
                color: "black",
              }}
            >
              {">"}
            </IconButton>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
