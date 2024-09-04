import { useEffect, useState } from "react";
import { LinkIcon } from "../../../../public/svgs/LinkIcon";
import { MobilePagination, Pagination } from "../../../components/Pagination";
import Text from "../../../components/Text";
import axios from "../../../api/axios";
import { Box, Divider, Grid, Stack } from "@mui/material";
import { stripHtmlTags } from "../../../utils/Index";
import moment from "moment";
import Button from "../../../components/Button";
import EditNewsModal from "../../../components/modals/NewsModal/EditNewsModal";

export function Posts({ posts, setPosts }) {
  const [editOpen, setEditOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleEdit = (post) => {
    setSelectedPost(post);
    setEditOpen(true);
  };
  return (
    <>
      <Box>
        {!posts || posts?.length < 1 ? (
          <Text>No content at the moment</Text>
        ) : null}
        <Grid container justifyContent="space-between" spacing={3}>
          {posts?.map((post) => (
            <Grid item md={6} xs={12} key={post?._id}>
              <Stack
                spacing={5}
                sx={{
                  bgcolor: "#0C0E0D",
                  border: "1px solid #10281B",
                  borderRadius: "16px",
                }}
              >
                <Box>
                  <Box
                    component="img"
                    src={post?.image}
                    sx={{ width: "100%", height: "240px", objectFit: "cover" }}
                  />

                  <Box
                    position="relative"
                    bgcolor="rgba(255, 255, 255, 0.3)"
                    bottom="53px"
                    color="#fff"
                    py={2}
                    sx={{
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      px={3}
                    >
                      <Box>
                        <Text color="#fff" fw="600" fs="14px">
                          {post?.author?.fullName}
                        </Text>
                        <Text color="#fff" fw="400" fs="14px">
                          {moment(post?.createdAt)?.format("MMMM D, YYYY")}
                        </Text>
                      </Box>
                      <Box
                        sx={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#000",
                        }}
                        bgcolor="#2DDB81"
                        borderRadius="16px"
                        px="8px"
                        py="2px"
                      >
                        {post?.category}
                      </Box>
                    </Stack>
                  </Box>
                </Box>

                <Box sx={{ padding: "0 20px 20px 20px" }} mt={0} pt={0}>
                  <Stack item md={4} sx={12} spacing={2}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      onClick={() => handleEdit(post)} sx={{ cursor: 'pointer' }}
                    >
                      <Text color="#fff" fw="600" fs="24px">
                        {post?.title}
                      </Text>
                      <LinkIcon />
                    </Box>
                    <Text color="#FFFFFF80" fw="400" fs="16px">
                      {stripHtmlTags(post?.content).length > 100
                        ? `${stripHtmlTags(post?.content).substring(0, 100)}...`
                        : stripHtmlTags(post?.content)}
                    </Text>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Box mt={8} display={{ md: "flex", xs: "none" }}>
          <Pagination />
        </Box>
        <Box mt={5} display={{ md: "none", xs: "flex" }} flexDirection="column">
          <Divider sx={{ bgcolor: "#fff" }} />
          <MobilePagination />
        </Box>
      </Box>
      {editOpen && (
        <EditNewsModal
          open={editOpen}
          setOpen={setEditOpen}
          post={selectedPost}
          setPosts={setPosts}
        />
      )}
    </>
  );
}
