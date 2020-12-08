/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t.$i||(t(e,S,v),t.$i=!0),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_user_rank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/user-rank */ "./src/view/user-rank.js");
/* harmony import */ var _view_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/filter */ "./src/view/filter.js");
/* harmony import */ var _view_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/sort */ "./src/view/sort.js");
/* harmony import */ var _view_films__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/films */ "./src/view/films.js");
/* harmony import */ var _view_films_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/films-list */ "./src/view/films-list.js");
/* harmony import */ var _view_film_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/film-card */ "./src/view/film-card.js");
/* harmony import */ var _view_show_more_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/show-more-button */ "./src/view/show-more-button.js");
/* harmony import */ var _view_films_extra__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/films-extra */ "./src/view/films-extra.js");
/* harmony import */ var _view_footer_statistics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/footer-statistics */ "./src/view/footer-statistics.js");
/* harmony import */ var _view_details__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/details */ "./src/view/details.js");
/* harmony import */ var _mock_film__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mock/film */ "./src/mock/film.js");
/* harmony import */ var _mock_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mock/filter */ "./src/mock/filter.js");














const NUM_CARDS_OF_EXTRA_FILM = 2;
const NUM_OF_FILMS = 20;
const NUM_RENDER_CARDS = 5;
const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);
const footerElement = document.querySelector(`.footer`);
let films = [];
let extraFilms = [];
let filmsToRender = [];

for (let i = 0; i < NUM_OF_FILMS; i++) {
  films.push(Object(_mock_film__WEBPACK_IMPORTED_MODULE_10__["generateFilm"])());
}
extraFilms = films.slice(0, NUM_CARDS_OF_EXTRA_FILM);
filmsToRender = films.slice(NUM_RENDER_CARDS, NUM_OF_FILMS);
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

render(headerElement, Object(_view_user_rank__WEBPACK_IMPORTED_MODULE_0__["createUserRankTemplate"])(), `beforeend`);
render(mainElement, Object(_view_filter__WEBPACK_IMPORTED_MODULE_1__["createFilterTemplate"])(Object(_mock_filter__WEBPACK_IMPORTED_MODULE_11__["generateFilter"])(films)), `beforeend`);
render(mainElement, Object(_view_sort__WEBPACK_IMPORTED_MODULE_2__["createSortTemplate"])(), `beforeend`);
render(mainElement, Object(_view_films__WEBPACK_IMPORTED_MODULE_3__["createFilmsTemplate"])(), `beforeend`);

const filmsElement = mainElement.querySelector(`.films`);
render(filmsElement, Object(_view_films_list__WEBPACK_IMPORTED_MODULE_4__["createFilmsListTemplate"])(), `beforeend`);

const filmsListContainerElement = filmsElement.querySelector(`.films-list__container`);
for (let film of films.slice(0, NUM_RENDER_CARDS)) {
  render(filmsListContainerElement, Object(_view_film_card__WEBPACK_IMPORTED_MODULE_5__["createFilmCardTemplate"])(film), `beforeend`);
}

render(filmsListContainerElement, Object(_view_show_more_button__WEBPACK_IMPORTED_MODULE_6__["createMoreButtonTemplate"])(), `afterend`);

const showMoreButtonElement = filmsElement.querySelector(`.films-list__show-more`);
showMoreButtonElement.addEventListener(`click`, () => {
  for (let film of filmsToRender.slice(0, NUM_RENDER_CARDS)) {
    render(filmsListContainerElement, Object(_view_film_card__WEBPACK_IMPORTED_MODULE_5__["createFilmCardTemplate"])(film), `beforeend`);
  }
  filmsToRender.splice(0, NUM_RENDER_CARDS);
  if (filmsToRender.length === 0) {
    showMoreButtonElement.classList.add(`visually-hidden`);
  }
});

render(filmsElement, Object(_view_films_extra__WEBPACK_IMPORTED_MODULE_7__["createFilmsExtraTemplate"])(), `beforeend`);
const filmsListExraElement = filmsElement.querySelector(`.films-list--extra`);
const filmsListExraContainerElement = filmsListExraElement.querySelector(`.films-list__container`);

for (let film of extraFilms) {
  render(filmsListExraContainerElement, Object(_view_film_card__WEBPACK_IMPORTED_MODULE_5__["createFilmCardTemplate"])(film), `beforeend`);
}

const footerStatisticsElement = footerElement.querySelector(`.footer__statistics`);
render(footerStatisticsElement, Object(_view_footer_statistics__WEBPACK_IMPORTED_MODULE_8__["createFooterStatisticsTemplate"])(films.length), `beforeend`);
render(document.body, Object(_view_details__WEBPACK_IMPORTED_MODULE_9__["createDetailsTemplate"])(films[0]), `beforeend`);

const detailsElement = document.querySelector(`.film-details`);
detailsElement.classList.add(`visually-hidden`);

// Временное решение для открытия попапа
filmsListContainerElement.firstElementChild.addEventListener(`click`, () => {
  detailsElement.classList.remove(`visually-hidden`);
});
// Временное решение для закрытия попапа
const detailsCloseButtonElement = detailsElement.querySelector(`.film-details__close-btn`);
detailsCloseButtonElement.addEventListener(`click`, () => {
  detailsElement.classList.add(`visually-hidden`);
});


/***/ }),

/***/ "./src/mock/film.js":
/*!**************************!*\
  !*** ./src/mock/film.js ***!
  \**************************/
/*! exports provided: generateFilm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilm", function() { return generateFilm; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);



const MAX_NUM_SEN_SHORT_DESCRIPTION = 5;
const MIN_NUM_SEN_FULL_DESCRIPTION = 5;
const MAX_NUM_SEN_FULL_DESCRIPTION = 11;
const MAX_HOURS_DURATION = 2;
const MAX_MIN_DURATION = 59;
const MAX_NUM_OF_COMMENTS = 5;
const MIN_NUM_OF_RATING = 7;
const MAX_NUM_OF_RATING = 10;
const FILMS_AGE_RATING_MULTIPLY = 4;
const MAX_NUM_OF_GENRE = 3;
const FILMS_GENRE = [
  `Action`,
  `Comedy`,
  `Drama`,
  `Fantasy`,
  `Horror`,
  `Mystery`,
  `Romance`,
  `Thriller`
];
const FILM_DESCRIPTIONS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];
const FILMS_POSTER = [
  `./images/posters/made-for-each-other.png`,
  `./images/posters/popeye-meets-sinbad.png`,
  `./images/posters/sagebrush-trail.jpg`,
  `./images/posters/santa-claus-conquers-the-martians.jpg`,
  `./images/posters/the-dance-of-life.jpg`,
  `./images/posters/the-great-flamarion.jpg`,
  `./images/posters/the-man-with-the-golden-arm.jpg`,
];
const FILMS_TITLE = [
  `Raging Bull`,
  `Amelie`,
  `Titanic`,
  `Good Will Hunting`,
  `Arrival`
];
const FILMS_PRODUCER = [
  `Michael Mann`,
  `James Cameron`,
  `Steven Spielberg`,
  `Spike Lee`,
  `Tony Scott`,
  `John Singleton`,
  `Richard Donner`,
  `Quentin Tarantino`,
  `George Lucas`,
  `Martin Scorsese`,
  `Jerry Bruckheimer`,
  `Jim Henson`
];
const FILMS_SCREENWRITER = [
  `Billy Wilder`,
  `Joel Coen`,
  `Robert Towne`,
  `Quentin Tarantino`,
  `Francis Ford Coppola`,
  `William Goldman`,
  `Charlie Kaufman`,
  `Quentin Tarantino`,
  `Woody Allen`,
  `Nora Ephron`,
  `Ernest Lehman`,
  `Jim Henson`
];
const FILMS_COUNTRY = [
  `Germany`,
  `France`,
  `United Kingdom`,
  `Thailand`,
  `Italy`,
  `South Africa`,
  `South Korea`,
  `Russia`,
  `USA`
];
const FILMS_CAST = [
  `Johnny Depp, Al Pacino, Robert De Niro`,
  `Kevin Spacey, Denzel Washington, Russell Crowe`,
  `Johnny Depp, Brad Pitt, Angelina Jolie`
];

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const generateNumOfComments = () => {
  return getRandomInteger(0, MAX_NUM_OF_COMMENTS);
};

const generateTitle = () => {
  return FILMS_TITLE[getRandomInteger(0, FILMS_TITLE.length - 1)];
};

const generatePoster = () => {
  return FILMS_POSTER[getRandomInteger(0, FILMS_POSTER.length - 1)];
};

const generateProducer = () => {
  return FILMS_PRODUCER[getRandomInteger(0, FILMS_PRODUCER.length - 1)];
};

const generateScreenwriter = () => {
  return FILMS_SCREENWRITER[getRandomInteger(0, FILMS_SCREENWRITER.length - 1)];
};

const generateCountry = () => {
  return FILMS_COUNTRY[getRandomInteger(0, FILMS_COUNTRY.length - 1)];
};

const generateCast = () => {
  return FILMS_CAST[getRandomInteger(0, FILMS_CAST.length - 1)];
};

const generateGenreCard = () => {
  return FILMS_GENRE[getRandomInteger(1, FILMS_GENRE.length - 1)];
};

const generateGenreDetails = () => {
  let detailsGenre = ``;
  for (let i = 0; i < getRandomInteger(1, MAX_NUM_OF_GENRE); i++) {
    detailsGenre += `<span class="film-details__genre">${FILMS_GENRE[getRandomInteger(0, FILMS_GENRE.length - 1)]}</span>`;
  }
  return detailsGenre;
};

const generateAgeRating = () => {
  return getRandomInteger(1, FILMS_AGE_RATING_MULTIPLY) * FILMS_AGE_RATING_MULTIPLY + `+`;
};

const generateDuration = () => {
  return `${getRandomInteger(0, MAX_HOURS_DURATION)}h ${getRandomInteger(0, MAX_MIN_DURATION)}m`;
};

const generateDescription = () => {
  const numOfSentence = getRandomInteger(1, MAX_NUM_SEN_SHORT_DESCRIPTION);
  let filmDescription = ``;

  for (let i = 0; i < numOfSentence; i++) {
    filmDescription += FILM_DESCRIPTIONS[getRandomInteger(0, FILM_DESCRIPTIONS.length - 1)] + ` `;
  }
  return filmDescription;
};

const generateFullDescription = () => {
  const numOfSentence = getRandomInteger(MIN_NUM_SEN_FULL_DESCRIPTION, MAX_NUM_SEN_FULL_DESCRIPTION);
  let filmDescription = ``;

  for (let i = 0; i < numOfSentence; i++) {
    filmDescription += FILM_DESCRIPTIONS[getRandomInteger(0, FILM_DESCRIPTIONS.length - 1)] + ` `;
  }
  return filmDescription;
};

const generateDate = () => {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(getRandomInteger(1, 5), `h`).format(`YYYY/MM/DD hh:mm`);
};

const generateFilmComments = (numOfComments) => {
  let filmComments = [];
  const commentText = [
    `Good film`,
    `Amazing movie`,
    `That's awesome film`,
    `I don't like this film`,
    `Bad picture`
  ];

  const commentEmotionals = [
    `smile`,
    `sleeping`,
    `puke`,
    `angry`
  ];

  const commentAuthors = [
    `Andy`,
    `Carl`,
    `Veofold`
  ];

  let commentDates = [];
  for (let i = 0; i < numOfComments; i++) {
    commentDates.push(generateDate());
  }

  for (let i = 0; i < numOfComments; i++) {
    const filmComment = {
      text: commentText[getRandomInteger(0, commentText.length - 1)],
      emotion: commentEmotionals[getRandomInteger(0, commentEmotionals.length - 1)],
      author: commentAuthors[getRandomInteger(0, commentAuthors.length - 1)],
      date: commentDates[getRandomInteger(0, commentDates.length - 1)]
    };
    filmComments.push(filmComment);
  }
  return filmComments;
};

const generateFilm = () => {
  let date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().day(getRandomInteger(1, 364)).subtract(getRandomInteger(1, 67), `year`);
  const numOfComments = generateNumOfComments();
  return {
    poster: generatePoster(),
    title: generateTitle(),
    originalTitle: generateTitle(),
    rating: getRandomInteger(MIN_NUM_OF_RATING, MAX_NUM_OF_RATING),
    producer: generateProducer(),
    screenwriters: generateScreenwriter(),
    cast: generateCast(),
    release: date.format(`YYYY`),
    date: date.format(`DD MMMM YYYY`),
    duration: generateDuration(),
    country: generateCountry(),
    genre: generateGenreCard(),
    genreDetails: generateGenreDetails(),
    shortDescription: generateDescription(),
    fullDescription: generateFullDescription(),
    ageRating: generateAgeRating(),
    comments: generateFilmComments(numOfComments),
    numOfComments,
    isWatchlist: getRandomInteger(0, 1),
    isFavorites: getRandomInteger(0, 1),
    isHistory: getRandomInteger(0, 1),
  };
};


/***/ }),

/***/ "./src/mock/filter.js":
/*!****************************!*\
  !*** ./src/mock/filter.js ***!
  \****************************/
/*! exports provided: generateFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilter", function() { return generateFilter; });
const generateFilter = (films) => {
  const filmsFilter = {
    allMovies: films.length,
    watchlist: 0,
    favorites: 0,
    history: 0
  };

  films.forEach((film) => {
    if (film.isWatchlist) {
      filmsFilter.watchlist++;
    } else if (film.isFavorites) {
      filmsFilter.favorites++;
    } else if (film.isHistory) {
      filmsFilter.history++;
    }
  });
  return filmsFilter;
};


/***/ }),

/***/ "./src/view/details.js":
/*!*****************************!*\
  !*** ./src/view/details.js ***!
  \*****************************/
/*! exports provided: createDetailsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDetailsTemplate", function() { return createDetailsTemplate; });
const createDetailsTemplate = (film) => {


  let {poster, ageRating, title, originalTitle, rating, producer, screenwriters, cast, release, duration, country, genreDetails, fullDescription, numOfComments} = film;
  return (
    `<section class="film-details">
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
                  <td class="film-details__cell">${release}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Runtime</td>
                  <td class="film-details__cell">${duration}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Country</td>
                  <td class="film-details__cell">${country}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Genres</td>
                  <td class="film-details__cell">${genreDetails}</td>
                </tr>
              </table>

              <p class="film-details__film-description">${fullDescription}</p>
            </div>
          </div>

          <section class="film-details__controls">
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
            <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
            <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
            <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
          </section>
        </div>

        <div class="film-details__bottom-container">
          <section class="film-details__comments-wrap">
            <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${numOfComments}</span></h3>

            <ul class="film-details__comments-list"></ul>

            <div class="film-details__new-comment">
              <div class="film-details__add-emoji-label">
                <img src="images/emoji/smile.png" width="55" height="55" alt="emoji-smile">
              </div>

              <label class="film-details__comment-label">
                <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment">Great movie!</textarea>
              </label>

              <div class="film-details__emoji-list">
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile" checked>
                <label class="film-details__emoji-label" for="emoji-smile">
                  <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
                <label class="film-details__emoji-label" for="emoji-sleeping">
                  <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
                <label class="film-details__emoji-label" for="emoji-puke">
                  <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
                <label class="film-details__emoji-label" for="emoji-angry">
                  <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
                </label>
              </div>
            </div>
          </section>
        </div>
      </form>
    </section>`
  );
};


/***/ }),

/***/ "./src/view/film-card.js":
/*!*******************************!*\
  !*** ./src/view/film-card.js ***!
  \*******************************/
/*! exports provided: createFilmCardTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmCardTemplate", function() { return createFilmCardTemplate; });
const createFilmCardTemplate = (film) => {


  let {poster, title, rating, release, duration, genre, shortDescription, numOfComments} = film;
  return (
    `<article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${release}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">${genre}</span>
      </p>
      <img src="${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${shortDescription}</p>
      <a class="film-card__comments">${numOfComments} comments</a>
      <div class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
      </div>
    </article>`
  );
};


/***/ }),

/***/ "./src/view/films-extra.js":
/*!*********************************!*\
  !*** ./src/view/films-extra.js ***!
  \*********************************/
/*! exports provided: createFilmsExtraTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsExtraTemplate", function() { return createFilmsExtraTemplate; });
const createFilmsExtraTemplate = () => {


  return (
    `<section class="films-list films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container"></div>
    </section>`
  );
};


/***/ }),

/***/ "./src/view/films-list.js":
/*!********************************!*\
  !*** ./src/view/films-list.js ***!
  \********************************/
/*! exports provided: createFilmsListTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsListTemplate", function() { return createFilmsListTemplate; });
const createFilmsListTemplate = () => {


  return (
    `<section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      <div class="films-list__container"></div>
    </section>`
  );
};


/***/ }),

/***/ "./src/view/films.js":
/*!***************************!*\
  !*** ./src/view/films.js ***!
  \***************************/
/*! exports provided: createFilmsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsTemplate", function() { return createFilmsTemplate; });
const createFilmsTemplate = () => {


  return `<section class="films"></section>`;
};


/***/ }),

/***/ "./src/view/filter.js":
/*!****************************!*\
  !*** ./src/view/filter.js ***!
  \****************************/
/*! exports provided: createFilterTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilterTemplate", function() { return createFilterTemplate; });
const createFilterTemplate = (filmsFilter) => {


  const {watchlist, favorites, history} = filmsFilter;
  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchlist}</span></a>
        <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${history}</span></a>
        <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favorites}</span></a>
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};


/***/ }),

/***/ "./src/view/footer-statistics.js":
/*!***************************************!*\
  !*** ./src/view/footer-statistics.js ***!
  \***************************************/
/*! exports provided: createFooterStatisticsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFooterStatisticsTemplate", function() { return createFooterStatisticsTemplate; });
const createFooterStatisticsTemplate = (numberOfFilms) => {


  return `<p>${numberOfFilms} movies inside</p>`;
};


/***/ }),

/***/ "./src/view/show-more-button.js":
/*!**************************************!*\
  !*** ./src/view/show-more-button.js ***!
  \**************************************/
/*! exports provided: createMoreButtonTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMoreButtonTemplate", function() { return createMoreButtonTemplate; });
const createMoreButtonTemplate = () => {


  return `<button class="films-list__show-more">Show more</button>`;
};


/***/ }),

/***/ "./src/view/sort.js":
/*!**************************!*\
  !*** ./src/view/sort.js ***!
  \**************************/
/*! exports provided: createSortTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSortTemplate", function() { return createSortTemplate; });
const createSortTemplate = () => {


  return (
    `<ul class="sort">
      <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
      <li><a href="#" class="sort__button">Sort by date</a></li>
      <li><a href="#" class="sort__button">Sort by rating</a></li>
    </ul>`
  );
};


/***/ }),

/***/ "./src/view/user-rank.js":
/*!*******************************!*\
  !*** ./src/view/user-rank.js ***!
  \*******************************/
/*! exports provided: createUserRankTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserRankTemplate", function() { return createUserRankTemplate; });
const createUserRankTemplate = () => {


  return (
    `<section class="header__profile profile">
      <p class="profile__rating">Movie Buff</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map