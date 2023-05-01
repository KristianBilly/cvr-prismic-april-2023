import { PlaceholderRow } from '../../components/placeholder/placeholder-row'

/**
 * @typedef {import("@prismicio/client").Content.PlaceholderSlice} PlaceholderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PlaceholderSlice>} PlaceholderProps
 * @param {PlaceholderProps}
 */
const Placeholder = ({ slice }) => {
  console.log(slice)

  return (
    <>
      {/* {landingPageRows.map((row, index) => {
        return (
          <PlaceholderRow
            key={row.contentColumnOne + index}
            row={row}
          />
        )
      })} */}
      <p>Hej</p>
    </>
  )
}

export default Placeholder
