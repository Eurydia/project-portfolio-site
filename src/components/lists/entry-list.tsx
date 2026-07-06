import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { BulletList } from '#/components/common/bullet-list'
import { SectionLabel } from '#/components/common/section-label'
import { ShowMore } from '#/components/common/show-more'
import { ListCard, ListCardIndex } from '#/components/lists/list-card'
import { useVisibleItems } from '#/hooks/use-visible-items'
import type { FC } from 'react'
import type { HomeEntryItem } from '#/types/home'

export const EntryList: FC<{
  items: readonly HomeEntryItem[]
  initialVisibleItems?: number
  visibleItemIncrement?: number
}> = (props) => {
  const { hiddenCount, nextVisibleCount, showMore, visibleItems } =
    useVisibleItems(props.items, {
      initialVisibleItems: props.initialVisibleItems,
      visibleItemIncrement: props.visibleItemIncrement,
    })

  return (
    <Stack spacing={3} useFlexGap>
      {visibleItems.map((item, index) => (
        <ListCard key={item.title}>
          <Stack spacing={3} useFlexGap>
            <ListCardIndex
              value={String(index + 1).padStart(2, '0')}
              label={item.period}
            />
            <Stack spacing={1} useFlexGap>
              <Typography variant="siteTitle">{item.title}</Typography>
            </Stack>
            <Typography variant="siteCopy" color="textSecondary">
              {item.intro}
            </Typography>
            <BulletList items={item.notes} />
            <Stack
              spacing={1}
              useFlexGap
              sx={(theme) => ({
                borderTop: `1px solid ${theme.palette.divider}`,
                paddingTop: theme.spacing(1.75),
              })}
            >
              <SectionLabel>Stack</SectionLabel>
              <Typography variant="siteFine" color="textSecondary">
                {item.tools}
              </Typography>
            </Stack>
          </Stack>
        </ListCard>
      ))}
      <ShowMore
        hiddenCount={hiddenCount}
        nextVisibleCount={nextVisibleCount}
        onClick={showMore}
      />
    </Stack>
  )
}
