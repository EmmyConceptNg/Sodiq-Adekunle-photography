import { Box, Grid, Stack } from "@mui/material";
import Text from "../../../components/Text";
import Star from "../../../../public/svgs/Star";

const testimonials = {
  name: "Awesome Software",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

  author: {
    name: "John Snow",
  },
};
export default function Testimonials() {
  return (
    <Box mt={{ md : 15, xs :2 }}>
      <Text
        color="#fff"
        fw={{ md: "700", xs: "700" }}
        fs={{ md: "40px", xs: "40px" }}
        ff="Helvetica Neue"
        sx={{
          mb: 3,
          textAlign: "center",
        }}
      >
        Here's what our <span style={{ color: "#2DDB81" }}>customer</span> has
        to say
      </Text>
      <Grid container spacing={3}>
        {Array(3)
          .fill(testimonials)
          .map(({ name, content, author }, index) => (
            <Grid item md={4} key={index}>
              <Stack
                p={3}
                spacing={2}
                bgcolor="#0C0E0D"
                border="1px solid #10281B"
                borderRadius="10px"
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text
                    color="#fff"
                    fw={{ md: "600", xs: "600" }}
                    fs={{ md: "20px", xs: "20px" }}
                    sx={{
                      mb: 3,
                    }}
                  >
                    {name}
                  </Text>
                  <Star />
                </Stack>
                <Text
                  color="#fff"
                  fw={{ md: "400", xs: "400" }}
                  fs={{ md: "15px", xs: "15px" }}
                  sx={{
                    mb: 3,
                  }}
                >
                  {content}
                </Text>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box component="img" src="/svgs/avatar.svg" />
                  <Text
                    color="#fff"
                    fw={{ md: "600", xs: "600" }}
                    fs={{ md: "16px", xs: "16px" }}
                    sx={{
                      mb: 3,
                    }}
                  >
                    {author?.name}
                  </Text>
                </Stack>
              </Stack>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
