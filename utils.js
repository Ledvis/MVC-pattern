function getDateFromBDay(bdate) {
  if (!bdate) {
    return null
  }

  const [day, month] = bdate.split('.');
  const date = new Date();
  date.setDate(day);
  date.setMonth(month - 1);

  return date;
}

function getNameForCompare(friend) {
  let name = ''

  if (friend.first_name) name += friend.first_name
  if (friend.last_name) name += friend.last_name

  return name
}

export function sortByName(list) {
  return list.sort((a, b) => {
    const aName = getNameForCompare(a);
    const bName = getNameForCompare(b);

    return aName.localeCompare(bName)
  })
}

export function sortByBDay(list) {
  return list.sort((a, b) => {
    if (!a.bdate) {
      return 1
    } else if (!b.bdate) {
      return -1
    }

    const aDate = getDateFromBDay(a.bdate)
    const bDate = getDateFromBDay(b.bdate)

    return aDate - bDate;
  })
}