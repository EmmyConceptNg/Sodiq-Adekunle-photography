import {
  Box,
  CardMedia,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Text from "../../../../components/Text";
import Button from "../../../../components/Button";
import Image from "../../../../components/Image";
import { useNavigate, useParams } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios, { getImageUrl } from "../../../../api/axios";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import Carousel from "react-multi-carousel";

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

export default function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  if (inView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    });
  }

  const [portfolios, setPortfolios] = useState([]);
  const [tableLoad, setTableLoad] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/portfolios/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setPortfolios(response.data.portfolio);
        setTableLoad(false);
      });
  }, [id]);

  return (
    <>
      {/* <Header portfolios={portfolios} /> */}
      <Box
        sx={{ mx: { md: "200px", xs: "15px" }, mt: 5 }}
        ref={ref}
      >
        <Text color="#fff" fs="24px" fw="500" sx={{ textAlign:'center', mb:3 }}>{portfolios[0]?.service?.name}</Text>
        <ProjectImages portfolios={portfolios} />
      </Box>
    </>
  );
}

// function Address({ portfolios }) {
//   const controls = useAnimation();
//   const [ref, inView] = useInView();

//   if (inView) {
//     controls.start({
//       opacity: 1,
//       y: 0,
//       transition: { duration: 1.5 },
//     });
//   }

//   return (
//     <Grid
//       size={{ xs: 12, md: 4 }}
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         bgcolor: "#121214",
//         p: { md: "40px", xs: "20px" },
//         border: "1px solid rgba(0,0,0,.05)",
//         borderRadius: "20px",
//         boxShadow:
//           "#ffffff06 0 .362176px .651917px -1px inset,#ffffff09 0 3px 5.4px -2px inset",
//         textAlign: "center",
//       }}
//       component={motion.div}
//       initial={{ opacity: 0, y: 50 }}
//       animate={controls}
//       ref={ref}
//     >
//       <Stack alignItems="flex-start" spacing={2} mb={3}>
//         <Box>
//           <Text
//             sx={{ textAlign: "left", my: 0 }}
//             fs="14px"
//             fw="500"
//             color="gray"
//           >
//             Name
//           </Text>
//           <Text
//             sx={{ textAlign: "left", my: 0 }}
//             fs="18px"
//             fw="600"
//             color="#fff"
//           >
//             {portfolio?.name}
//           </Text>
//         </Box>
//         <Box>
//           <Text
//             sx={{ textAlign: "left", my: 0 }}
//             fs="14px"
//             fw="500"
//             color="gray"
//           >
//             Date
//           </Text>
//           <Text
//             sx={{ textAlign: "left", my: 0 }}
//             fs="18px"
//             fw="600"
//             color="#fff"
//           >
//             {moment(portfolio?.date).format("MMMM Do YYYY")}
//           </Text>
//         </Box>
//       </Stack>
//     </Grid>
//   );
// }

function About({ portfolio }) {
  const navigate = useNavigate();
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
    
      <Stack spacing={5}>
        <Box width="100%"
          bgcolor="#121214"
          sx={{
            p: { md: "20px", xs: "20px" },
            border: "1px solid rgba(0,0,0,.05)",
            borderRadius: "20px",
            boxShadow:
              "#ffffff06 0 .362176px .651917px -1px inset,#ffffff09 0 3px 5.4px -2px inset",
          }}
        >
          <Text sx={{ textAlign : 'center' }}
            fs={{ md: "24px", xs: "18px" }}
            fw="900"
            ff="Helvetica Neue"
            color="#fff"
          >
            {portfolio?.name}
          </Text>
          <Text sx={{ textAlign : 'center' }}
            fs={{ md: "14px", xs: "14px" }}
            fw="500"
            color="gray"
           
          >
            {portfolio?.description}
          </Text>
        </Box>
      </Stack>
    
  );
}

// function Header({ portfolios }) {
//   const [randomImage, setRandomImage] = useState("");
//   useEffect(() => {
//     if (portfolio?.images?.length > 0) {
//       setRandomImage(
//         portfolio?.images[Math.floor(Math.random() * portfolio?.images?.length)]
//       );
//     }
//   }, [portfolio?.images]);

//   return (
//     <>
//       <ServiceHeader portfolio={portfolio} />
//       <CardMedia
//         component="img"
//         height="100%"
//         image={randomImage}
//         alt={portfolio?.name}
//       />
//     </>
//   );
// }

function ProjectImages({ portfolios }) {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleClickOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage("");
  };

  return (
    <>
      <Stack spacing={4}>
        {portfolios.map((portfolio) => (
          <>
            <About portfolio={portfolio} />
            <Carousel
              responsive={responsive}
              arrows={false}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
            >
              
                {portfolio?.images?.map((item) => (
              
                    <CardMedia key={item}
                      component="img"
                      height="500"
                      image={item}
                      alt="wedding"
                      onClick={() => handleClickOpen(item)}
                      sx={{ cursor: "pointer", mx:6 }}
                    />
              
                ))}
              
            </Carousel>
            <Dialog open={open} onClose={handleClose} maxWidth="lg">
              <DialogTitle>Image Preview</DialogTitle>
              <DialogContent>
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{ width: "100%", height: "auto" }}
                />
              </DialogContent>
            </Dialog>
          </>
        ))}
      </Stack>
    </>
  );
}

function ServiceHeader({ portfolio }) {
  return (
    <Box sx={{ my: { md: 10, xs: 3 } }}>
      <Text
        fs="40px"
        fw="900"
        ff="Helvetica Neue"
        color="#fff"
        sx={{ textAlign: "center" }}
      >
        {portfolio?.name}
      </Text>
    </Box>
  );
}
