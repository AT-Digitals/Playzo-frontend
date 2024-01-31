import { Box, Stack, Typography } from "@mui/material";

import AppContainer from "../../CommonComponents/AppContainer";
import CareersImage from "../../assets/careers-images.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

const CareersTexts = [
  {
    title: "Marketing Manager    ",
    discription:
      "As a Customer Experience Representative, you'll provide top-notch service, assisting customers with inquiries and ensuring a positive interaction at every touchpoint. Join us in delivering an unparalleled recreational experience!    ",
  },
  {
    title: "Customer Experience Represtative    ",
    discription:
      "As a Customer Experience Representative, you'll provide top-notch service, assisting customers with inquiries and ensuring a positive interaction at every touchpoint. Join us in delivering an unparalleled recreational experience!    ",
  },
];

export default function CareersPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (index: any) => {
    console.log("Clicked index:", index);
    console.log("Current openIndex:", openIndex);

    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));

    console.log("Updated openIndex:", openIndex);
  };
  return (
    <AppContainer p={0} margin={"0 auto"} mb={"3rem"} mt={"3rem"}>
      <Stack
        p={"0 20px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDirection={{ xs: "column", sm: "column", md: "row" }}
        maxWidth={1400}
        margin={"0 auto"}
        direction={"row"}
        spacing={5}
      >
        <Box width={"100%"} height={"100%"} maxWidth={500}>
          <Typography fontSize={"40px"} color={"#15B5FC"}>
            Join Our Team
          </Typography>
          <Typography fontSize={"17px"}>
            Join us for an exciting career in a dynamic and inclusive
            environment. Discover opportunities that match your skills and
            aspirations in a workplace passionate about sports and recreation.
            Explore our openings, and let's chat over a cup of coffee to discuss
            your potential role at Playzo33!
          </Typography>
          <Box display={"flex"} justifyContent={"center"} ml={"10rem"}>
            <Box
              display={"flex"}
              justifyContent={"end"}
              style={{
                right: "70%",
              }}
              component="img"
              src={CareersImage}
            />
          </Box>
        </Box>
        <Stack
          maxWidth={580}
          width={"100%"}
          height={"100%"}
          spacing={3}
          ml={"0px !important"}
          alignItems={"flex-start"}
        >
          {CareersTexts.map((index, i) => (
            <Stack
              key={index.title}
              width={"90%"}
              spacing={2}
              maxWidth={580}
              border={"1px solid black"}
              padding={3}
              borderRadius={"8px"}
            >
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography fontWeight={"bold"} fontSize={"18px"}>
                  {index.title}{" "}
                </Typography>
                {openIndex === i ? (
                  <KeyboardArrowUpIcon onClick={() => toggleDetails(i)} />
                ) : (
                  <KeyboardArrowDownIcon onClick={() => toggleDetails(i)} />
                )}
              </Box>
              {openIndex === i && (
                <>
                  <Typography fontSize={"16px"}>{index.discription}</Typography>
                  <Box>
                    <Typography fontSize={"18px"} fontWeight={"bold"}>
                      Qualifications:
                    </Typography>
                    <ul>
                      <li>
                        Strong customer service background with proven
                        experience in issue resolution.
                      </li>
                      <li>
                        Excellent communication skills and ability to adapt in a
                        fast-paced environment.
                      </li>
                    </ul>
                    <Typography fontWeight={"bold"} fontSize={"18px"}>
                      Apply:{" "}
                      <span
                        style={{
                          fontWeight: 100,
                          fontSize: "15px",
                        }}
                      >
                        Submit your application to [jobs@playzo.com] with the
                        subject line: "Application for [Job Title].”
                      </span>
                    </Typography>
                    <Typography fontWeight={"bold"} fontSize={"18px"}>
                      Deadline:
                      <span
                        style={{
                          fontWeight: 100,
                          fontSize: "15px",
                          marginLeft: "0.2rem",
                        }}
                      >
                        Feb 06, 2024
                      </span>
                    </Typography>
                  </Box>
                </>
              )}
            </Stack>
          ))}
        </Stack>
      </Stack>
    </AppContainer>
  );
}
