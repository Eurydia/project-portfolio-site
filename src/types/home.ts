export type HomeSection =
  'maintained' | 'built' | 'research' | 'experience' | 'education'

export type HomeEntryItem = {
  key: string
  period?: string
  card: string
  detailed?: string
}
