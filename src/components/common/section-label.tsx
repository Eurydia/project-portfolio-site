import Typography from '@mui/material/Typography'
import type { FC, ReactNode } from 'react'

export const SectionLabel: FC<{ children: ReactNode }> = (props) => {
  return (
    <Typography
      sx={(theme) => ({
        color: theme.palette.primary.main,
        ...theme.typography.siteMark,
      })}
    >
      {props.children}
    </Typography>
  )
}
