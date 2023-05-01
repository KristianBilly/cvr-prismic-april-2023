import { SliceZone } from '@prismicio/react'

import { createClient } from '../../prismicio'
import { components } from '../../slices'

const SearchWrapper = ({ page }) => {
  console.log(page)
  return (
    <SliceZone
      slices={page.data.slices}
      components={components}
    />
  )
}

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })

  const page = await client.getByUID('landing_page', 'search')

  return {
    props: {
      page,
    },
  }
}

export default SearchWrapper
