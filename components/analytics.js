'use client'

export function trackEvent(eventName, parameters = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return

  window.gtag('event', eventName, {
    ...parameters,
  })
}

export function trackReservationIntent(source, parameters = {}) {
  trackEvent('reservation_intent', {
    source,
    ...parameters,
  })
}

export function trackSocialClick(platform, source) {
  trackEvent('social_click', {
    platform,
    source,
  })
}

export function trackLanguageSwitch(language, source) {
  trackEvent('language_switch', {
    language,
    source,
  })
}

export function trackMenuClick(item, path) {
  trackEvent('menu_click', {
    item,
    path,
  })
}

export function trackContentClick(contentType, source) {
  trackEvent('content_click', {
    content_type: contentType,
    source,
  })
}

export function trackMapClick(source) {
  trackEvent('location_map_click', {
    source,
  })
}

export function trackTemplateCopy(source, parameters = {}) {
  trackEvent('reservation_template_copy', {
    source,
    ...parameters,
  })
}

export function trackAgeConfirmation() {
  trackEvent('age_confirmation', {
    source: 'age_gate',
  })
}

export default trackEvent

