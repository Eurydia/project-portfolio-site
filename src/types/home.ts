import type { MediaItem } from '#/types/media'

export type HomeEntryItem = {
  title: string
  period: string
  intro: string
  detail: string
  notes: readonly string[]
  tools: string
  details?: readonly string[]
  media?: readonly MediaItem[]
  imageSrc?: string
}

export type HomeExperienceItem = {
  title: string
  period: string
  organization: string
  details: readonly string[]
  imageSrc?: string
}
