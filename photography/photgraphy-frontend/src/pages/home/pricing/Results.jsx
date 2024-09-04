import { Box, Grid, Stack } from "@mui/material";
import Text from "../../../components/Text";
import HeartIcon from "../../../../public/svgs/HeartIcon";
import TransferIcon from "../../../../public/svgs/TransferIcon";
import CancelIcon from "../../../../public/svgs/CancelIcon";
import InvoiceIcon from "../../../../public/svgs/InvoiceIcon";
import Billing from "../../../../public/svgs/Billing";
import MessageIcon from "../../../../public/svgs/MessageIcon";



const results = [
  {
    icon: <HeartIcon />,
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 14 days. Our friendly team will work with you to get you up and running as soon as possible.",
  },
  {
    icon: <TransferIcon />,
    question: "Can I change my plan later?",
    answer:
      "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.",
  },
  {
    icon: <CancelIcon />,
    question: "What is your cancellation policy?",
    answer:
      "We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.",
  },
  {
    icon: <InvoiceIcon />,
    question: "Can other info be added to an invoice?",
    answer:
      "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name.",
  },
  {
    icon: <Billing />,
    question: "How does billing work?",
    answer:
      "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
  },
  {
    icon: <MessageIcon />,
    question: "How do I change my account email?",
    answer:
      "You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.",
  },
];



export default function Results() {
  return (
    <Grid
      container
      spacing={{ md:4, xs : 0 }}
      justifyContent={{ xs: "center", md: "flex-start" }}
    >
      {results.map(({ icon, question, answer }, index) => (
        <Grid item md={4} sm={12} lg={4} key={index}>
          <Stack spacing={2} mb={5}>
            <Box
              display="flex"
              justifyContent={{ md: "flex-start", xs: "center" }}
            >
              {icon}
            </Box>
            <Text
              color="#fff"
              fw="600"
              fs="20px"
              sx={{
                mb: 0,
                textAlign: "left",
              }}
            >
              {question}
            </Text>
            <Text
              color="#9AE1BC"
              fw="400"
              fs="16px"
              sx={{
                mb: 0,
                textAlign: "left",
              }}
            >
              {answer}
            </Text>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}
