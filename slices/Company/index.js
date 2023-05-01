const Company = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
      Placeholder component for company (variation: {slice.variation}) Slices
    </section>
  )
}

export default Company
