import {  Stack } from "@mui/material";
import Header from "../../../components/layouts/home/Header";
import { Title } from "./Title";
import PricesCard from "./PricesCard";
import Ask from "./Ask";
import Results from "./Results";
import Question from "./Question";
import Footer from "../../../components/layouts/Footer";
import Faq from "./Faq";


export default function Pricing() {
  return (
    <>
      <Header />
      <Stack spacing={10} mx={{ xs: 2, md: 15 }} my={{ xs: 5, md: 5 }}>
        <Title />
        <PricesCard />
        <Faq />
        
      </Stack>
      <Footer />
    </>
  );
}
