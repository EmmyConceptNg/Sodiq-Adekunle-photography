
import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import Text from './Text'

export default function EmptyState({message, button}) {
  return (
    <Box>
      <Box
        component="img"
        src="/icons/empty-box.png"
        sx={{ height: "100px" }}
      />
      <Text fs="18px" fw="400" ff="Helvetica Neue" color="#fff">
        {message}
      </Text>
      {button != "" && (
        <Text fs="18px" fw="400" ff="Helvetica Neue" color="#fff">
          Click on <span style={{ fontWeight: "900" }}>{button}</span> to add
          new data
        </Text>
      )}
    </Box>
  );
}

EmptyState.propTypes = {
message : PropTypes.string,
button : PropTypes.string
}



