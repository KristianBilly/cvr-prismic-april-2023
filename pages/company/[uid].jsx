import { getConvertedCompanyData } from '../../utils/get-converted-company-data'
import { CompanyTable } from '../../components/company/company-table'
import Link from 'next/link'
import { SEARCH_PATH } from '../../constants/constants'
import { createClient } from '../../prismicio'
import { SliceSimulator } from '@prismicio/slice-simulator-react'
import { SliceZone } from '@prismicio/react'
import { components } from '../../slices'
import * as prismicH from '@prismicio/helpers'

const Company = ({ page }) => {
  console.log('company-page', page)
  return (
    <SliceZone
      slices={page.data.slice}
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
