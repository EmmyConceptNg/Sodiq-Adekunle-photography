import { Box, Divider, List, ListItem } from "@mui/material";
import Text from "../../../components/Text";

export function Content() {
  return (
    <>
      <Box mx={{ xs: 2, md: 10 }} mt={{ xs: 5, md: 5 }}>
        {/* Title */}
        <Text
          color="#fff"
          ff="Helvetica Neue"
          fw="700"
          fs={{ md: "36px", lg: "36px", sm: "36px", xs: "36px" }}
          sx={{
            textAlign: "left",
            mb: 5,
          }}
        >
          Terms of Use
        </Text>

        {/* Ent title */}

        {/* content */}
        <Text
          color="#fff"
          fw={{ md: "600", xs: "600" }}
          fs={{ md: "18px", lg: "18px", sm: "16px", xs: "16px" }}
          sx={{
            textAlign: "left",
          }}
        >
          Introduction
        </Text>
        <Text
          color="#fff"
          fw={{ md: "400", xs: "400" }}
          fs={{ md: "18px", lg: "18px", sm: "16px", xs: "16px" }}
          sx={{
            textAlign: "left",
          }}
        >
          Welcome to CertRiddle. These Terms of Use ("Terms")
          govern your use of our website, platform, and services ("Services").
          By accessing or using CertRiddle, you agree to comply with these
          Terms. If you do not agree, you may not use our Services.
        </Text>
        {/* end content */}
      </Box>
      <Divider sx={{ bgcolor: "#FFFFFF1A", my: 5 }} />
      <Box mx={{ xs: 2, md: 10 }}>
        {/* sub title */}
        <Text
          color="#fff"
          fw="700"
          fs={{ md: "24px", lg: "24px", sm: "24px", xs: "24px" }}
          sx={{
            textAlign: "left",
            mb: 3,
          }}
        >
          Use of Services
        </Text>
        {/* end sub title */}

        <List sx={{ listStyleType: "disc", pl: 2 }}>
          {[
            `Eligibility: You must be at least 18 years old to use our Services. By using CertRiddle, you represent that you meet this age requirement.`,
            `Account Registration: To access certain features of our Services, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.`,
            `License: CertRiddle grants you a limited, non-exclusive, non-transferable license to access and use the Services for your personal or internal business purposes.`,
            `Prohibited Uses: Use the Services for any illegal purpose or in violation of any laws or regulations.`,
            `Reverse engineer, decompile, or disassemble the Services.`,
            `Use the Services to transmit harmful, defamatory, obscene, or infringing content.`,
            `Interfere with or disrupt the integrity or performance of the Services.`,
          ].map((item, index) => (
            <ListItem
              key={index}
              sx={{
                display: "list-item",
                "::marker": {
                  color: "#2DDB81",
                  content: '"\\2022"',
                  fontSize: "20px",
                },
              }}
            >
              {item}
            </ListItem>
          ))}
        </List>
        {/* end content */}
      </Box>
      <Divider sx={{ bgcolor: "#FFFFFF1A", my: 5 }} />
      <Box mx={{ xs: 2, md: 10 }}>
        {/* sub title */}
        <Text
          color="#fff"
          fw="700"
          fs={{ md: "24px", lg: "24px", sm: "24px", xs: "24px" }}
          sx={{
            textAlign: "left",
            mb: 3,
          }}
        >
          User Content
        </Text>
        {/* end sub title */}

        <List sx={{ listStyleType: "disc", pl: 2 }}>
          {[
            `User Responsibilities: You are solely responsible for any content you upload, submit, or share through the Services ("User Content"). You agree not to upload or share any content that violates these Terms or any applicable law.`,
            `License to User Content: By submitting User Content, you grant CertRiddle a worldwide, royalty-free, non-exclusive license to use, distribute, reproduce, modify, adapt, and publicly display your User Content for the purposes of providing and promoting the Services.`,
          ].map((item, index) => (
            <ListItem
              key={index}
              sx={{
                display: "list-item",
                "::marker": {
                  color: "#2DDB81",
                  content: '"\\2022"',
                  fontSize: "20px",
                },
              }}
            >
              {item}
            </ListItem>
          ))}
        </List>
        {/* end content */}
      </Box>
      <Divider sx={{ bgcolor: "#FFFFFF1A", my: 5 }} />
      <Box mx={{ xs: 2, md: 10 }}>
        {/* sub title */}
        <Text
          color="#fff"
          fw="700"
          fs={{ md: "24px", lg: "24px", sm: "24px", xs: "24px" }}
          sx={{
            textAlign: "left",
            mb: 3,
          }}
        >
          Privacy
        </Text>
        {/* end sub title */}

        <List sx={{ listStyleType: "disc", pl: 2 }}>
          {[
            `Privacy Policy: Your use of the Services is also governed by our Privacy Policy.`,
          ].map((item, index) => (
            <ListItem
              key={index}
              sx={{
                display: "list-item",
                "::marker": {
                  color: "#2DDB81",
                  content: '"\\2022"',
                  fontSize: "20px",
                },
              }}
            >
              {item}
            </ListItem>
          ))}
        </List>
        {/* end content */}
      </Box>
      <Divider sx={{ bgcolor: "#FFFFFF1A", my: 5 }} />
      <Box mx={{ xs: 2, md: 10 }}>
        {/* sub title */}
        <Text
          color="#fff"
          fw="700"
          fs={{ md: "24px", lg: "24px", sm: "24px", xs: "24px" }}
          sx={{
            textAlign: "left",
            mb: 3,
          }}
        >
          Termination
        </Text>
        {/* end sub title */}

        <List sx={{ listStyleType: "disc", pl: 2 }}>
          {[
            `Termination by You: You may terminate your account at any time by following the instructions on the CertRiddle platform.`,
            `Termination by Us: We may terminate or suspend your account or access to the Services at any time if we believe you have violated these Terms or any applicable laws.`,
          ].map((item, index) => (
            <ListItem
              key={index}
              sx={{
                display: "list-item",
                "::marker": {
                  color: "#2DDB81",
                  content: '"\\2022"',
                  fontSize: "20px",
                },
              }}
            >
              {item}
            </ListItem>
          ))}
        </List>
        {/* end content */}
      </Box>
      <Divider sx={{ bgcolor: "#FFFFFF1A", my: 5 }} />
      <Box mx={{ xs: 2, md: 10 }}>
        {/* sub title */}
        <Text
          color="#fff"
          fw="700"
          fs={{ md: "24px", lg: "24px", sm: "24px", xs: "24px" }}
          sx={{
            textAlign: "left",
            mb: 3,
          }}
        >
          Disclaimers and Limitations of Liability
        </Text>
        {/* end sub title */}

        <List sx={{ listStyleType: "disc", pl: 2 }}>
          {[
            `Disclaimer: CertRiddle provides the Services "as is" and without any warranty or condition, express or implied. We do not guarantee the accuracy, completeness, or usefulness of the Services.`,
            `Limitation of Liability: To the maximum extent permitted by law, CertRiddle shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Services.`,
            ` Governing Law: These Terms shall be governed by and construed in accordance with the laws of the UK, without regard to its conflict of law principles.`,
            `  Changes to Terms: We reserve the right to modify these Terms at any time. We will notify you of any significant changes, and your continued use of the Services after such changes constitutes your acceptance of the new Terms.`,
          ].map((item, index) => (
            <ListItem
              key={index}
              sx={{
                display: "list-item",
                "::marker": {
                  color: "#2DDB81",
                  content: '"\\2022"',
                  fontSize: "20px",
                },
              }}
            >
              {item}
            </ListItem>
          ))}
        </List>
        {/* end content */}
      </Box>
      <Divider sx={{ bgcolor: "#FFFFFF1A", my: 5 }} />
      <Box mx={{ xs: 2, md: 10 }}>
        {/* sub title */}
        <Text
          color="#fff"
          fw="700"
          fs={{ md: "24px", lg: "24px", sm: "24px", xs: "24px" }}
          sx={{
            textAlign: "left",
            mb: 3,
          }}
        >
          Contact Us
        </Text>
        {/* end sub title */}
        {/* content */}
        <Text
          color="#fff"
          fw={{ md: "400", xs: "400" }}
          fs={{ md: "18px", lg: "18px", sm: "16px", xs: "16px" }}
          sx={{
            textAlign: "left",
          }}
        >
          If you have any questions about these Terms, please contact us at 
          <span style={{ color: "#2DDB81", fontWeight: "500" }}>
            info@certriddle.com
          </span>
        </Text>
        {/* end content */}
      </Box>
      <Divider sx={{ bgcolor: "#FFFFFF1A", my: 5 }} />
    </>
  );
}
