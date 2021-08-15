const Seo = {
  openGraph: {
    type: 'website',
    url: `https://${process.env.domain}`,
    site_name: 'Melishev ™',
    title: 'Home | Melishev',
    description: 'Melishev ™ is a space where works, news and products created by creative and talented people are demonstrated.',
    images: [
      {
        url: 'https://melishev.ru/image/ogImage.jpg',
        width: 1200,
        height: 630,
        alt: 'Community',
      },
    ],
  },
  twitter: {
    site: '@melishev',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: 'https://melishev.ru/favicon.ico',
    },
  ],
}

export default Seo