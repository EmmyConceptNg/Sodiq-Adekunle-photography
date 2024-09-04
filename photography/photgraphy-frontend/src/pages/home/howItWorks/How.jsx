import { Box, Grid, Stack } from "@mui/material";
import Text from "../../../components/Text";

import InsightIcon from "../../../../public/svgs/InsightIcon";
import RoadmapIcon from "../../../../public/svgs/RoadmapIcon";
import ExportIcon from "../../../../public/svgs/ExportIcon";
import StepIcon from "../../../../public/svgs/StepIcon";

const results = [
  {
    icon: <InsightIcon />,
    question: "Quick & Insightful Questionnaire:",
    answer:
      "Begin your journey with a few simple questions about your startup. This isn't just any questionnaire – it's a conversation with purpose, designed to uncover the specific needs and challenges your business faces in securing certifications.",
  },
  {
    icon: <RoadmapIcon />,
    question: "Customised Certification Roadmap:",
    answer:
      "Based on your responses, CertRiddle creates a personalised certification roadmap. This roadmap outlines the certifications most relevant to your business, breaking down the complex process into manageable steps and actionable tasks.",
  },
  {
    icon: <StepIcon />,
    question: "Step-by-Step Guidance:",
    answer:
      "We don't just leave you with a plan and wish you luck. CertRiddle walks you through each step of your certification journey. From preparing documentation to implementing necessary security measures, we're with you every step of the way.",
  },
  {
    icon: <ExportIcon />,
    question: "Expert Advice & Resources:",
    answer:
      "Access a wealth of resources, including best practices, tips for passing audits with flying colours, and advice from security certification experts. Plus, our community forum offers support and insights from other startups navigating their certification journeys.",
  },
  
];

export default function How() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mb={4}
        mt={{ md: 15, xs: 2 }}
      >
        <Box
          bgcolor="#22242F"
          p="8px, 16px, 8px, 16px"
          height="32px"
          width="71px"
          borderRadius="99px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mb={3}
        >
          <Text
            color="#2DDB81"
            fw="500"
            fs="12px"
            sx={{
              mb: 0,
              textAlign: "left",
            }}
          >
            How?
          </Text>
        </Box>
        <Text
          color="#fff"
          fw="700"
          fs="40px"
          ff="Helvetica Neue"
          sx={{
            mb: 0,
            textAlign: "center",
          }}
        >
          How Does CertRiddle Work?
        </Text>
        <Box mx={{ md: 23, xs: 0 }}>
          <Text
            color="#fff"
            fw="400"
            fs="20px"
            sx={{
              mb: 5,
              textAlign: "center",
            }}
          >
            Imagine having a personalised roadmap that guides you through the
            entire certification process, tailored specifically to your
            startup's unique needs and industry standards. That's exactly what
            CertRiddle offers. Here's how it works:
          </Text>
        </Box>
      </Box>
      <Grid
        container
        spacing={{ md: 10, xs: 0 }}
        justifyContent={{ xs: "center", md: "flex-start" }}
      >
        {results.map(({ icon, question, answer }, index) => (
          <Grid item md={6} sm={12} lg={6} key={index}>
            <Stack spacing={2} direction="row" mb={5}>
              <Box
                display="flex"
                justifyContent={{ md: "flex-start", xs: "center" }}
              >
                {icon}
              </Box>
              <Box>
                <Text
                  color="#fff"
                  fw="600"
                  ff="Helvetica Neue"
                  fs="20px"
                  sx={{
                    mb: 0,
                    textAlign: "left",
                  }}
                >
                  {question}
                </Text>
                <Text
                  color="#fff"
                  fw="400"
                  fs="16px"
                  sx={{
                    mb: 0,
                    textAlign: "left",
                  }}
                >
                  {answer}
                </Text>
              </Box>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
