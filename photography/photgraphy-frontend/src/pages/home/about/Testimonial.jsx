import { Avatar, Box, Stack } from "@mui/material";
import Text from "../../../components/Text";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function Testimonial() {
   const controls = useAnimation();
   const [ref, inView] = useInView();

   if (inView) {
     controls.start({
       opacity: 1,
       y: 0,
       transition: { duration: 0.5 },
     });
   }
  return (
    <Box
      bgcolor="#121214"
      sx={{
        p: { md: "40px", xs: "20px" },
        border: "1px solid rgba(0,0,0,.05)",
        borderRadius: "20px",
        boxShadow:
          "#ffffff06 0 .362176px .651917px -1px inset,#ffffff09 0 3px 5.4px -2px inset",
        mx: { md: "200px", xs: "20px" },
        mt: 5,
      }}
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      ref={ref}
    >
      <Text
        sx={{ textAlign: "center" }}
        fs={{ md: "32px", xs: "24px" }}
        fw="900"
        ff="Helvetica Neue"
        color="#fff"
      >
        Testimonial
      </Text>
      <Text sx={{ textAlign: "center" }} fs="16px" fw="400" color="gray">
        what our clients has to say
      </Text>
      <Box mt={3}>
        <Carousel
          responsive={responsive}
          arrows={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
        >
          {Array(10)
            .fill()
            .map((item, index) => (
              <Box
                key={item}
                width="87%"
                sx={{
                  p: { md: "20px", xs: "10px" },
                  border: "1px solid gray",
                  "&:hover": { border: "1px solid #2ddb81" },
                  borderRadius: "20px",
                  boxShadow:
                    "#ffffff06 0 .362176px .651917px -1px inset,#ffffff09 0 3px 5.4px -2px inset",
                }}
              >
                <Avatar />
                <Text
                  sx={{ textAlign: "left", my: 2 }}
                  fs="16px"
                  fw="400"
                  color="gray"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia ad magnam animi ipsa natus modi odio quod molestiae
                  facere. Maiores nihil temporibus, deserunt eius perspiciatis
                  laudantium modi quasi cumque autem!
                </Text>
                <Text
                  sx={{ textAlign: "left" }}
                  fs="24px"
                  fw="700"
                  color="#fff"
                >
                  John Doe
                </Text>
                <Text
                  sx={{ textAlign: "left" }}
                  fs="12px"
                  fw="400"
                  color="gray"
                >
                  CEO & Founder XYZ
                </Text>
              </Box>
            ))}
        </Carousel>
      </Box>
    </Box>
  );
}