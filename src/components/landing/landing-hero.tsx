import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { FC } from 'react'

export const LandingHero: FC = () => {
  return (
    <Stack
      spacing={2}
      useFlexGap
      sx={(theme) => ({
        maxInlineSize: theme.spacing(80),
      })}
    >
      <Typography variant="siteMark" color="textSecondary">
        Portfolio / selected record
      </Typography>
      <Typography variant="siteDisplay">Thanakorn Phuttharaksa</Typography>
    </Stack>
  )
}
