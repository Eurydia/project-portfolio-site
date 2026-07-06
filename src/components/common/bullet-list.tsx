import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { FC } from 'react'

export const BulletList: FC<{ items: readonly string[] }> = (props) => {
  return (
    <Stack
      component="ul"
      spacing={1}
      useFlexGap
      sx={(theme) => ({
        margin: 0,
        paddingInlineStart: theme.spacing(2.5),
        color: theme.palette.text.secondary,
      })}
    >
      {props.items.map((item) => (
        <Box
          component="li"
          key={item}
          sx={(theme) => ({
            paddingInlineStart: theme.spacing(0.5),
          })}
        >
          <Typography variant="siteFine" color="textSecondary">
            {item}
          </Typography>
        </Box>
      ))}
    </Stack>
  )
}
