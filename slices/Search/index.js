import { TextInput } from '../../components/other/text-input'
import { SearchResults } from '../../components/search/search-results'
import { useSiteContext } from '../../context/site-context'

const Search = ({ slice }) => {
  const { searchField, setSearchField } = useSiteContext()

  const { items } = slice

  return (
    <div className="search">
      <div className="search-container">
        <h2 className="search-title">Search the CVR</h2>
        <TextInput
          search
          type="search"
          value={searchField}
          placeholder="Write Company Name, Cvr Number or Address"
          onChange={(e) => setSearchField(e.target.value)}
          autoFocus
        />
        <SearchResults allCompanies={items} />
      </div>
    </div>
  )
}

export default Search
