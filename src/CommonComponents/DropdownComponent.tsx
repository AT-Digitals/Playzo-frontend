import * as React from "react";

import Select, { SelectChangeEvent } from "@mui/material/Select";

import Box from "@mui/material/Box";
import Colors from "./Colors";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";

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
  onChange,
}: dropdownProps) {
  return (
    <Box>
      <Typography
        color={Colors.BLACK}
        fontWeight={700}
        fontSize="18px"
        mb="4px"
      >
        {label}
      </Typography>
      <FormControl fullWidth>
        <Select
          displayEmpty
          placeholder={placeHolder}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={onChange}
          // defaultValue="one"
          sx={{ maxWidth: 700, borderRadius: "8px" }}
        >
          {placeHolder && <MenuItem value="">{placeHolder}</MenuItem>}
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
