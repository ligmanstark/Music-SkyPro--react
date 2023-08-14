const searchID = (data, searchName = '') => {
  const found = data.find((e) => e.name === searchName)
  return found
}

export { searchID }
