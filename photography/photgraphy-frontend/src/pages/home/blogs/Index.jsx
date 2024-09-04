import { Box, Grid } from "@mui/material";
import Header from "../../../components/layouts/landing/Header";

import { Title } from "./Title";
import { Categories } from "./Categories";
import { Posts } from "./Posts";
import Footer from "../../../components/layouts/Footer";
import axios from "../../../api/axios";
import { useEffect, useState } from "react";

export function Blogs() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(`/api/blogs`, {}).then((response) => {
      setPosts(response.data.blogs);
    });
  }, []);
  return (
    <>
      <Header />
      <Box mx={{ xs: 2, md: 15 }} my={{ xs: 5, md: 5 }}>
        <Title />

        <Grid container mt={10} spacing={5}>
          <Grid item md={3} xs={12}>
            <Categories />
          </Grid>
          <Grid item md={9} xs={12}>
            <Posts posts={posts} />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}
