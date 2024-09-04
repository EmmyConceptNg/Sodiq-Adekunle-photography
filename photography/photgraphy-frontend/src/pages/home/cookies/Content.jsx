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
          Cookies Policy
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
          CertRiddle ("we", "us", or "our") uses cookies and similar tracking
          technologies on our website to enhance your user experience, analyze
          site traffic, and understand where our visitors are coming from.
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
          What Are Cookies?
        </Text>
        {/* end sub title */}

        <List sx={{ listStyleType: "disc", pl: 2 }}>
          {[
            `Cookies are small text files that are stored on your device when you visit a website. They allow the website to remember your actions and preferences over a period of time, so you don’t have to re-enter them whenever you come back to the site or browse from one page to another.`,
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
          Types of Cookies We Use
        </Text>
        {/* end sub title */}

        <List sx={{ listStyleType: "disc", pl: 2 }}>
          {[
            ` Essential Cookies: These cookies are necessary for the basic functionality of the website. Without these cookies, certain parts of the website would not work properly. For example, essential cookies help you log in, navigate between pages, and access secure areas of the site.`,
            `Performance and Analytics Cookies: These cookies collect information about how visitors use our website, such as which pages are most frequently visited, and if visitors get error messages from web pages. These cookies do not collect information that identifies a visitor directly. All information collected by these cookies is aggregated and therefore anonymous. We use this information to improve how our website works.`,
            `Functionality Cookies: Functionality cookies allow our website to remember choices you make (such as your username, language, or the region you are in) and provide enhanced, more personal features. These cookies can also be used to remember changes you have made to text size, fonts, and other parts of web pages that you can customize.`,
            ` Targeting or Advertising Cookies: These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and to help measure the effectiveness of advertising campaigns. They are usually placed by advertising networks with the website operator’s permission. They remember that you have visited a website and this information is shared with other organizations such as advertisers.`,
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
          How We Use Cookies
        </Text>
        {/* end sub title */}

        <List sx={{ listStyleType: "disc", pl: 2 }}>
          {[
            `Enhance your user experience by remembering your preferences and settings.`,
            `Analyze website traffic and performance to improve our Services.`,
            ` Deliver targeted advertising that is more relevant to you.`,
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
          Managing Your Cookies
        </Text>
        <Text
          color="#fff"
          fw="400"
          fs={{ md: "20px", lg: "20px", sm: "20px", xs: "20px" }}
          sx={{
            textAlign: "left",
            mb: 3,
          }}
        >
          You can control and manage cookies in various ways. Most browsers
          allow you to refuse to accept cookies and to delete cookies. The
          methods for doing so vary from browser to browser, and from version to
          version. You can obtain up-to-date information about blocking and
          deleting cookies via these links:
        </Text>

        {/* end sub title */}

        <List sx={{ listStyleType: "disc", pl: 2 }}>
          {[
            ` Google Chrome`,
            `Firefox`,
            `Safari`,
            `Internet Explorer or Edge`,
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

        <Text
          color="#fff"
          fw="400"
          fs={{ md: "20px", lg: "20px", sm: "20px", xs: "20px" }}
          sx={{
            textAlign: "left",
            mb: 3,
          }}
        >
          Please note that if you block cookies, you may not be able to use all
          the features of our website.
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
          Third-Party Cookies
        </Text>
        {/* end sub title */}

        <List sx={{ listStyleType: "disc", pl: 2 }}>
          {[
            `In some cases, we may use third-party cookies provided by trusted partners. These cookies help us analyze how you use the site and how we can improve your experience. Third-party cookies may be used to track your activity on our website, such as when you interact with embedded content (e.g., videos) or advertisements.`,
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
            `We may update our Cookies Policy from time to time. We will notify you of any significant changes by updating the date of the policy or through direct communication.`,
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
