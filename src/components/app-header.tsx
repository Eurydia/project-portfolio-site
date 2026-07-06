import Stack from '@mui/material/Stack'
import type { FC } from 'react'
import { RouterLink } from './router/router-link'

const navItems = [
  {
    hash: 'maintained',
    label: 'Works',
  },
  {
    hash: 'research',
    label: 'Research',
  },
  {
    hash: 'education',
    label: 'Background',
  },
] as const

export const AppHeader: FC = () => {
  return (
    <Stack spacing={4} useFlexGap>
      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        spacing={{
          xs: 1.5,
          sm: 3.5,
        }}
        useFlexGap
        sx={(theme) => ({
          alignItems: {
            xs: 'flex-start',
            sm: 'baseline',
          },
          justifyContent: 'flex-end',
          borderBottom: `1px solid ${theme.palette.text.primary}`,
          paddingBottom: theme.spacing(1.5),
        })}
      >
        <Stack direction="row" spacing={3.5} useFlexGap>
          {navItems.map((item) => (
            <RouterLink
              to="."
              hash={() => item.hash}
              key={item.hash}
              underline="always"
              variant="siteSmall"
              color="textSecondary"
              sx={{
                textTransform: 'uppercase',
              }}
            >
              {item.label}
            </RouterLink>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}
