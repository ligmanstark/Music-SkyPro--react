const searchID = (data, searchName = '', attr) => {
  const found = data.find((e) => e.name === searchName)

  if (!found) {
    const found = data.find((e) => e.author === searchName)
    return found
  } else return found
}

export { searchID }
