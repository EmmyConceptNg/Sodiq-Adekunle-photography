import { Box, Stack } from "@mui/material";
import Text from "../../../components/Text";
import Lead from "./Lead";

export default function Roadmap() {
  return (<>
  
      <Box mx={{ md: "200px", xs: 2 }}>
        <Text
          color="#fff"
          ff="Helvetica Neue"
          fw="700"
          fs={{ md: "32px", lg: "32px", sm: "30px", xs: "20px" }}
          sx={{
            textAlign: {
              lg: "center",
              md: "center",
              sm: "center",
              xs: "center",
            },
          }}
        >
          The <span style={{ color: "#2DDB81" }}>Roadmap</span>
        </Text>
      </Box>
      <Lead />
    </>
  );
}
