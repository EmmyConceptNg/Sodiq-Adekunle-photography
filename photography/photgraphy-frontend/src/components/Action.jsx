import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "react-multi-carousel/lib/styles.css";
import Text from "./Text";
import Button from "./Button";


export default function Action() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  if (inView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1.5 },
    });
  }

  return (
    <Box sx={{ mx: { md: "200px", xs: "20px" }, mt: 5 }} ref={ref}>
      <Grid
        size={{ xs: 12, md: 4 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          bgcolor: "#121214",
          p: { md: "40px", xs: "20px" },
          border: "1px solid rgba(0,0,0,.05)",
          borderRadius: "20px",
          boxShadow:
            "#ffffff06 0 .362176px .651917px -1px inset,#ffffff09 0 3px 5.4px -2px inset",
          textAlign: "center",
        }}
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      >
        <Header />
      </Grid>
    </Box>
  );
}

function Header() {
  return (
    <Box mx="auto">
      <Text
        fs={{ md: "24px", xs: "12px" }}
        fw="900"
        ff="Helvetica Neue"
        color="#fff"
      >
        Are You Ready to kickstart your project with a touch of magic?
      </Text>
      <Text
        fs={{ md: "16px", xs: "12px" }}
        fw="400"
        color="#ccc"
        sx={{ mx: { md: 25, xs: 0 } }}
      >
        Reach out and let's make it happen ✨. I'm also available for full-time
        or Part-time opportunities to push the boundaries of design and deliver
        exceptional work.
      </Text>
      <Button sx={{ mt: 3 }} variant="contained">
        Let's Talk
      </Button>
    </Box>
  );
}
