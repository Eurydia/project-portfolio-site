import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import type { FC } from 'react'

type TypewriterPhase = 'typing' | 'holding' | 'deleting'

export const RotatingHeroText: FC<{
  phrases: readonly string[]
  completedPauseMs?: number
  deletingDelayMs?: number
  typingDelayMs?: number
}> = (props) => {
  const [activePhraseIndex, setActivePhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [phase, setPhase] = useState<TypewriterPhase>('typing')
  const activePhrase = props.phrases[activePhraseIndex] ?? ''

  useEffect(() => {
    if (!activePhrase) {
      return undefined
    }

    if (phase === 'holding') {
      const holdTimeoutId = window.setTimeout(() => {
        setPhase('deleting')
      }, props.completedPauseMs ?? 4200)

      return () => {
        window.clearTimeout(holdTimeoutId)
      }
    }

    const delay =
      phase === 'typing'
        ? (props.typingDelayMs ?? 80)
        : (props.deletingDelayMs ?? 45)
    const timeoutId = window.setTimeout(() => {
      if (phase === 'typing') {
        const nextText = activePhrase.slice(0, displayText.length + 1)
        setDisplayText(nextText)

        if (nextText === activePhrase) {
          setPhase('holding')
        }

        return
      }

      if (displayText.length > 0) {
        setDisplayText(activePhrase.slice(0, displayText.length - 1))

        return
      }

      setActivePhraseIndex((currentIndex) =>
        currentIndex + 1 >= props.phrases.length ? 0 : currentIndex + 1,
      )
      setPhase('typing')
    }, delay)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [
    activePhrase,
    displayText,
    phase,
    props.completedPauseMs,
    props.deletingDelayMs,
    props.phrases.length,
    props.typingDelayMs,
  ])

  return (
    <Box
      sx={(theme) => ({
        color: theme.palette.primary.main,
        fontStyle: 'italic',
      })}
    >
      <Typography
        variant="siteDisplay"
        color="inherit"
        sx={(theme) => ({
          '&::after': {
            content: '"|"',
            opacity: phase === 'holding' ? 0 : 1,
            transition: theme.transitions.create(['opacity']),
          },
        })}
      >
        {displayText}
      </Typography>
    </Box>
  )
}
