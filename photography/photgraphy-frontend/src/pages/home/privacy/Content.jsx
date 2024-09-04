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
          Privacy Policy
        </Text>

        {/* Ent title */}

        {/* content */}
        <Text
          color="#fff"
          fw={{ md: "400", xs: "400" }}
          fs={{ md: "18px", lg: "18px", sm: "16px", xs: "16px" }}
          sx={{
            textAlign: "left",
          }}
        >
          Introduction
        </Text>
        <Text
          color="#fff"
          fw={{ md: "600", xs: "600" }}
          fs={{ md: "18px", lg: "18px", sm: "16px", xs: "16px" }}
          sx={{
            textAlign: "left",
          }}
        >
          CertRiddle ("we", "us", or "our") is committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, and
          disclose your personal information when you use our website and
          Services.
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
          Information We Collect
        </Text>
        {/* end sub title */}

        <List sx={{ listStyleType: "disc", pl: 2 }}>
          {[
            `Personal Information: When you register for an account, use our Services, or contact us, we may collect personal information such as your name, email address, company name, and payment information.`,
            `Usage Information: We collect information about how you interact with our Services, such as your IP address, browser type, access times, and pages viewed.`,
            `Cookies and Tracking Technologies: We use cookies and similar tracking technologies to collect information about your activity on our website and to improve your user experience.`,
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
          How We Use Your Information
        </Text>
        {/* end sub title */}

        <List sx={{ listStyleType: "disc", pl: 2 }}>
          {[
            `Providing Services: We use your personal information to provide, operate, and improve our Services.`,
            `Communication: We may use your email address to send you updates, newsletters, or promotional materials, unless you opt out.`,
            `Compliance: We may use your information to comply with legal obligations, prevent fraud, and protect our legal rights.`,
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
          Sharing Your Information
        </Text>
        {/* end sub title */}

        <List sx={{ listStyleType: "disc", pl: 2 }}>
          {[
            `Service Providers: We may share your personal information with third-party service providers who assist us in operating our Services, such as payment processors and hosting providers.`,
            `Legal Compliance: We may disclose your personal information if required by law or in response to a valid legal request.`,
            `Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred to the acquiring entity.`,
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
          Data Security
        </Text>
        {/* end sub title */}

        <List sx={{ listStyleType: "disc", pl: 2 }}>
          {[
            `We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.`,
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
          Data Retention
        </Text>
        {/* end sub title */}

        <List sx={{ listStyleType: "disc", pl: 2 }}>
          {[
            `We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, or as required by law.`,
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
          Your Rights
        </Text>
        {/* end sub title */}

        <List sx={{ listStyleType: "disc", pl: 2 }}>
          {[
            `You have the right to access, correct, or delete your personal information, and to object to or restrict certain processing of your data. To exercise these rights, please contact us at [Your Contact Information].`,
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
          Changes to This Policy
        </Text>
        {/* end sub title */}

        <List sx={{ listStyleType: "disc", pl: 2 }}>
          {[
            `We may update this Privacy Policy from time to time. We will notify you of any significant changes and will indicate the date of the latest revision at the top of this policy.`,
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
          If you have questions or comments about this Privacy Policy, please
          contact us at:{" "}
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
