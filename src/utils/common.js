import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import {RankScore, RankTitle} from "../const";


dayjs.extend(duration);

export const parseToMinAndHours = (minutes) => {
  const durationInMin = dayjs.duration(minutes, `m`);
  const hoursStr = durationInMin.hours() > 0 ? durationInMin.format(`H[h] `) : ``;
  const minutesStr = durationInMin.format(`m[m]`);
  return `${hoursStr}${minutesStr}`;
};

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const generateUniqueItems = (items) => {
  const randomLength = getRandomInteger(1, items.length - 1);
  const uniqueItems = [];
  for (let i = 0; i <= randomLength; i++) {
    const randomIndex = getRandomInteger(0, items.length - 1);
    uniqueItems.push(items[randomIndex]);
  }

  return Array.from(new Set(uniqueItems));
};

export const getUserRank = (films) => {
  const totalWatch = films.reduce((count, film) => count + Number(film.isWatched), 0);

  if (totalWatch >= RankScore.NOVICE.MIN && totalWatch <= RankScore.NOVICE.MAX) {
    return RankTitle.NOVICE;
  } else if (totalWatch >= RankScore.FAN.MIN && totalWatch <= RankScore.FAN.MAX) {
    return RankTitle.FAN;
  } else if (totalWatch > RankScore.FAN.MAX) {
    return RankTitle.MOVIE_BUFF;
  } else {
    return RankTitle.NONE;
  }
};

