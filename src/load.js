import { Location } from 'history'
import { Databeat } from '@databeat/tracker'

export const analytics = new Databeat('https://databeat.sequence.app', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJzZXEtZG9jcyIsImV4cCI6MTcxMjIxNDYzNn0.yIMP8g6Rk7izgoZFfH4FRa1YQYdY-9n9f1R99kx-u7E')

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname !== previousLocation?.pathname) {
    analytics.trackView()
  }
}

// export function onRouteUpdate({ location, previousLocation }) {
//   if (location.pathname !== previousLocation?.pathname) {
//     console.log('onRouteUpdate', location.pathname, previousLocation?.pathname)
//   }
//   return undefined
// }