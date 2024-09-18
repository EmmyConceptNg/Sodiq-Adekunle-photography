import { Box, Grid2, Stack } from "@mui/material";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { userDetailValidation } from "../../../utils/Index";


export default function ProfileDetails() {

  const user = useSelector((state) => state.user.details);
  const initialValues = {
    firstName: user?.firstName ?? "",
    lastName: user?.lastName ?? "",
    email: user?.email ?? "",
    phone: user?.phone ?? "",
    linkedIn: user?.linkedIn ?? "",
    instagram: user?.instagram ?? "",
    facebook: user?.facebook ?? "",
    twitter: user?.twitter ?? "",
    address: user?.address ?? "",
  };


  const handleUpdate =() =>{

  }

  return (
    <>
      <Header />

      <Box
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
        <Grid2>
          <Formik
            initialValues={initialValues}
            validationSchema={userDetailValidation}
            onSubmit={handleUpdate}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form>
                <Grid2 container spacing={{ md: 5, xs: 0 }}>
                  {[
                    {
                      label: "First Name",
                      placeholder: "First Name",
                      required: true,
                      type: "text",
                      name: "firstName",
                    },
                    {
                      label: "Last Name",
                      placeholder: "Last Name",
                      required: true,
                      name: "lastName",
                    },
                    {
                      label: "Email",
                      placeholder: "email@domain.com",
                      type: "email",
                      required: true,
                      name: "email",
                    },
                    {
                      label: "Phone",
                      placeholder: "+1 00 0000 00",
                      type: "tel",
                      required: false,
                      name: "phone",
                    },
                    {
                      label: "Office Address",
                      placeholder: "Office Addres",
                      required: false,
                      name: "address",
                    },
                    {
                      label: "LinkedIn Profile",
                      placeholder: "linkedIn Url",
                      required: false,
                      name: "linkedIn",
                      type: "url",
                    },
                    {
                      label: "Facebook Profile",
                      placeholder: "Facebook Url ",
                      required: false,
                      name: "facebook",
                      type: "url",
                    },
                    {
                      label: "Instagram",
                      placeholder: "Instagram Url",
                      required: false,
                      name: "instagram",
                      type: "url",
                    },
                    {
                      label: "Twitter ",
                      placeholder: "Twitter Url",
                      required: false,
                      name: "twitter",
                      type: "url",
                    },
                  ].map((item, index) => (
                    <Grid2
                      size={{ md: 6, xs: 12 }}
                      key={index}
                      mb={{ xs: 5, md: 0 }}
                    >
                      <Box display="flex">
                        <Input
                          name={item.name}
                          readOnly={item?.readOnly}
                          height="45px"
                          label={item.label}
                          required={item.required}
                          placeholder={item.placeholder}
                          aria-label={item.label}
                          type={item.type}
                          defaultValue={item?.defaultValue}
                          onInput={item.onInput}
                        />
                      </Box>
                    </Grid2>
                  ))}
                </Grid2>
                <Box display="flex" mt={{ md: 5 }}>
                  <Button
                    type="submit"
                    loading={isSubmitting}
                    variant="contained"
                    sx={{ ml: "auto" }}
                  >
                    <span style={{ color: '#000' }}>Update</span>
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Grid2>
      </Box>
    </>
  );
}

function Header() {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Box>
        <Text fs="32px" fw="900" ff="Helvetica Neue" color="#fff">
          Profile Details
        </Text>
        <Text fs="16px" fw="400" color="gray">
          Edit and Update Admin Profile Details
        </Text>
      </Box>
      <Button variant="contained" height="45px">
        <span style={{ color: "#000" }}>Edit Details</span>
      </Button>
    </Stack>
  );
}