import { Box, Grid, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material";
import AppContainer from "../../CommonComponents/AppContainer";
import Colors from "../../CommonComponents/Colors";
import { Link } from "react-router-dom";
import GameIcon from "../../assets/doodl-5 1.png";
import styled from "@emotion/styled";
import CustomTextField from "../../CommonComponents/CustomTextField";
import CustomButton from "../../CommonComponents/CustomButton";
import bottomImage from "../../assets/Rectangle 679.png";
import CustomDropdown from "../../CommonComponents/CustomDropdown";
import DropDownComponent from "../../CommonComponents/DropdownComponent";
import { useState } from "react";

const DropDownData = [
    {
        value: "one",
        label: "one",
    },
    {
        value: "two",
        label: "two",
    },
    {
        value: "three",
        label: "three",
    },
];

const StyledImage = styled.img`
  position: absolute;
  transform: translate(130px, 30px);
 /* Set a default width or adjust as needed */

  @media (min-width: 300px) {
    /* Extra small devices (phones) */
    width: 130px;
    height: 115px;
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    width: 130px;
    height: 130px;
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    width: 130px;
    height: 130px;
  }

  @media (min-width: 1200px) {
    /* Large devices (large desktops) */
    width: 230px;
    height: 215px;
  }
`;

export default function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [type, setType] = useState('');
    const [message, setMessage] = useState('');

    const handleTypeChange = (event: SelectChangeEvent<string>) => {
        setType(event?.target.value)
    }

    const handleMessageChange = (event: any) => {
        setMessage(event?.target.value)
    }

    const onSubmit = (event: any) => {
        event?.preventDefault();

        const data = {
            name: name,
            email: email,
            type: type,
            message: message
        }
        console.log("data", data);
    }


    return (
        <>
            <AppContainer>
                <Grid container paddingTop={{xs: "50px", sm: "60px", md: "60px", lg: "120px"}} paddingBottom={{xs: "50px", sm: "60px", md: "60px", lg: "120px"}} columnGap={12.5}>
                    <Grid item xs={5}>
                        <Stack direction="column" spacing={2}>
                            <Typography
                               fontSize={{xs: "19px", sm: "19px", md: "19px", lg: "30px"}}
                                fontWeight={700}
                                color={Colors.BUTTON_COLOR}
                            >
                                For More Details <br />
                                Contact Us!
                            </Typography>
                            <Typography fontSize={{xs: "15px", sm: "15px", md: "16px", lg: "18px"}} width={{xs: "310px", sm: "310px", md: "310px", lg: "433px"}}>
                                Send our team a quick message with your question, and we’ll get
                                back to you as soon as possible. We’re pretty responsive and
                                will try to respond in a few hours 🙂
                            </Typography>
                            <Link
                                style={{
                                    textDecoration: "none",
                                    color: Colors.BUTTON_COLOR,
                                    fontWeight: 600,
                                    fontSize: "18px"
                                }}
                                to="mailto:orders@alterknitnewyork.com"
                            >
                                playzo.erode@gmail.com
                            </Link>
                        </Stack>
                        <Box>
                        <StyledImage
                            src={GameIcon}
                            alt="contact-us"
                        />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <form onSubmit={onSubmit}>
                            <Stack marginLeft={{xs: "-6px", sm: "-6px", md: "-6px", lg: "0px"}} marginTop={{xs: "180px", sm: "180px", md: "180px", lg: "0px"}} border={{xs: "1px solid grey", sm: "1px solid grey", md: "1px solid grey", lg: "none"}} width={{xs: "158%", sm: "158%", md: "158%", lg: "100%"}} borderRadius={{xs: "10px", sm: "10px", md: "10px", lg: "0px"}} padding={{xs: "21px 16px", sm: "21px 16px", md: "21px 16px", lg: "0px"}}
                                direction="column"
                                spacing={3}
                            >
                                <CustomTextField
                                    label="Name"
                                    required={false}
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={setName}
                                />
                                <CustomTextField
                                    label="Email"
                                    required={false}
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={setEmail}
                                />
                                <DropDownComponent
                                    label="What service are you interested in"
                                    options={DropDownData}
                                    placeHolder="Select project type"
                                    value={type}
                                    onChange={handleTypeChange}
                                />
                                <Box margin={"30px"}>
                                    <Typography
                                        marginBottom={"4px"}
                                        fontSize={"18px"}
                                        fontWeight={700}
                                    >
                                        Message
                                    </Typography>

                                    <TextField
                                        sx={{
                                            width: "100%",
                                            maxWidth: "785px",
                                            ".MuiOutlinedInput-input": {
                                                marginBottom: "130px",
                                            },
                                            ".MuiFormHelperText-root": {
                                                color: "red",
                                            },
                                            ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                                                border: "1px solid lightgray",
                                            },
                                        }}
                                        id="outlined-basic"
                                        value={message}
                                        onChange={handleMessageChange}
                                        name="passage"
                                        variant="outlined"
                                    />
                                </Box>
                                <CustomButton
                                    bgColor={Colors.BUTTON_COLOR}
                                    sx={{
                                        borderRadius: "5px",
                                        textTransform: "none",
                                        fontSize: "20px",
                                        fontWeight: 700,
                                        padding: "10px",
                                    }}
                                    type="submit"
                                >
                                    Submit
                                </CustomButton>
                            </Stack>
                        </form>
                    </Grid>
                </Grid>
            </AppContainer>
            <img src={bottomImage} alt="bottom" width="100%" height={50} />
        </>
    );
}
