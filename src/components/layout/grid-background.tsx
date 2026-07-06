import Box from '@mui/material/Box'
import type { FC, ReactNode } from 'react'

export const GridBackground: FC<{ children: ReactNode }> = (props) => {
  return (
    <Box
      sx={(theme) => {
        const gridCell = theme.spacing(10)
        const gridLine = theme.alpha(theme.palette.primary.main, 0.12)

        return {
          minHeight: '100dvh',
          backgroundImage: `linear-gradient(to right, ${gridLine} 1px, transparent 1px), linear-gradient(to bottom, ${gridLine} 1px, transparent 1px)`,
          backgroundSize: `${gridCell} ${gridCell}`,
        }
      }}
    >
      {props.children}
    </Box>
  )
}
