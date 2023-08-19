const ItemFilter = (props) => {
  const { author } = props

  return (
    <div className="">
      <a className="track__author-link" href="http://">
        {author}
      </a>
    </div>
  )
}

export { ItemFilter }
