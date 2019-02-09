let sortValue = localStorage.sortValue || 'name'

export function setSortValue(value) {
  sortValue = value
  localStorage.sortValue = value;
}

export function getSortValue() {
  return sortValue
}
