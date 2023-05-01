import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'

import { repositoryName } from '../prismicio'
import '../styles/main.scss'
import { Layout } from '../components/layout/layout'
import { SiteContextProvider } from '../context/site-context'

/**
 * PrismicProvider distributes settings throughout your app.
 *
 * PrismicPreview enables previews.
 */

export default function App({ Component, pageProps }) {
  return (
    <SiteContextProvider>
      <Layout>
        <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
          <PrismicPreview repositoryName={repositoryName}>
            <Component {...pageProps} />
          </PrismicPreview>
        </PrismicProvider>
      </Layout>
    </SiteContextProvider>
  )
}
