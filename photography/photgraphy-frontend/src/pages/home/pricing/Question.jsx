import { Box, Grid, Stack } from "@mui/material";
import Text from "../../../components/Text";
import Check from "../../../../public/svgs/Check";
import StarterIcon from "../../../../public/svgs/StarterIcon";
import ProfessionalIcon from "../../../../public/svgs/ProfessionalIcon";
import EnterpriseIcon from "../../../../public/svgs/EnterpriseIcon";
import Button from "../../../components/Button";
import SearchInput from "../../../components/Search";

export default function Question() {
  return (
    <Stack
      bgcolor="#0C0E0D"
      p="32px"
      borderRadius="16px"
      spacing={3}
      alignItems="center"
      justifyContent="space-between"
      direction={{ md: "row", xs: "column" }}
      border="1px solid #10281B"
    >
      <Box>
        <Text
          color="#fff"
          fw="600"
          fs="20px"
          sx={{
            mb: 3,
            textAlign: { md: "left", xs: "center" },
          }}
        >
          Still have questions?
        </Text>
        <Text
          color="#475467"
          fw="400"
          fs="16px"
          sx={{
            mb: 0,
            textAlign: { md: "left", xs: "center" },
          }}
        >
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </Text>
      </Box>
      <Button type="button" height="48px" width="134px" variant="contained">
        <span style={{ color: "#000" }}>Get in Touch</span>
      </Button>
    </Stack>
  );
}
