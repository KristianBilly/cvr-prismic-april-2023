import { PlaceholderRow } from '../../components/placeholder/placeholder-row'

const Placeholder = ({ slice }) => {
  const { items } = slice

  return (
    <>
      {items.map((row, index) => {
        return (
          <PlaceholderRow
            key={row.contentColumnOne + index}
            row={row}
          />
        )
      })}
    </>
  )
}

export default Placeholder
