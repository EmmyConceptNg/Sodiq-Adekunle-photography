import { Box, Grid, Stack } from "@mui/material";
import Text from "../../../components/Text";
import Check from "../../../../public/svgs/Check";
import StarterIcon from "../../../../public/svgs/StarterIcon";
import ProfessionalIcon from "../../../../public/svgs/ProfessionalIcon";
import EnterpriseIcon from "../../../../public/svgs/EnterpriseIcon";
import Button from "../../../components/Button";

export default function PricesCard({free=true}) {
  return (
    <Stack spacing={15}>
      <Grid
        container
        spacing={{ md: 5, xs: 0 }}
        alignItems="flex-start"
        alignSelf="center"
      >
        {[
          {
            name: "Starter",
            icon: <StarterIcon />,
            currency: "$",
            amount: "29",
            duration: "month",
            description:
              "Designed for startups that are beginning to prioritise security certifications but need an affordable entry point. This plan provides enough guidance and resources to start the certification process",
            items: [
              "Full access to the personalized questionnaire",
              "Customised certification roadmap",
              "Access to standard compliance checklists and templates",
              "Email support",
            ],
          },
          {
            name: "Professional",
            icon: <ProfessionalIcon />,
            currency: "$",
            amount: "79",
            duration: "month",
            description:
              "Tailored for startups and SMBs that are actively working towards certification and can benefit from more direct expert guidance and advanced tools to streamline their process.",
            items: [
              "All Starter Plan features",
              "Unlimited access to expert consultations (via chat)",
              "Advanced compliance management tools (tracking, reminders, etc.)",
              "Integration capabilities with existing tools (e.g., project management software)",
              "Priority email and chat support",
            ],
          },
          {
            name: "Enterprise",
            icon: <EnterpriseIcon />,
            currency: "$",
            amount: "Custom",
            description:
              "Suitable for larger startups or SMBs that require a comprehensive, customised approach to security certifications. Pricing is customised based on the specific services and level of support needed.",
            items: [
              "All Professional Plan features",
              "Dedicated account manager",
              "On-demand expert services and bespoke compliance solutions",
              "Custom integration support",
              "24/7 premium support",
            ],
          },
        ].map((plan, index) => (
          <Grid key={index} item xs={12} md={6} xl={4} lg={4}>
            <Box
              width="100%"
              bgcolor="#13131799"
              borderRadius="16px"
              border="1px solid #10281B"
              pb={5}
              mt={5}
            >
              <Stack
                spacing={7}
                justifyContent="flex-end"
                alignItems="center"
                sx={{ padding: "35px 32px 0 32px" }}
              >
                <Stack spacing={2}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {plan.icon}
                  </Box>
                  <Text
                    color="#fff"
                    ff="Helvetica Neue"
                    fw="700"
                    fs="32px"
                    sx={{
                      mb: 3,
                      textAlign: "center",
                    }}
                  >
                    {plan.name}
                  </Text>
                  <Text
                    color="#fff"
                    fw="700"
                    fs="32px"
                    sx={{
                      mb: 3,
                      textAlign: "center",
                    }}
                  >
                    {plan.currency}
                    {plan.amount}
                    {plan?.duration && (
                      <span style={{ fontSize: "20px" }}>
                        /{plan?.duration}
                      </span>
                    )}
                  </Text>
                  <Text
                    color="#fff"
                    fw="400"
                    fs="16px"
                    sx={{
                      mb: 3,
                      textAlign: "center",
                    }}
                  >
                    {plan.description}
                  </Text>
                </Stack>
                <Stack spacing={2}>
                  {plan?.items?.map((_item, _index) => (
                    <Box
                      display="flex"
                      gap={2}
                      justifyContent="flex-start"
                      key={_index}
                    >
                      <Box>
                        <Check />
                      </Box>
                      <Text
                        color="#fff"
                        fw="400"
                        fs="16px"
                        sx={{
                          textAlign: "start",
                        }}
                      >
                        {_item}
                      </Text>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>

      {free && (
        <Box
          bgcolor="#051B0F4F"
          borderRadius="16px"
          height={{ md: "362px", xs: "450px" }}
          border="1px solid #10281B"
          width="100%"
          display="flex"
          alignSelf="center"
          sx={{
            background: `
      url('/svgs/TheBg1.svg') top left no-repeat,
      url('/svgs/TheBg2.svg') bottom right no-repeat,
      #051B0F4F
    `,
          }}
        >
          <Stack
            width="100%"
            sx={{ flexGrow: 1 }}
            spacing={2}
            bgcolor="#051B0F4F"
            alignItems="center"
            justifyContent="space-between"
            py={4}
            px={{ md: 20, xs: 0 }}
          >
            <Text
              color="#2DDB81"
              fw="700"
              fs="14px"
              sx={{
                textAlign: "center",
              }}
            >
              Subscribe for FREE
            </Text>
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
              <span style={{ color: "#2DDB81" }}>14 days</span> of free trial
            </Text>
            <Text
              color="#fff"
              fw="400"
              fs="16px"
              sx={{
                textAlign: "center",
              }}
            >
              Ready to demystify the world of security certifications and
              compliance? Join CertRiddle today and start your journey toward
              security success. With CertRiddle, you're not just getting
              certified; you're securing the future of your business growth with
              confidence.
            </Text>

            <Button
              type="button"
              height="48px"
              width="130px"
              variant="contained"
            >
              <span style={{ color: "#000" }}>Try for free</span>
            </Button>
          </Stack>
        </Box>
      )}
    </Stack>
  );
}
