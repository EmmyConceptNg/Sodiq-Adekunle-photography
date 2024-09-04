import SearchInput from "../../../components/Search";
import Text from "../../../components/Text";
import { Box } from "@mui/material";


const categories = [
    {id: 1,name : 'View All', active: true},
    {id: 2,name : 'Design', active: false},
    {id: 3,name : 'Product', active: false},
    {id: 4,name : 'Software Engineering', active: false},
    {id: 5,name : 'Customer Success', active: false},
    {id: 6,name : 'Leadership', active: false},
    {id: 7,name : 'Management', active: false},
]


export function Categories() {
  return (
    <Box>
      <SearchInput placeholder="Search" />
      <Text
        color="#2DDB81"
        fw="600"
        fs="14px"
        sx={{
          my: 3,
        }}
      >
        Blog categories
      </Text>

      <Box>
        {categories.map(({ id, name, active }) => (
          <Box key={id} px={2} py={1.2} border={active && "1px solid #10281B"} borderRadius="6px" sx={{ cursor: active ? 'context-menu' :'pointer' }}>
            <Text
              color="#9AE1BC"
              fw="600"
              fs="16px"
            >
              {name}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
