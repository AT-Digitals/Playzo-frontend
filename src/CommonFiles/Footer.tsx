import { Grid, Stack, Typography } from "@mui/material";
import logo from "../assets/logo.png";
import Colors from "../CommonComponents/Colors";

export default function Footer() {
    return (
        <Grid container sx={{ backgroundColor: Colors.BLACK }}>
            <Grid item xs={4}>
                <Stack direction="column" spacing={3} >
                    <img src={logo} width={200} height={50} />
                    <Typography>Lorem ipsum dolor sit amet consectetur dolol drakgonil adipiscing elit aliquam mauris</Typography>
                </Stack>
            </Grid>
            <Grid item xs={8}>
            </Grid>
        </Grid>
    )
}