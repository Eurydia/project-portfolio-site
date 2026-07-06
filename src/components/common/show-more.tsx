import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Button from '@mui/material/Button'
import type { FC } from 'react'

export const ShowMore: FC<{
  hiddenCount: number
  nextVisibleCount: number
  onClick: () => void
}> = (props) => {
  if (props.hiddenCount <= 0) {
    return null
  }

  return (
    <Button
      type="button"
      variant="text"
      size="small"
      endIcon={<ExpandMoreIcon />}
      onClick={props.onClick}
      sx={(theme) => ({
        color: theme.palette.primary.main,
        ...theme.typography.siteAction,
      })}
    >
      Show {props.nextVisibleCount} more
    </Button>
  )
}
