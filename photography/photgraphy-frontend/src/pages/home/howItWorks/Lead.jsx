import { Box, Stack } from "@mui/material";
import Text from "../../../components/Text";

export default function Lead() {
  return (
    <Box
      sx={{
        
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Desktop */}
      <Box display={{ md: "block", xs: "none" }}  mt={15}>
        <Desktop />
      </Box>

      {/* Mobile */}
      <Box display={{ md: "none", xs: "block" }} mt={10}>
        <Mobile />
      </Box>
    </Box>
  );
}

function Mobile (){
  return (
    <Box sx={{}} width="100%">
      <Stack
        sx={{
          mx: { lg: "100px", md: "100px", xs: "0px" },
          border: "1px solid #10281B", bgcolor:"#051B0F4F",
          borderRadius: "16px",
        }}
      >
        <Stack
          spacing={2}
          p={7}
          justifyContent="center"
          alignItems="center"
        >
          {[
            {
              lead: "/svgs/lead1.svg",
              text: "Tell us about your Business",
              icon: "/svgs/Business.svg",
            },
            {
              lead: "/svgs/lead2.svg",
              text: "Generate a Roadmap",
              icon: "/svgs/Roadmap.svg",
            },
            {
              lead: "/svgs/lead3.svg",
              text: "Step by step Guide",
              icon: "/svgs/Guide.svg",
            },
          ].map(({ text, icon, lead }, index) => (
            <Box
              key={index}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box component="img" src={icon} />
              <Text
                color="#fff"
                fw="600"
                fs={{ md: "16px", lg: "16px", sm: "16px", xs: "16px" }}
                sx={{
                  textAlign: "center",
                }}
              >
                {text}
              </Text>
              <Box mt={2} component="img" src={lead} />
            </Box>
          ))}
        </Stack>
        <Box
          sx={{
            mx: { lg: "100px", md: "100px", xs: "0px" },
            display: "flex",
            justifyContent: "center",
          }}
        >
        </Box>
      </Stack>
    </Box>
  );
}
function Desktop (){
  return (
    <Box sx={{}} width="100%">
      <Stack
        sx={{
          py:5,
          px: { lg: "100px", md: "100px", xs: "0px" },
          border: "1px solid #10281B", bgcolor:"#051B0F4F",
          borderRadius: "16px",
        }}
      >
        <Stack
          
          py={7}
          
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {[
            {
              text: "Tell us about your Business",
              icon: "/svgs/Business.svg",
            },
            {
              text: "Generate a Roadmap",
              icon: "/svgs/Roadmap.svg",
            },
            {
              text: "Step by step Guide",
              icon: "/svgs/Guide.svg",
            },
          ].map(({ text, icon }, index) => (
            <Box
              key={index}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box component="img" src={icon} />
              <Text
                color="#fff"
                fw="600"
                fs={{ md: "16px", lg: "16px", sm: "16px", xs: "16px" }}
                sx={{
                  textAlign: "center",
                }}
              >
                {text}
              </Text>
            </Box>
          ))}
        </Stack>
        <Box
          sx={{
            pl: { lg: "30px", md: "30px", xs: "0px" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box component="img" src="/svgs/Num.svg" width="100%" />
        </Box>
      </Stack>
    </Box>
  );
}