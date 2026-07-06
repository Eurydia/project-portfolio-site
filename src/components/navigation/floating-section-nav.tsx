import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import { alpha } from '@mui/material/styles'
import type { FC } from 'react'
import type { SectionNavItem } from '#/types/navigation'

export const FloatingSectionNav: FC<{
  items: readonly SectionNavItem[]
  label: string
}> = (props) => {
  return (
    <Stack
      aria-label={props.label}
      spacing={1.35}
      useFlexGap
      sx={(theme) => ({
        position: 'fixed',
        top: '50%',
        right: {
          md: theme.spacing(2.75),
          lg: theme.spacing(4.5),
        },
        zIndex: theme.zIndex.appBar,
        display: {
          xs: 'none',
          md: 'flex',
        },
        transform: 'translateY(-50%)',
        flexDirection: 'column',
        alignItems: 'flex-end',
      })}
    >
      {props.items.map((item) => (
        <Link
          key={item.id}
          href={`#${item.id}`}
          title={item.label}
          aria-label={item.label}
          sx={(theme) => ({
            inlineSize: theme.spacing(5.25),
            blockSize: theme.spacing(0.5),
            borderRadius: theme.shape.borderRadius,
            bgcolor: alpha(theme.palette.primary.main, 0.32),
            transition: theme.transitions.create(['background-color', 'width']),
            '&:hover': {
              inlineSize: theme.spacing(6.75),
              bgcolor: theme.palette.primary.main,
            },
          })}
        />
      ))}
    </Stack>
  )
}
