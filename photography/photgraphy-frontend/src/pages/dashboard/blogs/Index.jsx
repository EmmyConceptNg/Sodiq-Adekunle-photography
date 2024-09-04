import { Box } from "@mui/material";
import axios from "../../../api/axios";
import { Title } from "./Title";
import { Posts } from "./Posts";
import Footer from "../../../components/layouts/Footer";
import { useEffect, useState } from "react";
import EditNewsModal from "../../../components/modals/NewsModal/EditNewsModal"; // Import EditNewsModal

export function Blogs() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    axios.get(`/api/blogs`, {}).then((response) => {
      setPosts(response.data.blogs);
    });
  }, []);



  return (
    <>
      <Box my={{ xs: 5, md: 5 }} sx={{ bgcolor: "#000" }}>
        <Title setPosts={setPosts} />
        <Posts setPosts={setPosts} posts={posts}  />
      </Box>
      <Footer />
     
    </>
  );
}
