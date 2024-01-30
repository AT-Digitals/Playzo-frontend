import { Stack, StackProps } from "@mui/material";

export default function AppContainer(props: StackProps) {
  return (
    <Stack
      direction="column"
      spacing={4}
      width="100%"
      alignItems="stretch"
      maxWidth={1280}
      mx="auto"
      px={4}
      {...props}
    />
  );
}
