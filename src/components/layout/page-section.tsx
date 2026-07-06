import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { FC, ReactNode } from 'react'

export const PageSection: FC<{
  id: string
  title: string
  body: string
  children: ReactNode
}> = (props) => {
  return (
    <Stack id={props.id} spacing={4} useFlexGap>
      <Stack spacing={1} useFlexGap>
        <Typography sx={(theme) => theme.typography.siteSection}>
          {props.title}
        </Typography>
        <Typography
          sx={(theme) => ({
            color: theme.palette.text.secondary,
            ...theme.typography.siteCopy,
          })}
        >
          {props.body}
        </Typography>
      </Stack>
      {props.children}
    </Stack>
  )
}
