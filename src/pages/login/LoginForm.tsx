import { Box, Divider, Grid, Link, Stack, TextField, Typography } from "@mui/material";
import Colors from "../../CommonComponents/Colors";
import CloseIcon from "@mui/icons-material/Close";
import CustomTextField from "../../CommonComponents/CustomTextField";
import CustomLabel from "../../CommonComponents/CustomLabel";
import CustomButton from "../../CommonComponents/CustomButton";

export default function LoginForm() {
    return (
        <Box margin="100px auto" width="100%" maxWidth={1200}>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                columnSpacing={5}
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                    paddingX={5}
                    paddingTop={{ xs: 0, md: 8 }}
                    bgcolor={{ xs: "none", md: Colors.BACKGROUND_COLOR }}
                    borderRadius={5}
                    paddingBottom={{ xs: 4, md: 8 }}
                    marginLeft={{ xs: 3, md: 0 }}
                >
                    <Stack direction="row" justifyContent="end">
                        <CloseIcon sx={{ color: Colors.WHITE, fontSize: "40px" }} />
                    </Stack>
                    <Stack direction="column" spacing={3} paddingX={6}>
                        <Box>
                            <CustomLabel color={Colors.WHITE} mb={1}>
                                Email
                            </CustomLabel>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                sx={{
                                    backgroundColor: Colors.WHITE,
                                    width: "100%",
                                    borderRadius: "8px",
                                }}
                                placeholder="Enter your email"
                            />
                        </Box>
                        <Box>
                            <CustomLabel color={Colors.WHITE} mb={1}>
                                Password
                            </CustomLabel>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                sx={{
                                    backgroundColor: Colors.WHITE,
                                    width: "100%",
                                    borderRadius: "8px",
                                }}
                                placeholder="Enter your password"
                            />
                        </Box>
                        <Link
                            sx={{
                                color: Colors.WHITE,
                                textDecoration: "none",
                                textAlign: "end",
                            }}
                        >
                            Forgot Password?
                        </Link>
                        <CustomButton
                            color={Colors.WHITE}
                            bgColor={Colors.BUTTON}
                            sx={{
                                borderRadius: "8px",
                                padding: "14px 14px",
                                textTransform: "none",
                                fontSize: "20px"
                            }}
                        >
                            Login
                        </CustomButton>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}
