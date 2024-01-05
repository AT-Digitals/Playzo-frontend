
import {
    Box,
    MenuItem,
    Select,
    SelectChangeEvent,
    SelectProps,
    styled,
    TypographyProps,
} from "@mui/material";
import FormControl, { FormControlProps } from "@mui/material/FormControl";
import { ReactNode } from "react";
import CustomLabel from "./CustomLabel";
import Colors from "./Colors";

const MenuProps = {
    PaperProps: {
        style: {
            color: Colors.PRIMARY,
            boxShadow: `0px 2px 4px ${Colors.SHADOW}`,
            borderRadius: 6,
            background: Colors.WHITE,
        },
    },
};

const StyledSelect = styled(Select)({
    color: Colors.ICON_COLOR,
    borderRadius: 28,
    fontSize: 16,
    fontWeight: 500,
    minWidth: 120,
    ".MuiOutlinedInput-notchedOutline": {
        border: `1px solid ${Colors.SELECT_BORDER}`,
    },
    ".MuiSelect-select": {
        display: "flex",
        textOverflow: "ellipsis",
        "&.MuiInputBase-inputAdornedStart": {
            paddingLeft: 0,
        },
    },
});

const StyledMenuItem = styled(MenuItem)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 3,
    margin: 3,
    whiteSpace: "initial",
    fontSize: 16,
    color: Colors.ICON_COLOR,
    "&.Mui-selected, &.Mui-selected:hover, &.Mui-selected.Mui-focusVisible": {
        background: Colors.PRIMARY_BUTTON,
        color: Colors.WHITE,
    },
});

export type DropdownValue = string | number | undefined;

export interface DropdownItem<T extends DropdownValue> {
    value: T;
    label: string;
    icon?: ReactNode;
}

interface InternalCustomDropdownProps<T extends DropdownValue> {
    label?: string;
    items: DropdownItem<T>[];
    value?: T;
    onChange?: (value: T) => void;
    selectProps?: SelectProps;
    labelProps?: TypographyProps;
}

export type CustomDropdownProps<T extends DropdownValue> =
    InternalCustomDropdownProps<T> & Omit<FormControlProps, "label" | "onChange">;

export default function CustomDropdown<T extends DropdownValue>({
    label,
    items,
    value,
    onChange,
    selectProps,
    labelProps,
    fullWidth = true,
    required = true,
    ...props
}: CustomDropdownProps<T>) {
    const handleChange = (event: SelectChangeEvent<unknown>) => {
        onChange?.(event.target.value as T);
    };

    return (
        <FormControl fullWidth={fullWidth} {...props}>
            <CustomLabel label={label} required={required} {...labelProps} />
            <StyledSelect
                value={value ?? ""}
                onChange={handleChange}
                MenuProps={MenuProps}
                {...selectProps}
            >
                {items.map(({ label, value, icon }) => (
                    <StyledMenuItem key={value ?? ""} value={value ?? ""}>
                        {label}
                        <Box component="span" ml={0.5}>
                            {icon}
                        </Box>
                    </StyledMenuItem>
                ))}
            </StyledSelect>
        </FormControl>
    );
}
