'use client'

import { trackEvent } from './analytics'

export default function TrackedLink({
  children,
  eventName = 'link_click',
  eventParameters = {},
  onClick,
  ...props
}) {
  const handleClick = (event) => {
    trackEvent(eventName, eventParameters)
    onClick?.(event)
  }

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  )
}
