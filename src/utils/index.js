import { getHours, getMinutes } from 'date-fns';

const inflectNoun = (number, one, two, five) => {
  let num = Math.abs(number);

  num %= 100;
  if (num >= 5 && num <= 20) return five;

  num %= 10;
  if (num === 1) return one;
  if (num >= 2 && num <= 4) return two;

  return five;
};

export const formatDataTime = (data, char = null) => {
  if (char) {
    return `${data.toString().padStart(2, '0')}${char}`;
  }

  return `${data.toString().padStart(2, '0')}`;
};

export const getTransfers = (transfers) => {
  if (transfers > 0) {
    return `${transfers} ${inflectNoun(transfers, 'пересадка', 'пересадки', 'пересадок')}`;
  }

  return 'Без пересадок';
};

export const getFormatedTime = (timestamp) => {
  const time = new Date(timestamp);

  return `${formatDataTime(getHours(time))}:${formatDataTime(getMinutes(time))}`;
};
