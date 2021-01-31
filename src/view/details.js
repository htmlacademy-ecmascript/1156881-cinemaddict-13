import Abstract from "../view/abstract";
import dayjs from "dayjs";
import {parseToMinAndHours} from "../utils/common";


export default class Details extends Abstract {
  constructor(film) {
    super();
    this._film = film;
    this._onCloseDetails = this._onCloseDetails.bind(this);
    // this.setOnFormSubmit(this._callback.formSubmit);
    this.setOnCloseBtn(this._callback.closeDetails);
  }

  getTemplate() {
    const {poster, ageRating, title, originalTitle, rating, producer, screenwriters, cast, release, runtime, genres, description} = this._film;

    return `<section class="film-details">
    <form class="film-details__inner" action="" method="get">
      <div class="film-details__top-container">
        <div class="film-details__close">
          <button class="film-details__close-btn" type="button">close</button>
        </div>
        <div class="film-details__info-wrap">
          <div class="film-details__poster">
            <img class="film-details__poster-img" src="${poster}" alt="">

            <p class="film-details__age">${ageRating}</p>
          </div>

          <div class="film-details__info">
            <div class="film-details__info-head">
              <div class="film-details__title-wrap">
                <h3 class="film-details__title">${title}</h3>
                <p class="film-details__title-original">Original: ${originalTitle}</p>
              </div>

              <div class="film-details__rating">
                <p class="film-details__total-rating">${rating}</p>
              </div>
            </div>

            <table class="film-details__table">
              <tr class="film-details__row">
                <td class="film-details__term">Director</td>
                <td class="film-details__cell">${producer}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Writers</td>
                <td class="film-details__cell">${screenwriters}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Actors</td>
                <td class="film-details__cell">${cast}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Release Date</td>
                <td class="film-details__cell">${dayjs(release.date).format(`DD MMMM YYYY`)}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Runtime</td>
                <td class="film-details__cell">${parseToMinAndHours(runtime)}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Country</td>
                <td class="film-details__cell">${release.releaseCountry}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Genres</td>
                <td class="film-details__cell">
                  ${genres.map((genre) => `<span class="film-details__genre">${genre}</span>`).join(` `)}
                </td>
              </tr>
            </table>

            <p class="film-details__film-description">${description}</p>
          </div>
        </div>
      </div>

      <div class="film-details__bottom-container">
        <section class="film-details__comments-wrap"></section>
      </div>
    </form>
  </section>`;
  }

  get controlsElement() {
    return this.getElement().querySelector(`.film-details__top-container`);
  }
  get commentWrap() {
    return this.getElement().querySelector(`.film-details__comments-wrap`);
  }

  get commentList() {
    return this.getElement().querySelector(`.film-details__comments-list`);
  }

  // _onFormSubmit(evt) {
  //   evt.preventDefault();
  //   this._callback.formSubmit(Details.parseDataToFilm);
  // }

  _onCloseDetails(evt) {
    evt.preventDefault();
    this._callback.closeDetails();
  }

  // setOnFormSubmit(callback) {
  //   this._callback.formSubmit = callback;

  //   this.getElement().querySelector(`form`).addEventListener(`keydown`, (evt) => {
  //     if (evt.keyCode === 13 && evt.metaKey) {
  //       const target = evt.target;
  //       if (target.form) {
  //         this._onFormSubmit(evt);
  //       }
  //     }
  //   });
  // }

  setOnCloseBtn(callback) {
    this._callback.closeDetails = callback;
    this.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, this._onCloseDetails);
  }
}
