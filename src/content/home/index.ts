import { allHomeEntries } from 'content-collections'
import type { HomeEntryItem, HomeSection } from '#/types/home'

type HomeEntryDocument = (typeof allHomeEntries)[number]

type GroupedHomeEntry = {
  card?: HomeEntryDocument
  detailed?: HomeEntryDocument
}

type HomeEntryWithOrder = HomeEntryItem & {
  order: number
}

const getEntryKey = (document: HomeEntryDocument) => {
  return document._meta.path
    .replaceAll('\\', '/')
    .replace(/\/(card|detailed)$/, '')
}

const groups = new Map<string, GroupedHomeEntry>()

for (const document of allHomeEntries) {
  const entryKey = getEntryKey(document)
  const group = groups.get(entryKey) ?? {}

  if (document.kind === 'card') {
    group.card = document
  }

  if (document.kind === 'detailed') {
    group.detailed = document
  }

  groups.set(entryKey, group)
}

const toHomeEntryWithOrder = (
  section: HomeSection,
  key: string,
  group: GroupedHomeEntry,
): HomeEntryWithOrder | undefined => {
  if (!group.card) {
    throw new Error(`Missing card.md for ${key}`)
  }

  if (group.card.section !== section) {
    return undefined
  }

  return {
    key,
    order: group.card.order,
    period: group.card.period || undefined,
    card: group.card.content,
    detailed: group.detailed?.content,
  }
}

const isHomeEntryWithOrder = (
  item: HomeEntryWithOrder | undefined,
): item is HomeEntryWithOrder => {
  return Boolean(item)
}

const toSectionItems = (section: HomeSection) => {
  return [...groups.entries()]
    .map(([key, group]) => toHomeEntryWithOrder(section, key, group))
    .filter(isHomeEntryWithOrder)
    .sort((left, right) => left.order - right.order)
    .map((item) => ({
      key: item.key,
      period: item.period,
      card: item.card,
      detailed: item.detailed,
    }))
}

export const maintainedProjects = toSectionItems('maintained')
export const builtProjects = toSectionItems('built')
export const researchItems = toSectionItems('research')
export const experienceItems = toSectionItems('experience')
export const educationItems = toSectionItems('education')
