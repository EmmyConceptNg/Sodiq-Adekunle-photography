import moment from "moment";
import { LinkIcon } from "../../../../public/svgs/LinkIcon";
import { MobilePagination, Pagination } from "../../../components/Pagination";
import Text from "../../../components/Text";
import { Box, Divider, Grid, Stack } from "@mui/material";
import { stripHtmlTags } from "../../../utils/Index";
import { useNavigate } from "react-router-dom";


export function Posts({posts}) {
  const navigate = useNavigate()
  return (
    <Box>
      {!posts || posts?.length < 1 ? 
    <Text>No content at the moment</Text>  :null
    }
      <Grid container justifyContent="space-between" spacing={3}>
        {posts?.map((post, index) => (
          <Grid item md={index === 0 ? 12 : 6} xs={12} key={post?.id}>
            {index === 0 ? (
              <Box
                onClick={() => navigate(post?._id)}
                sx={{ cursor: "pointer" }}
              >
                <Stack
                  direction={{ md: "row", xs: "column" }}
                  container
                  spacing={5}
                  alignItems="center"
                >
                  <Box
                    component="img"
                    src={post?.image}
                    sx={{ width: "100%", height: "320px", objectFit: "cover" }}
                  />

                  <Stack item md={4} sx={12} spacing={2}>
                    <Text color="#fff" fw="600" fs="30px">
                      {post?.title}
                    </Text>
                    <Text color="#9AE1BC" fw="400" fs="14px">
                      {stripHtmlTags(post?.content).length > 100
                        ? `${stripHtmlTags(post?.content).substring(0, 100)}...`
                        : stripHtmlTags(post?.content)}
                    </Text>
                    <Stack direction="row" spacing={1}>
                      <Box
                        component="img"
                        src={post?.author?.image}
                        sx={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "200px",
                        }}
                      />
                      <Box>
                        <Text color="#fff" fw="600" fs="14px">
                          {post?.author?.name}
                        </Text>
                        <Text color="#9AE1BC" fw="400" fs="14px">
                          {moment(post?.createdAt)?.format("MMMM D, YYYY")}
                        </Text>
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            ) : (
              <Stack
                spacing={5}
                onClick={() => navigate(post?._id)}
                sx={{ cursor: "pointer" }}
              >
                <Box
                  component="img"
                  src={post?.image}
                  sx={{ width: "100%", height: "240px", objectFit: "cover" }}
                />

                <Box
                  display="flex"
                  gap={1}
                  alignItems="center"
                  justifyContent="flex-start"
                >
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
                  <Text color="#2DDB81" fw="500" fs="12px">
                    1 min
                  </Text>
                </Box>

                <Stack item md={4} sx={12} spacing={2}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Text color="#fff" fw="600" fs="24px">
                      {post?.title}
                    </Text>
                    <LinkIcon />
                  </Box>
                  <Text color="#9AE1BC" fw="400" fs="16px">
                    {stripHtmlTags(post?.content).length > 100
                      ? `${stripHtmlTags(post?.content).substring(0, 100)}...`
                      : stripHtmlTags(post?.content)}
                  </Text>
                  <Stack direction="row" spacing={1}>
                    <Box
                      component="img"
                      src={post?.author?.image}
                      sx={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "200px",
                      }}
                    />
                    <Box>
                      <Text color="#fff" fw="600" fs="14px">
                        {post?.author?.name}
                      </Text>
                      <Text color="#9AE1BC" fw="400" fs="14px">
                        {moment(post?.createdAt)?.format("MMMM D, YYYY")}
                      </Text>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
            )}
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
  );
}
