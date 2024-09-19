import { Box, Card, Divider, Grid2, Stack } from '@mui/material'
import Text from '../../../components/Text';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Dashboard() {
  return (
    <Stack spacing={3}>
      <Header />
      <Menu />
    </Stack>
  )
}



function Header (){
  const user = useSelector(state => state.user.details)
  return (
    <Box>
      <Text fs="32px" fw="900" ff="Helvetica Neue" color="#fff">
        Welcome {user?.firstName ? user?.firstName + ' ' + user?.lastName : 'Admin'}
      </Text>
      <Text fs="16px" fw="400" color="gray">
        Manage your entire application from here
      </Text>
    </Box>
  );
}




function Menu(){


  const menuItems = [
    {
      name: "Services",
      url: "/admin/services",
      icon: "grommet-icons:services",
      count: "1",
    },
    {
      name: "Portfolio",
      url: "/admin/portfolio",
      icon: "zondicons:portfolio",
      count: "1",
    },
    {
      name: "Education",
      url: "/admin/education-and-experience",
      icon: "zondicons:education",
      count: "1",
    },
    {
      name: "Settings",
      url: "/admin/settings",
      icon: "material-symbols:settings",
      count: "1",
    },
  ];

  const navigate = useNavigate()


  return (
    <Grid2 container spacing={3}>
      {menuItems.map(({ name, url, icon, count }) => { return(
        <Grid2
          key={name}
          size={{ md: 6, sm: 6, sx: 12 }}
          onClick={() => navigate(`${ url }`)}
        >
          <Card
            sx={{
              borderRadius: "12px",
              border: "1px solid gray",
              bgcolor: "transparent",
              p: 5,
              cursor: "pointer",
              "&:hover": {
                borderColor: "#2ddb81",
                color: "#2ddb81",
                bgcolor: "#2ddb81",
              },
            }}
          >
            <Stack sx={{ alignItems: "center" }}>
              <Icon
                style={{
                  fontSize: "40px",
                  color: "#fff",
                }}
                icon={icon}
              />
              <Text fs="24px" fw="600" color="#fff">
                {name}
              </Text>
            </Stack>
          </Card>
          <Box
            sx={{
              bgcolor: "transparent",
              borderBottom: "1px solid #2ddb81",
              borderBottomLeftRadius: "100%",
              borderBottomRightRadius: "100%",
              mt: 2,
              height: 3,
            }}
          >
            {" "}
          </Box>
        </Grid2>
      )})}
    </Grid2>
  );
}