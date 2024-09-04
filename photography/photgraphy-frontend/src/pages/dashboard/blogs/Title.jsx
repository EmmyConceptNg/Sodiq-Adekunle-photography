import { useState } from "react";
import Button from "../../../components/Button";
import Text from "../../../components/Text";
import { Box } from "@mui/material";
import AddNewsModal from "../../../components/modals/NewsModal/AddNewsModal";

export function Title({ setPosts }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box display="flex" justifyContent="flex-end" mb={4} gap={2}>
        <Button
          variant="contained"
          width={{ sm: "240px", xs: "100%" }}
          height="44px"
          onClick={() => setOpen(true)}
        >
          <span style={{ color: "#333333" }}>Write an Article</span>
        </Button>
        <Button
          variant="outlined"
          width={{ sm: "240px", xs: "100%" }}
          height="44px"
          color="#2DDB81"
        >
          <span style={{ color: "#fff" }}>Newest First</span>
        </Button>
      </Box>

      {open && (
        <AddNewsModal open={open} setOpen={setOpen} setPosts={setPosts} />
      )}
    </>
  );
}
