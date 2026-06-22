import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSeoForPath, SITE_NAME } from '../../seo'

const upsertMeta = (attribute, key, content) => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)

  if (!content) {
    element?.remove()
    return
  }

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

const upsertCanonical = (href) => {
  let element = document.head.querySelector('link[rel="canonical"]')
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

const updateJsonLd = (items) => {
  document.head.querySelectorAll('script[data-seo-json-ld]').forEach((node) => node.remove())
  items.forEach((item) => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.seoJsonLd = 'true'
    script.textContent = JSON.stringify(item)
    document.head.appendChild(script)
  })
}

export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const seo = getSeoForPath(pathname)
    document.title = seo.title
    upsertCanonical(seo.canonical)

    upsertMeta('name', 'description', seo.description)
    upsertMeta('name', 'robots', seo.robots)
    upsertMeta('property', 'og:type', seo.type)
    upsertMeta('property', 'og:title', seo.title)
    upsertMeta('property', 'og:description', seo.description)
    upsertMeta('property', 'og:image', seo.image)
    upsertMeta('property', 'og:image:alt', seo.imageAlt)
    upsertMeta('property', 'og:image:width', seo.imageWidth)
    upsertMeta('property', 'og:image:height', seo.imageHeight)
    upsertMeta('property', 'og:url', seo.canonical)
    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:locale', 'en_GH')
    upsertMeta('property', 'article:published_time', seo.publishedTime)
    upsertMeta('property', 'article:section', seo.section)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', seo.title)
    upsertMeta('name', 'twitter:description', seo.description)
    upsertMeta('name', 'twitter:image', seo.image)
    upsertMeta('name', 'twitter:image:alt', seo.imageAlt)
    updateJsonLd(seo.jsonLd)
  }, [pathname])

  return null
}
