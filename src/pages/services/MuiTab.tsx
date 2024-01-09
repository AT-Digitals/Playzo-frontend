import { Box, Tab, Tabs } from "@mui/material";
import { Link, matchPath, useLocation } from "react-router-dom";

import { NoEncryption } from "@mui/icons-material";
import ServiceGrid from "./ServiceGrid";
import routes from "../../routes/routes";

const tabList = [
  {
    href: routes.PLAYSTATION,
    label: "Play Station",
  },
  {
    href: routes.CROSSFIT,
    label: "CrossFit",
  },
  {
    href: routes.BADMINTON,
    label: "Badminton",
  },
  {
    href: routes.TURF,
    label: "Turf",
  },
  {
    href: routes.BOARDGAMES,
    label: "Board Games",
  },
  {
    href: routes.PARTYCENTER,
    label: "Party Center",
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
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
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
  };

export default function MuiTab() {

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      // event.type can be equal to focus with selectionFollowsFocus.
      if (
        event.type !== 'click' ||
        (event.type === 'click' &&
          samePageLinkNavigation(
            event as React.MouseEvent<HTMLAnchorElement, MouseEvent>,
          ))
      ) {
        console.log(newValue);
      }
    };

    const routeMatch = useRouteMatch([routes.PLAYSTATION,routes.CROSSFIT,routes.BADMINTON,routes.TURF,routes.BOARDGAMES,routes.PARTYCENTER,routes.CAFETERIA]);
    const currentTab = routeMatch?.pattern?.path;
    
    return <>
<Tabs 
  value={currentTab}
  onChange={handleChange}
  aria-label="nav tabs example"
  role="navigation"
  centered
  sx={{
    marginTop:"10px",
    maxWidth:"95%",
    "--Tab-indicatorThickness": "0px",
".MuiTabs-indicator":{
  display:"none"
},
".MuiButtonBase-root":{
  fontSize: "20px",
  fontWeight: "700",
  textTransform:"capitalize"
},
// ".MuiButtonBase-root-MuiTab-root":{
  ".Mui-selected":{
    // fontSize: "20px",
    fontStyle: "italic",
    // fontWeight: "700",
    // textTransform:"lowercase"
  // }
}
  }}
 
>

{tabList.map((tab,index) => (
    <Tab label={tab.label} value={tab.href} to={tab.href} component={Link} key={index}  />
   
      ))}
</Tabs>

    </>
}