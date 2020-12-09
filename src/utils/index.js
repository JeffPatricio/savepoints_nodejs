const isEmpty = (...data) => {
  return data.some(value => value === '' || value === null || !value);
}

module.exports = {
  isEmpty
}