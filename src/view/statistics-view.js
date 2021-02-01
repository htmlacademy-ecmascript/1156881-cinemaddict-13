import Chart from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import duration from "dayjs/plugin/duration";

import Smart from "./smart-view";
import {getUserRank} from "../utils/common";


dayjs.extend(isBetween);
dayjs.extend(duration);

const StatisticPeriod = {
  ALL_TIME: `all-time`,
  TODAY: `today`,
  WEEK: `week`,
  MONTH: `month`,
  YEAR: `year`,
};
export default class StatisticsView extends Smart {
  constructor(filmsModel) {
    super();
    this._filmsModel = filmsModel;
    this._activeFilter = StatisticPeriod.ALL_TIME;
    this._filmsChart = null;
    this._setOnFilterChange = this._setOnFilterChange.bind(this);
    this.restoreHandlers();
  }

  getTemplate() {
    const statistic = this._getFilmsDataByFilter(this._activeFilter);
    const {watchedFilmsCount, userRank, totalDuration, topGenre, activeFilter} = statistic;
    const {hours, minutes} = dayjs.duration(totalDuration, `minutes`).$d;
    const userRankTemplate = this._getUserRankTemplate(userRank);
    const statsTemplate = this._createStatsTemplate(activeFilter);
    return `<section class="statistic">
    ${userRankTemplate}
    <form action="https://echo.htmlacademy.ru/" method="get" class="statistic__filters">
      <p class="statistic__filters-description">Show stats:</p>
      ${statsTemplate}
    </form>

    <ul class="statistic__text-list">
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">You watched</h4>
        <p class="statistic__item-text">${watchedFilmsCount} <span class="statistic__item-description">movies</span></p>
      </li>
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">Total duration</h4>
        <p class="statistic__item-text">${hours} <span class="statistic__item-description">h</span> ${minutes} <span class="statistic__item-description">m</span></p>
      </li>
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">Top genre</h4>
        <p class="statistic__item-text">${topGenre}</p>
      </li>
    </ul>

    <div class="statistic__chart-wrap">
      <canvas class="statistic__chart" width="1000"></canvas>
    </div>

    </section>`;
  }

  _getUserRankTemplate(rank) {
    return rank ? `<p class="statistic__rank">
        Your rank
        <img class="statistic__img" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
        <span class="statistic__rank-label">${rank}</span>
      </p>` : ``;
  }

  _createStatTemplate(statPeriod, activeFilter) {
    const getCheckedStatus = (filter) => activeFilter === filter ? `checked` : ``;
    return `<input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-${statPeriod}" value="${statPeriod}" ${getCheckedStatus(statPeriod)}>
    <label for="statistic-${statPeriod}" class="statistic__filters-label">${statPeriod === StatisticPeriod.ALL_TIME ? `All time` : statPeriod[0].toUpperCase() + statPeriod.slice(1)}</label>`;
  }

  _createStatsTemplate(activeFilter) {
    return Object.values(StatisticPeriod).map((period) => this._createStatTemplate(period, activeFilter)).join(``);
  }

  restoreHandlers() {
    this._setOnFilterChange();
    this._setChart();
  }

  _setOnFilterChange() {
    this.getElement().querySelectorAll(`.statistic__filters-input`).forEach((element) => element.addEventListener(`change`, (evt) => {
      this._activeFilter = evt.target.value;
      this.updateElement();
    }));
  }

  _getFilmsDataByFilter(activeFilter) {
    const films = this._filmsModel.films;
    const currentDate = dayjs();
    const weekAgoDate = dayjs().subtract(7, `day`).toDate();
    const monthAgoDate = dayjs().subtract(1, `month`).toDate();
    const yearAgoDate = dayjs().subtract(1, `year`).toDate();
    let filmsWatched = [];

    switch (activeFilter) {
      case StatisticPeriod.ALL_TIME:
        filmsWatched = films
          .filter((film) => film.isWatched);
        break;

      case StatisticPeriod.TODAY:
        filmsWatched = films
          .filter((film) => film.isWatched && dayjs(film.watchedDate).isSame(currentDate, `day`));
        break;

      case StatisticPeriod.WEEK:
        filmsWatched = films
          .filter((film) => film.isWatched && dayjs(film.watchedDate).isBetween(weekAgoDate, currentDate));
        break;

      case StatisticPeriod.MONTH:
        filmsWatched = films
          .filter((film) => film.isWatched && dayjs(film.watchedDate).isBetween(monthAgoDate, currentDate));
        break;

      case StatisticPeriod.YEAR:
        filmsWatched = films
          .filter((film) => film.isWatched && dayjs(film.watchedDate).isBetween(yearAgoDate, currentDate));
        break;
    }

    const watchedFilmsCount = filmsWatched.length;
    const userRank = getUserRank(this._filmsModel.films);
    const totalDuration = filmsWatched.reduce((count, film) => count + film.runtime, 0);
    const allFilmsGenres = filmsWatched.reduce((allGenres, film) => {
      allGenres.push(...film.genres);
      return allGenres;
    }, []);

    let genresList = new Map();

    allFilmsGenres.forEach((genre) => {
      if (genresList.has(genre)) {
        let genreCount = genresList.get(genre);

        genresList.set(genre, ++genreCount);
      } else {
        genresList.set(genre, 1);
      }
    });

    genresList = new Map([...genresList.entries()].sort((genreA, genreB) => genreB[1] - genreA[1]));
    const topGenre = genresList.size > 0 ? genresList.keys().next().value : ``;

    return {
      watchedFilmsCount,
      userRank,
      totalDuration,
      genresList,
      topGenre,
      activeFilter
    };
  }

  _renderStatitsicsChart(statisticCtx, genresList) {
    return new Chart(statisticCtx, {
      plugins: [ChartDataLabels],
      type: `horizontalBar`,
      data: {
        labels: [...genresList.keys()],
        datasets: [{
          data: [...genresList.values()],
          backgroundColor: `#ffe800`,
          hoverBackgroundColor: `#ffe800`,
          anchor: `start`,
          barThickness: 24
        }]
      },
      options: {
        plugins: {
          datalabels: {
            font: {
              size: 20
            },
            color: `#ffffff`,
            anchor: `start`,
            align: `start`,
            offset: 40,
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: `#ffffff`,
              padding: 100,
              fontSize: 20
            },
            gridLines: {
              display: false,
              drawBorder: false
            },
          }],
          xAxes: [{
            ticks: {
              display: false,
              beginAtZero: true
            },
            gridLines: {
              display: false,
              drawBorder: false
            },
          }],
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        }
      }
    });
  }

  _setChart() {
    if (this._statisticChart) {
      this._statisticChart = null;
    }
    const BAR_HEIGHT = 50;
    const statisticCtx = this.getElement().querySelector(`.statistic__chart`);
    const {genresList} = this._getFilmsDataByFilter(this._activeFilter);
    statisticCtx.height = BAR_HEIGHT * genresList.size;
    this._renderStatitsicsChart(statisticCtx, genresList);
  }
}
