import Box from '@mui/material/Box'
import type { FC } from 'react'

export const ImageDisplay: FC<{
  label: string
  src?: string
  width?: number
  height?: number
}> = (props) => {
  const imageWidth = props.width ?? 420
  const imageHeight = props.height ?? 260
  const fallbackSrc = `https://placehold.co/${imageWidth}x${imageHeight}?text=${encodeURIComponent(props.label)}`

  return (
    <Box
      component="img"
      src={props.src ?? fallbackSrc}
      alt={props.label}
      loading="lazy"
      sx={(theme) => ({
        display: 'block',
        inlineSize: '100%',
        maxInlineSize: theme.spacing(40),
        marginInlineStart: {
          md: 'auto',
        },
        aspectRatio: `${imageWidth} / ${imageHeight}`,
        objectFit: 'cover',
        border: 1,
        borderColor: theme.palette.divider,
        borderRadius: theme.shape.borderRadius,
        bgcolor: theme.palette.background.paper,
      })}
    />
  )
}
