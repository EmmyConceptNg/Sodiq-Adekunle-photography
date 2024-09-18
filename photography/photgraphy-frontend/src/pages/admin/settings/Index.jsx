import { Box, Grid2, OutlinedInput, Stack, TextField } from "@mui/material";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import { useRef, useState } from "react";
import ProfileDetails from "./ProfileDetails";

export default function Settings(props) {
  return (
    <Stack spacing={3}>
      <Header />
       <Grid2
        container
        spacing={5}
        sx={{ mx: { md: "200px", xs: "15px" }, mt: 5 }}
      >
        <ImageSection />
        <About />
      </Grid2>
      <ProfileDetails />
    </Stack>
  );
}

function Header() {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Box>
        <Text fs="32px" fw="900" ff="Helvetica Neue" color="#fff">
          Settings
        </Text>
        <Text fs="16px" fw="400" color="gray">
          Edit and Update Admin Details
        </Text>
      </Box>
    </Stack>
  );
}

Settings.propTypes = {};



function ImageSection() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click(); 
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // You can handle the file upload logic here
      console.log("Selected file:", file);
    }
  };

  return (
    <Grid2
      size={{ xs: 12, md: 4 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        bgcolor: "#121214",
        p: { md: "40px", xs: "20px" },
        border: "1px solid rgba(0,0,0,.05)",
        borderRadius: "20px",
        boxShadow:
          "#ffffff06 0 .362176px .651917px -1px inset,#ffffff09 0 3px 5.4px -2px inset",
        textAlign: "center",
      }}
    >
      <Image src="/images/profile.png" alt="profile" />
      <Box>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }} 
          onChange={handleFileChange}
          accept="image/*" 
        />
        <Button
          sx={{ mt: 3 }}
          width="100%"
          height="40px"
          variant="outlined"
          color="#2DDB81"
          onClick={handleButtonClick}
        >
          Change Display Image
        </Button>
      </Box>
    </Grid2>
  );
}

function About() {

  const [editable, setEditable] = useState(false)


  const handleEdit = () =>{
    setEditable(!editable)
  }

  return (
    <Grid2 size={{ xs: 12, md: 8 }}>
      <Stack spacing={5}>
        <Box
          bgcolor="#121214"
          sx={{
            p: { md: "40px", xs: "20px" },
            border: "1px solid rgba(0,0,0,.05)",
            borderRadius: "20px",
            boxShadow:
              "#ffffff06 0 .362176px .651917px -1px inset,#ffffff09 0 3px 5.4px -2px inset",
          }}
        >
          <Text
            fs={{ md: "32px", xs: "24px" }}
            fw="900"
            ff="Helvetica Neue"
            color="#fff"
            sx={{ my: 3 }}
          >
            About Us
          </Text>
          {!editable ? (
            <>
              <Text
                fs={{ md: "18px", xs: "12px" }}
                fw="500"
                color="#ccc"
                sx={{ my: 3 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                nostrum voluptatibus ut, animi facere incidunt nemo alias rem
                velit hic. Pariatur, voluptatum illum nobis iste veritatis
                delectus quisquam eos totam?
              </Text>
              <Text
                fs={{ md: "18px", xs: "12px" }}
                fw="500"
                color="#ccc"
                sx={{ my: 3 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                nostrum voluptatibus ut, animi facere incidunt nemo alias rem
                velit hic. Pariatur, voluptatum illum nobis iste veritatis
                delectus quisquam eos totam?
              </Text>
              <Text
                fs={{ md: "18px", xs: "12px" }}
                fw="500"
                color="#ccc"
                sx={{ my: 3 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                nostrum voluptatibus ut, animi facere incidunt nemo alias rem
                velit hic. Pariatur, voluptatum illum nobis iste veritatis
                delectus quisquam eos totam?
              </Text>{" "}
            </>
          ) : (
            <OutlinedInput
              sx={{
                color: "#fff",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "gray",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "gray",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "gray",
                },
                borderRadius: 2,
              }}
              multiline
              rows={10}
              fullWidth
            />
          )}
          {!editable ? (
            <Button
              sx={{ mt: 3 }}
              height="40px"
              variant="outlined"
              color="#2DDB81"
              onClick={() => handleEdit()}
            >
              Edit About
            </Button>
          ) : (
            <Button
              sx={{ mt: 3 }}
              height="40px"
              variant="contained"
              color="#2DDB81"
              onClick={() => handleEdit()}
            >
              <span style={{ color : '#000' }}>Save About</span>
            </Button>
          )}
        </Box>
      </Stack>
    </Grid2>
  );
}

