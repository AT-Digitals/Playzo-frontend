import { Box, TextField } from "@mui/material";
import Colors from "../../CommonComponents/Colors";
import CustomLabel from "../../CommonComponents/CustomLabel";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

interface textFieldProps {
    label: string;
    value: string;
    onChange: (event: any) => void;
    validationtext: boolean;
    type?: string;
    errorText: string;
}

export default function TextFieldComponent({
    label,
    value,
    onChange,
    validationtext,
    type,
    errorText,
}: textFieldProps) {
    return (
        <Box>
            <CustomLabel color={Colors.WHITE} mb={1}>
                {label}
            </CustomLabel>
            <TextField
                id="outlined-basic"
                variant="outlined"
                sx={{
                    backgroundColor: Colors.WHITE,
                    width: "100%",
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                    },
                }}
                placeholder="Enter your email"
                type={type}
                required
                value={value}
                onChange={onChange}
                error={!validationtext}
                InputProps={{
                    endAdornment: !validationtext && (
                        <ErrorOutlineIcon color="error" style={{ marginRight: "8px" }} />
                    ),
                }}
            />
            <span style={{ color: "#d32f2f", fontSize: "12px" }}>
                {!validationtext ? errorText : ""}
            </span>
        </Box>
    );
}
