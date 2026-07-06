import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { FC } from 'react'

const navItems = [
  {
    href: '#maintained',
    label: 'Works',
  },
  {
    href: '#research',
    label: 'Research',
  },
  {
    href: '#education',
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
          justifyContent: 'space-between',
          borderBottom: `1px solid ${theme.palette.text.primary}`,
          paddingBottom: theme.spacing(1.5),
        })}
      >
        <Typography variant="siteTitle">Thanakorn Phuttharaksa</Typography>
        <Stack direction="row" spacing={3.5} useFlexGap>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              underline="none"
              variant="siteSmall"
              color="textSecondary"
              sx={{
                textTransform: 'uppercase',
              }}
            >
              {item.label}
            </Link>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}
