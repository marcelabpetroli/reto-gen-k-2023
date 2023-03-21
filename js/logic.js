function calculateIntervalDays(fromDate, toDate = '10/03/2023') {
  const oneDay = 24 * 60 * 60 * 1000;

  const date1 = dateCreator(fromDate);
  const date2 = dateCreator(toDate);

  const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
  return diffDays * (date1 < date2 ? 1 : -1);
}

function dateCreator(date) {
  const parts = date.split('/');
  return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
}

function removeVocalsAndSpaces(name) {
  return name
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replaceAll(' ', '')
    .replace(/[aeiou]/gi, '');
}

module.exports = [calculateIntervalDays, removeVocalsAndSpaces];
