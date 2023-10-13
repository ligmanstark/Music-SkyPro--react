const searchFunc = (functionOperator, functionValue, functionSetter) => {
  functionOperator(functionValue).then((data) => {
    const flat = [data.data].flat(1)
    return functionSetter(flat)
  })
}
export { searchFunc }
