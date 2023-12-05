const compareNew = (a, b) => {
  var dateA = new Date(a.release_date)
  var dateB = new Date(b.release_date)

  return dateB - dateA
}

const compareOld = (a, b) => {
  var dateA = new Date(a.release_date)
  var dateB = new Date(b.release_date)

  return dateA - dateB
}
export { compareNew, compareOld }
