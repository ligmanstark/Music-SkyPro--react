const ItemFilter = (props) => {
  const { author } = props

  return (
    <div className="">
      <a className="track__author-link filter-list" href="http://">
        {author}
      </a>
    </div>
  )
}

export { ItemFilter }
