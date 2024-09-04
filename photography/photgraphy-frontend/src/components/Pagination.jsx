import { Box, Stack } from "@mui/material";
import Button from "./Button";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Text from "./Text";

export function Pagination() {
  return (
    <Stack width="100%"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={5}
    >
      {/* Previos Button */}
      <Button
        sx={{ mt: 1 }}
        type="submit"
        height="36px"
        width="115px"
        variant="outlined"
        color="#2DDB81"
        startIcon={<ArrowBack />}
      >
        Previous
      </Button>
      {/* End Previous Button */}

      {/* Pagination */}

      <Stack direction="row" spacing={2}>
        {Array.from({ length: 10 }, (_, index) => {
          if (index === 3) {
            return (
              <Box
                key={index}
                px={2}
                py={1.2}
                color="#47675F"
                borderRadius="8px"
              >
                ...
              </Box>
            );
          } else if (index < 3 || index > 6) {
            return (
              <Box
                key={index}
                px={2}
                py={1.2}
                bgcolor={index === 0 ? "#2DDB81" : "transparent"}
                color={index === 0 ? "#000" : "#47675F"}
                borderRadius="8px"
              >
                {index + 1}
              </Box>
            );
          }
          return null;
        })}
      </Stack>

      {/* end Pagination */}

      {/* Next Button */}
      <Button
        sx={{ mt: 1 }}
        type="submit"
        height="36px"
        width="115px"
        variant="outlined"
        color="#2DDB81"
        endIcon={<ArrowForward />}
      >
        Next
      </Button>
      {/* End Next Button */}
    </Stack>
  );
}
export function MobilePagination() {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      {/* Previos Button */}
      <Button
        sx={{ mt: 1 }}
        type="submit"
        height="36px"
        width="36px"
        variant="outlined"
        color="#2DDB81"
      >
        <ArrowBack />
      </Button>
      {/* End Previous Button */}

      {/* Pagination */}

      <Stack direction="row" spacing={2}>
        <Text color="#fff" fw="400" fs="14px">
          Page 1 of 10
        </Text>
      </Stack>

      {/* end Pagination */}

      {/* Next Button */}
      <Button
        sx={{ mt: 1 }}
        type="submit"
        height="36px"
        width="36px"
        variant="outlined"
        color="#2DDB81"
      >
        <ArrowForward />
      </Button>
      {/* End Next Button */}
    </Stack>
  );
}
