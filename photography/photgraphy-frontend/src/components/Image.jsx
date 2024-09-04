import { Box } from '@mui/material'

export default function Image({src, alt, sx}) {
  return (
    <Box component="img" src={src} sx={{ ...sx }} />
  )
}
