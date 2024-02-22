import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import Colors from "../../CommonComponents/Colors";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import bg from "./carrersbg.jpg";

export default function CareersPageNew() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Box>
      <Box position="relative">
        <img
          src={bg}
          alt="Low OpacitImage"
          style={{
            width: "100%",
            height: "100%",
            opacity: 0.6,
            maxHeight: 800,
            objectFit: "cover",
            display: imageLoaded ? "block" : "none",
          }}
          onLoad={handleImageLoad}
        />
        {!imageLoaded && (
          <div
            style={{
              width: "100%",
              height: "100vh",
              background: "white", // You can change the background color
            }}
          >
            {/* You can add a loading spinner or any other loading indicator here */}
          </div>
        )}
        {imageLoaded && (
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Typography
              color={"Black"}
              fontStyle={"italic"}
              fontSize={"82px"}
              fontWeight={"bold"}
              whiteSpace={"nowrap"}
              gutterBottom
            >
              Welcome to Our Careers Page
            </Typography>
            <Typography color={"Black"} fontSize={"32px"} paragraph>
              Explore exciting opportunities to join our talented team and make
              a difference.
            </Typography>

            <a href={"mailto:playzo.erode@gmail.com"}>
              {" "}
              <Button
                variant="outlined"
                sx={{
                  padding: "8px 20px",
                  textTransform: "none",
                  fontSize: "16px",
                  minWidth: "150px",
                  fontWeight: "400",
                  border: "2px solid #15B5FC",
                  borderRadius: "30px",
                  letterSpacing: "1.6px",
                  background: Colors.BUTTON_COLOR,
                  color: Colors.WHITE,
                  ":hover": {
                    background: Colors.WHITE,
                    color: Colors.BUTTON_COLOR,
                    border: "1px solid #15B5FC",
                  },
                }}
                startIcon={<MailOutlineIcon />}
              >
                Email Us
              </Button>{" "}
            </a>
          </Box>
        )}
      </Box>
    </Box>
  );
}
