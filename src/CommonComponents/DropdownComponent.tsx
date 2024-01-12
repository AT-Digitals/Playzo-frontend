import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CustomLabel from "./CustomLabel";
import { Typography } from "@mui/material";
import { DropdownItem } from "./CustomDropdown";

interface dropdownProps {
    label: string;
    options: { value: string; label: string }[];
    placeHolder?: string;
    value?: string;
    onChange?: (value: SelectChangeEvent<string>) => void;
}

export default function DropDownComponent({
    label,
    options,
    placeHolder,
    value,
    onChange
}: dropdownProps) {
    return (
        <Box>
            <Typography fontWeight={700} fontSize="18px" mb="4px">
                {label}
            </Typography>
            <FormControl fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    onChange={onChange}
                >
                    {placeHolder && (
                        <MenuItem value="" disabled>
                            {placeHolder}
                        </MenuItem>
                    )}
                    {options.map((item) => (
                        <MenuItem key={item.value} value={item.value}>
                            {item.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
