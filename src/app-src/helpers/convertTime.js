const convertTime = (sec) => {
  const second = sec % 60
  const minutes = (sec / 60) % 60
  return Math.trunc(minutes) + ':' + Math.trunc(second)
}
export { convertTime }
