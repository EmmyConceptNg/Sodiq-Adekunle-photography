import { Box, Stack } from "@mui/material";

import Text from "../Text";
import { Link } from "react-router-dom";

export default function Footer({logo=true, }) {
  return (
    <>
        <Desktop logo={logo} />
    </>
  );
}

 function Desktop({logo}){
 return (
   <Box
     sx={{
       mx: { md: logo ? 10 : 3, xs: 2 },
       pb: logo ? 1 : 1,
       pt: logo && 5,
     }}
   >
     <Stack
       direction={{ xs: "column", md: "row" }}
       sx={{ mt: 4 }}
       justifyContent={{ md: "space-between", xs: "center" }}
       alignItems="center"
     >
       {logo && (
         <Box
           display="flex"
           justifyContent={{ md: "flex-start", xs: "center" }}
         >
           {/* <Box component="img" src="/logo/Logo.svg" sx={{ height: "72px" }} /> */}
           <Text
             color="#fff"
             fw="400"
             fs={{ md: "24px", xs: "15px" }}
             ff="Sacramento, cursive"
           >
             Sodiq Adekunle photography
           </Text>
         </Box>
       )}
       <Text
         color="#9AE1BC"
         fw="400"
         fs={{ md: "16px", lg: "16px", sm: "12px", xs: "10px" }}
       >
         © 2024. All rights reserved.
       </Text>
       <Stack
         justifyContent={{ md: "flex-start", xs: "center" }}
         spacing={{ md: 5, xs: 2 }}
         direction="row"
         alignItems={{ md: "flex-start", xs: "center" }}
       >
         {[
           {
             to: "https://www.linkedin.com/company/certriddle/?viewAsMember=true",
             image: "/svgs/LinkedIn.svg",
           },
           {
             to: "https://www.facebook.com/profile.php?id=61559952553785",
             image: "/svgs/Facebook.svg",
           },
           {
             to: "https://x.com/CertRiddle",
             image: "/svgs/Twitter.svg",
           },
         ].map((nav, index) => (
           <Link
             style={{
               color: "#fff",
               cursor: "pointer",
             }}
             to={nav?.to}
             smooth={true}
             duration={500}
             key={index}
           >
             <Box display="flex">
               {nav?.name && nav?.name}
               {nav?.image && <Box component="img" src={nav?.image} />}
             </Box>
           </Link>
         ))}
       </Stack>
     </Stack>
   </Box>
 );
 }
 function Mobile(){
 return (
   <Box
     mt={4}
     sx={{
       px: { md: 3, xs: 2 },
       py: 1,
       backgroundImage: "url('/svgs/Mobile-Footer.svg')",
       backgroundRepeat: "no-repeat",
       backgroundSize: "cover",
       backgroundPositionY: "top",
       backgroundPositionX: "center",
     }}
   >
     <Box mt={3}>
       <Stack
         justifyContent={{ md: "flex-start", xs: "center" }}
         spacing={{ md: 5, xs: 2 }}
         direction="row"
         alignItems={{ md: "flex-start", xs: "center" }}
       >
         {[
           {
             to: "https://www.linkedin.com/company/certriddle/?viewAsMember=true",
             image: "/svgs/LinkedIn-Sm.svg",
           },
           {
             to: "https://www.facebook.com/profile.php?id=61559952553785",
             image: "/svgs/Facebook-Sm.svg",
           },
           {
             to: "https://x.com/CertRiddle",
             image: "/svgs/Twitter-Sm.svg",
           },
         ].map((nav, index) => (
           <Link
             style={{
               color: "#fff",
               cursor: "pointer",
             }}
             to={nav?.to}
             smooth={true}
             duration={500}
             key={index}
           >
             <Box display="flex">
               {nav?.name && nav?.name}
               {nav?.image && <Box component="img" src={nav?.image} />}
             </Box>
           </Link>
         ))}
       </Stack>
     </Box>
     <Stack
       direction={{ xs: "column", md: "row" }}
       sx={{ mt: 4 }}
       justifyContent={{ md: "space-between", xs: "center" }}
       alignItems="center"
     >
       <Text
         color="#333333"
         fw="400"
         fs={{ md: "16px", lg: "16px", sm: "16px", xs: "16px" }}
       >
         © 2024. All rights reserved.
       </Text>
       <Stack
         justifyContent="flex-start"
         spacing={{ md: 5, xs: 2 }}
         direction="row"
         alignItems="flex-start"
       >
         {[
           {
             to: "/terms",
             name: "Terms",
           },
           {
             to: "/privacy",
             name: "Privacy",
           },
           {
             to: "/cookies",
             name: "Cookies",
           },
         ].map((nav, index) => (
           <Link
             style={{
               color: "#333333",
               cursor: "pointer",
             }}
             to={nav?.to}
             smooth={true}
             duration={500}
             key={index}
           >
             <Box display="flex">{nav?.name && nav?.name}</Box>
           </Link>
         ))}
       </Stack>
     </Stack>
   </Box>
 );
 }