import Text from "../../../components/Text";
import { Box } from "@mui/material";
export function Title() {
  return (
    <Box>
      <Text
        color="#2DDB81"
        fw="600"
        fs="16px"
        sx={{
          mb: 3,
        }}
      >
        Our blog
      </Text>
      <Text
        color="#fff"
        ff="Helvetica Neue"
        fw="700"
        fs="36px"
        sx={{
          mb: 3,
        }}
      >
        Resources and insights
      </Text>
      <Text
        color="#9AE1BC"
        fw="400"
        fs="20px"
        sx={{
          mb: 3,
        }}
      >
        The latest industry news, interviews, technologies, and resources.
      </Text>
    </Box>
  );
}
