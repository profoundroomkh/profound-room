export default function JournalArticleSchema({
  headline,
  description,
  url,
  keywords,
  datePublished = '2026-09-29',
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline,
        description,
        url,
        mainEntityOfPage: url,
        datePublished,
        dateModified: datePublished,
        inLanguage: 'zh-Hant',
        keywords,
        author: {
          '@type': 'Organization',
          name: 'PROFOUND ROOM 深寓',
          url: 'https://profoundroom.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'PROFOUND ROOM 深寓',
          url: 'https://profoundroom.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://profoundroom.com/images/profound-logo-symbol.png',
          },
        },
        image: 'https://profoundroom.com/images/og-image.jpg',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: '深寓 PROFOUND ROOM',
            item: 'https://profoundroom.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Journal／旅程',
            item: 'https://profoundroom.com/journal',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: headline,
            item: url,
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
