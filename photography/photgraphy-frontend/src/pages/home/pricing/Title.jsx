import Text from "../../../components/Text";
import { Box } from "@mui/material";
export function Title() {
  return (
    <Box>
      <Text
        color="#fff"
        ff="Helvetica Neue"
        fw="700"
        fs="36px"
        sx={{
         textAlign: 'center'
        }}
      >
        Our Pricing models
      </Text>
    </Box>
  );
}
