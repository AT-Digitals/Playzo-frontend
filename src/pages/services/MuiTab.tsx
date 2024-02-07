import { Box, IconButton, Tab, Tabs, Typography } from "@mui/material";
import { Link, matchPath, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Colors from "../../CommonComponents/Colors";
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
  const [displayedTabs, setDisplayedTabs] = useState(tabList.slice(0, 5));

  const [nextClicked, setNextClicked] = useState(false);

  const handleNextTab = () => {
    const currentIndex = tabList.findIndex((tab) => tab.href === currentTab);
    const remainingTabs = tabList.slice(currentIndex + 1);

    if (remainingTabs.length > 0) {
      setDisplayedTabs(remainingTabs.slice(0, 5));
      setNextClicked(true);
    }
  };

  const handlePrevTab = () => {
    const currentIndex = tabList.findIndex((tab) => tab.href === currentTab);
    const prevTabs = tabList.slice(0, currentIndex);

    if (prevTabs.length > 0 && nextClicked) {
      setDisplayedTabs(prevTabs.slice(-5));
      setNextClicked(false);
    }
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

  useEffect(() => {
    const handleResize = () => {
      const innerWidth = window.innerWidth;
      if (innerWidth >= 280 && innerWidth <= 960) {
        setDisplayedTabs(tabList.slice(0, 5));
      } else {
        setDisplayedTabs(tabList);
      }
    };

    window.addEventListener("resize", handleResize);
    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [tabList]);

  return (
    <>
      <Box
        flexDirection={"row"}
        sx={{
          width: "100%",
          maxWidth: "880px", // Set the maximum width for the box
          margin: "auto", // Center the box
          display: "flex",
          alignItems: "center",
        }}
      >
        {nextClicked ? (
          <Box display={{ lg: "none" }} onClick={handlePrevTab}>
            <Typography fontWeight={"bold"} fontSize={"20px"}>
              <IconButton
                style={{
                  color: "black",
                }}
              >
                {"<"}
              </IconButton>
            </Typography>
          </Box>
        ) : (
          ""
        )}

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
              fontWeight: 500,
              textTransform: "capitalize",
              color: Colors.BUTTON_COLOR,

              "&.Mui-selected": {
                fontWeight: "bold",
                color: Colors.BUTTON_COLOR,
                borderBottomColor: Colors.BUTTON_COLOR,
                boxShadow: "0px 3px 0px 0px " + Colors.BUTTON_COLOR,
                borderBottomWidth: "2px",
              },
            },
            ".MuiTabs-flexContainer": {
              flexWrap: "wrap",
              gap: "0.5rem",
              paddingBottom: "2rem",
            },

            width: "95%", // Make sure the Tabs take full width
          }}
        >
          {displayedTabs.map((tab, index) => (
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

        <Box display={{ md: "none", lg: "none" }} onClick={handleNextTab}>
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
