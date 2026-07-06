import { useState } from 'react'

type UseVisibleItemsOptions = {
  initialVisibleItems?: number
  visibleItemIncrement?: number
}

export const useVisibleItems = <T>(
  items: readonly T[],
  options?: UseVisibleItemsOptions,
) => {
  const initialVisibleItems = options?.initialVisibleItems ?? 2
  const visibleItemIncrement = options?.visibleItemIncrement ?? 5
  const [visibleCount, setVisibleCount] = useState(initialVisibleItems)
  const visibleItems = items.slice(0, visibleCount)
  const hiddenCount = items.length - visibleItems.length
  const nextVisibleCount = Math.min(hiddenCount, visibleItemIncrement)

  const showMore = () => {
    setVisibleCount((currentCount) =>
      Math.min(items.length, currentCount + visibleItemIncrement),
    )
  }

  return { hiddenCount, nextVisibleCount, showMore, visibleItems }
}
