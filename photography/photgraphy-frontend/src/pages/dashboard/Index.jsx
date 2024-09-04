import { Box, Grid, Stack } from "@mui/material";
import Text from "../../components/Text";
import Button from "../../components/Button";

import { Icon } from "@iconify/react";
import { Helmet } from "react-helmet";
import { setUser } from "../../redux/UserReducer";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../api/axios";
import { notify } from "../../utils/Index";
import { useCallback, useEffect, useState } from "react";

import ProgressMeter from "../../components/loader";
import ProgressLoader from "../../components/loader";
import { ToastContainer } from "react-toastify";

export default function Dashboard() {
  return (
    <>
      <Box bgcolor="#000">
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <Stack spacing={5}>
          <Overview />
        </Stack>
      </Box>
    </>
  );
}

function Overview() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.details);
  const [isUpgrading, setIsUpgrading] = useState(false);

  return (
    <>
      <Text color="#fff" fs="36px" fw="700">
        Hi {user?.fullName}!
      </Text>

    
    </>
  );
}

