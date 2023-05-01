import { createClient } from '../../prismicio'
import { SliceZone } from '@prismicio/react'
import { components } from '../../slices'
import * as prismicH from '@prismicio/helpers'

const Company = ({ page }) => {
  return (
    <SliceZone
      slices={page.data.slices}
      components={components}
    />
  )
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })
  const page = await client.getByUID('company_page', params.uid)

  return {
    props: {
      page,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()
  const pages = await client.getAllByType('company_page')
  const paths = pages.map((page) => prismicH.asLink(page))

  return {
    paths: paths,
    fallback: false,
  }
}

export default Company
