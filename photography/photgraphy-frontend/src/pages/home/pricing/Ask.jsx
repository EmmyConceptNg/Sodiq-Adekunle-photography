import { Box, Grid, Stack } from "@mui/material";
import Text from "../../../components/Text";
import Check from "../../../../public/svgs/Check";
import StarterIcon from "../../../../public/svgs/StarterIcon";
import ProfessionalIcon from "../../../../public/svgs/ProfessionalIcon";
import EnterpriseIcon from "../../../../public/svgs/EnterpriseIcon";
import Button from "../../../components/Button";
import SearchInput from "../../../components/Search";

export default function Ask() {
  return (
    <Stack spacing={3} alignItems="center">
      <Text
        color="#fff"
        ff="Helvetica Neue"
        fw="700"
        fs="36px"
        sx={{
          mb: 3,
          textAlign: "center",
        }}
      >
        Ask Us Anything
      </Text>
      <Text
        color="#9AE1BC"
        fw="400"
        fs="20px"
        sx={{
          mb: 3,
          textAlign: "center",
        }}
      >
        Need something cleared up? Here are our most frequently asked questions.
      </Text>
      <SearchInput width="320px" placeholder="Search" />
    </Stack>
  );
}
