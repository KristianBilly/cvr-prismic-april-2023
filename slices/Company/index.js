import Link from 'next/link'
import { SEARCH_PATH } from '../../constants/constants'
import { getConvertedCompanyData } from '../../utils'
import { CompanyTable } from '../../components/company/company-table'

const Company = ({ slice }) => {
  const { primary: selectedCompany } = slice

  const formattedCompany = getConvertedCompanyData(selectedCompany)
  const companyName = selectedCompany?.companyName

  if (!formattedCompany) return <h2>No companies found...</h2>

  return (
    <section className="company-page">
      <Link
        className="back-to-search"
        href={SEARCH_PATH}>
        Back to search
      </Link>
      <h2> {companyName} </h2>
      <CompanyTable company={formattedCompany} />
    </section>
  )
}

export default Company
