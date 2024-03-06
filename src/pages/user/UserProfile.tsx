import {
  Card,
  CardMedia,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";

import AppContainer from "../../CommonComponents/AppContainer";
import BookingApi from "../../api/BookingApi";
import Colors from "../../CommonComponents/Colors";
import ListCard from "./ListCard";
import assets from "../../assets";

const {
  "Image (6).png": Image6,
  "Rectangle 679.png": RectangleImage,
  "ball 1.png": ball,
  "Layer_1.png": layer,
} = assets;

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [filteredData, setFilteredData] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [userSports, setUserSports] = useState<string[]>([]);

  const CapitalizeFirstLetter = (str: any) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  useEffect(() => {
    const user = localStorage.getItem("user");
    const userData = user && JSON.parse(user);
    setUser(userData);
    setUserSports(userData["interestedSports"]);
  }, []);

  const fetchInfo = useCallback(async () => {
    if (user && user["id"]) {
      try {
        await BookingApi.filterBook({
          user: user["id"],
        }).then((data) => {
          setCount(Math.round(data.length / 4));
        });

        await BookingApi.filterPage({
          user: user["id"],
          page: page,
          limit: 4,
        }).then((data) => {
          setFilteredData(data);
        });
      } catch {
        console.log("Error fetching data");
      }
    }
  }, [page, user]);

  useEffect(() => {
    fetchInfo();
  }, [fetchInfo]);

  return (
    <>
      <AppContainer p={0}>
        <Grid
          gap={{ xs: "2rem", sm: "2rem", md: 0 }}
          container
          py={{ xs: 3, sm: 3, md: 13 }}
          sx={{
            padding: "0 20px",
          }}
        >
          <Grid
            sx={
              {
                display: "flex",
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: undefined,
                  lg: undefined,
                },
                height: "100%",
              } as any
            }
            item
            xs={12}
            sm={12}
            md={6}
          >
            <Card
              sx={{
                maxWidth: 404,
                width: "100%",
                boxShadow: `0 12px 14px 0 rgba(0,0,0,0.2)`,
                transition: "0.3s",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  maxHeight: "404px",
                }}
                image={Image6}
                alt="green iguana"
              />
              <Stack
                direction="column"
                spacing={1}
                margin="0 auto"
                padding="20px 32px"
                sx={{ backgroundColor: Colors.WHITE }}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  fontWeight={600}
                >
                  {user && CapitalizeFirstLetter(user["name"])}
                </Typography>
                {userSports && userSports.length > 0 && (
                  <Typography variant="body1">
                    {userSports.join(" & ")}
                  </Typography>
                )}
              </Stack>
            </Card>
          </Grid>
          <Grid
            sx={
              {
                maxWidth: { xs: "100%", sm: "100%", md: "100%" },
              } as any
            }
            item
            xs={12}
            sm={12}
            md={6}
          >
            <Stack direction="column" spacing={1}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="body1" fontWeight={600}>
                  Email Address
                </Typography>
                <Typography variant="body1">
                  {user && CapitalizeFirstLetter(user["email"])}
                </Typography>
                <img src={layer} width={13} height={12} alt="edit" />
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="body1" fontWeight={600}>
                  Phone Number
                </Typography>
                <Typography variant="body1">{user && user["phone"]}</Typography>
                <img src={layer} width={13} height={12} alt="edit" />
              </Stack>
            </Stack>
            <Stack direction="row" pt={5} pb={2}>
              <Typography
                gutterBottom
                variant="h6"
                color={Colors.BUTTON_COLOR}
                fontWeight={600}
              >
                Booking History
              </Typography>
              <img
                src={ball}
                width={53}
                height={53}
                alt="ball"
                style={{
                  position: "absolute",
                  transform: "rotate(165deg) translate(-135px, -18px)",
                }}
              />
            </Stack>
            <ListCard
              userDetails={filteredData}
              userName={user ? CapitalizeFirstLetter(user["name"]) : ""}
            />
            {filteredData.length > 0 && (
              <Pagination
                count={count}
                page={page}
                onChange={(event, val) => setPage(val)}
                sx={{ mt: "15px" }}
              />
            )}
          </Grid>
        </Grid>
      </AppContainer>

      <img src={RectangleImage} width="100%" height={50} alt="bottom" />
    </>
  );
}
