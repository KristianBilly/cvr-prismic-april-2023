import { useState } from 'react'
import { VirkopediaArticle } from '../../components/virkopedia/virkopedia-article'
import { VirkopediaTab } from '../../components/virkopedia/virkopedia-tab'
import { API_ENDPOINT } from '../../constants/constants'
import { createClient } from '../../prismicio'
import { SliceZone } from '@prismicio/react'
import { components } from '../../slices'

const Virkopedia = ({ page }) => {
  return (
    <SliceZone
      slices={page.data.slices}
      components={components}
    />
  )
}

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })

  const page = await client.getByUID('landing_page', 'virkopedia')

  return {
    props: {
      page,
    },
  }
}

export default Virkopedia
