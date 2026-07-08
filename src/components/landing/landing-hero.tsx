import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
import { RotatingHeroText } from '#/components/landing/rotating-hero-text'
import type { FC } from 'react'

const heroPhrases = [
  'software engineer.',
  'Stipendium Hungaricum scholar.',
  'ELTE alumnus.',
  'research software builder.',
  'educational tools maintainer.',
] as const

export const LandingHero: FC = () => {
  return (
    <Stack
      spacing={2}
      useFlexGap
      sx={(theme) => ({
        position: 'relative',
        maxInlineSize: theme.spacing(85),
        paddingInlineStart: {
          xs: theme.spacing(2),
          sm: 0,
        },
        '::before': {
          content: '""',
          position: 'absolute',
          insetBlockStart: theme.spacing(0.5),
          insetBlockEnd: theme.spacing(0.5),
          insetInlineStart: {
            xs: 0,
            sm: theme.spacing(-3.5),
          },
          inlineSize: theme.spacing(0.25),
          borderRadius: theme.shape.borderRadius,
          background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${alpha(theme.palette.primary.main, 0)})`,
        },
      })}
    >
      <Typography variant="siteMark" color="primary">
        Portfolio
      </Typography>
      <Stack>
        <Typography variant="siteDisplay" color="textPrimary">
          Computer science graduate,
        </Typography>
        <RotatingHeroText phrases={heroPhrases} />
      </Stack>

      <Typography variant="siteCopy" color="textSecondary">
        I work across web systems, educational tools, research software, and the
        practical details around deploying and maintaining them.
      </Typography>
    </Stack>
  )
}
