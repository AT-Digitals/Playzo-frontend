import * as React from "react";

import { FormHelperText, InputBase, Typography, styled } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import Box from "@mui/material/Box";
import Colors from "./Colors";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";

interface dropdownProps {
  label: string;
  options: { value: string; label: string }[];
  placeHolder?: string;
  value?: string;
  onChange?: (value: SelectChangeEvent<string>) => void;
  error?:boolean;
  helperText?:string;
}
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '.Mui-selected': {
backgroundColor: "white",
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: "white",
    border: '1px solid #ced4da',
    fontSize: 16,
    height: "23px",
    padding: "17px 10px",
    fontWeight: "400",
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Proxima Nova"',
      'sans-serif'
    ].join(','),
  },
}));
const CustomMenuItem = styled(MenuItem)(({ theme, selected }) => ({
  '&:hover': {
    backgroundColor: Colors.BUTTON_COLOR,
    fontSize: "16px",
    fontWeight: "400",
  },
 
  '&.placeholder:hover': {
    backgroundColor: Colors.BUTTON_COLOR,
  },
}));


export default function DropDownComponent({
  label,
  options,
  placeHolder,
  value,
  onChange,
  error=false,
  helperText,
}: dropdownProps) {
  return (
    <Box>
      <Typography
        color={Colors.BLACK}
        fontWeight={400}
        fontSize="16px"
        mb="10px"
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
          input={<BootstrapInput />}
          // defaultValue="one"
          sx={{ maxWidth: 700, borderRadius: "8px" }}
        >
          {placeHolder && <CustomMenuItem style={{
            backgroundColor: "white"
          }} value="" className={placeHolder ? 'placeholder' : ''}>{placeHolder}</CustomMenuItem>}
          {options.map((item) => (
            <CustomMenuItem  key={item.value} value={item.value}>
              {item.label}
            </CustomMenuItem>
          ))}
        </Select>
        {error ? <FormHelperText error>{helperText}</FormHelperText> : <></>}
      </FormControl>
    </Box>
  );
}
