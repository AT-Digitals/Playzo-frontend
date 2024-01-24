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
                <Grid container paddingY={8} columnGap={12.5}>
                    <Grid item xs={5}>
                        <Stack direction="column" spacing={2}>
                            <Typography
                                variant="h4"
                                fontWeight={700}
                                color={Colors.BUTTON_COLOR}
                            >
                                For More Details <br />
                                Contact Us!
                            </Typography>
                            <Typography fontSize="18px" width="433px">
                                Send our team a quick message with your question, and we’ll get
                                back to you as soon as possible. We’re pretty responsive and
                                will try to respond in a few hours 🙂
                            </Typography>
                            <Link
                                style={{
                                    textDecoration: "none",
                                    color: Colors.BUTTON_COLOR,
                                }}
                                to="mailto:orders@alterknitnewyork.com"
                            >
                                playzo.erode@gmail.com
                            </Link>
                        </Stack>
                        <img
                            src={GameIcon}
                            width={230}
                            height={215}
                            alt="contact-us"
                            style={{
                                position: "absolute",
                                transform: `translate(157px, -40px)`,
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <form onSubmit={onSubmit}>
                            <Stack
                                direction="column"
                                spacing={3}
                                paddingY={6}
                                paddingX={5}
                                sx={{
                                    border: `1px solid ${Colors.BORDER}`,
                                    borderRadius: "12px",
                                }}
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
