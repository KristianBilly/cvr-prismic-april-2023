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
