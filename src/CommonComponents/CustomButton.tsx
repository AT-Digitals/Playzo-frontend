import { Button, ButtonProps, Typography, styled } from "@mui/material";

import Colors from "./Colors";

interface StyledButtonProps {
  textColor?: string;
  bgColor?: string;
}

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "bgColor" && prop !== "textColor",
})<StyledButtonProps>(({ bgColor, textColor, fullWidth }) => ({
  borderRadius: 38,
  color: textColor,
  fontSize: 16,
  width: fullWidth ? "100%" : "auto",
  minWidth: 150,
  "&.MuiButton-containedPrimary": {
    background: bgColor,
    border: "none",
  },
  "&.MuiButton-containedPrimary:hover": {
    background: Colors.BUTTON_COLOR,
    color: Colors.WHITE,
  },
  "&.MuiButton-outlinedPrimary": {
    boxShadow: "none",
    background: "none",
    border: `1.5px solid ${bgColor ?? Colors.PRIMARY_BUTTON}`,
  },
  "&.MuiButton-textPrimary": {
    boxShadow: "none",
  },
}));

export interface InternalCustomButtonProps {
  color?: string;
  bgColor?: string;
}

export type CustomButtonProps = Omit<ButtonProps, "color"> &
  InternalCustomButtonProps;

export default function CustomButton({
  color = Colors.WHITE,
  bgColor = Colors.PRIMARY_BUTTON,
  fullWidth = false,
  ...props
}: CustomButtonProps) {
  return (
    <StyledButton
      bgColor={bgColor}
      textColor={color}
      fullWidth={fullWidth}
      variant="contained"
      {...props}
    >
      <Typography
        fontStyle="normal"
        fontWeight="inherit"
        fontSize="inherit"
        component="div"
        fontFamily="inherit"
      >
        {props.children}
      </Typography>
    </StyledButton>
  );
}
