import { SliceZone } from '@prismicio/react'
import { components } from '../slices'
import { createClient } from '../prismicio'

const Index = ({ page }) => {
  return (
    <SliceZone
      slices={page.data.slices}
      components={components}
    />
  )
}

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })
  const page = await client.getByUID('landing_page', 'home')

  return {
    props: {
      page,
    },
  }
}

export default Index
