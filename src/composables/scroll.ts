import type { Ref } from 'vue'

export const useScroll = (element: Ref<HTMLElement | undefined>) => {
  const scrollToY = (to: number | 'bottom', delay = 0) => {
    if (element.value) {
      let y = 0

      if (to === 'bottom')
        y = element.value.scrollHeight
      else
        y = to

      setTimeout(() => {
        element.value!.scrollTop = y
      }, delay)
    }
  }

  return { scrollToY }
}
