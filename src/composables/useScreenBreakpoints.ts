import { breakpointsTailwind } from '@vueuse/core'

export function useScreenBreakpoints () {
  const breakpoints = useBreakpoints(breakpointsTailwind)

  const isMobile = breakpoints.smaller('sm')
  const isSmallScreen = breakpoints.smaller('lg')
  const isDesktop = breakpoints.greater('sm')

  return {
    breakpoints,

    isMobile,
    isSmallScreen,
    isDesktop
  }
}
