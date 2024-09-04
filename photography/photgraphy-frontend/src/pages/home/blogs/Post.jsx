import { Box, Stack } from '@mui/material';
import { useEffect, useState } from 'react'
import axios from "../../../api/axios";
import Text from '../../../components/Text';
import { stripHtmlTags } from '../../../utils/Index';
import moment from 'moment';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Header from '../../../components/layouts/home/Header';
import { ArrowBack } from '@mui/icons-material';
import Button from '../../../components/Button';

export default function Post() {
    const [post, setPost] = useState({});
    const {id} = useParams()
    useEffect(() => {
      axios.get(`/api/blogs/${id}`).then((response) => {
        setPost(response.data.blog);
      });
    }, []);
    const navigate = useNavigate()
  return (
    <>
      <Header />
      <Stack spacing={5}>
        <Button startIcon={<ArrowBack />} color="#2DDB81" onClick={() => navigate('/blogs')}>
          Back
        </Button>
        <Box
          component="img"
          src={post?.image}
          sx={{ width: "100%", height: "340px", objectFit: "cover" }}
        />

        <Box px={2}>
          <Box
            display="flex"
            gap={1}
            alignItems="center"
            justifyContent="space-between"
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
            <Stack direction="row" alignItems="center" spacing={1}>
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
            </Box>
            <Text color="#9AE1BC" fw="400" fs="16px">
              {stripHtmlTags(post?.content)}
            </Text>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
