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

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/*! exports provided: nanoid, customAlphabet, customRandom, urlAlphabet, random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nanoid", function() { return nanoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAlphabet", function() { return customAlphabet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customRandom", function() { return customRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "urlAlphabet", function() { return _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__["urlAlphabet"]; });

// This file replaces `index.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.



if (true) {
  // All bundlers will remove this block in the production bundle.
  if (
    typeof navigator !== 'undefined' &&
    navigator.product === 'ReactNative' &&
    typeof crypto === 'undefined'
  ) {
    throw new Error(
      'React Native does not have a built-in secure random generator. ' +
        'If you don’t need unpredictable IDs use `nanoid/non-secure`. ' +
        'For secure IDs, import `react-native-get-random-values` ' +
        'before Nano ID. If you use Expo, install `expo-random` ' +
        'and use `nanoid/async`.'
    )
  }
  if (typeof msCrypto !== 'undefined' && typeof crypto === 'undefined') {
    throw new Error(
      'Import file with `if (!window.crypto) window.crypto = window.msCrypto`' +
        ' before importing Nano ID to fix IE 11 support'
    )
  }
  if (typeof crypto === 'undefined') {
    throw new Error(
      'Your browser does not have secure random generator. ' +
        'If you don’t need unpredictable IDs, you can use nanoid/non-secure.'
    )
  }
}

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))

let customRandom = (alphabet, size, getRandom) => {
  // First, a bitmask is necessary to generate the ID. The bitmask makes bytes
  // values closer to the alphabet size. The bitmask calculates the closest
  // `2^31 - 1` number, which exceeds the alphabet size.
  // For example, the bitmask for the alphabet size 30 is 31 (00011111).
  // `Math.clz32` is not used, because it is not available in browsers.
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  // Though, the bitmask solution is not perfect since the bytes exceeding
  // the alphabet size are refused. Therefore, to reliably generate the ID,
  // the random bytes redundancy has to be satisfied.

  // Note: every hardware random generator call is performance expensive,
  // because the system call for entropy collection takes a lot of time.
  // So, to avoid additional system calls, extra bytes are requested in advance.

  // Next, a step determines how many random bytes to generate.
  // The number of random bytes gets decided upon the ID size, mask,
  // alphabet size, and magic number 1.6 (using 1.6 peaks at performance
  // according to benchmarks).

  // `-~f => Math.ceil(f)` if f is a float
  // `-~i => i + 1` if i is an integer
  let step = -~((1.6 * mask * size) / alphabet.length)

  return () => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      // A compact alternative for `for (var i = 0; i < step; i++)`.
      let j = step
      while (j--) {
        // Adding `|| ''` refuses a random byte that exceeds the alphabet size.
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}

let customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)

let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array(size))

  // A compact alternative for `for (var i = 0; i < step; i++)`.
  while (size--) {
    // It is incorrect to use bytes exceeding the alphabet size.
    // The following mask reduces the random byte in the 0-255 value
    // range to the 0-63 value range. Therefore, adding hacks, such
    // as empty string fallback or magic numbers, is unneccessary because
    // the bitmask trims bytes down to the alphabet size.
    let byte = bytes[size] & 63
    if (byte < 36) {
      // `0-9a-z`
      id += byte.toString(36)
    } else if (byte < 62) {
      // `A-Z`
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte < 63) {
      id += '_'
    } else {
      id += '-'
    }
  }
  return id
}




/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/*! exports provided: urlAlphabet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlAlphabet", function() { return urlAlphabet; });
// This alphabet uses `A-Za-z0-9_-` symbols. The genetic algorithm helped
// optimize the gzip compression for this alphabet.
let urlAlphabet =
  'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'




/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/menu */ "./src/view/menu.js");
/* harmony import */ var _view_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/filter */ "./src/view/filter.js");
/* harmony import */ var _view_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/sort */ "./src/view/sort.js");
/* harmony import */ var _view_films_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/films-container */ "./src/view/films-container.js");
/* harmony import */ var _presenter_movieList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./presenter/movieList */ "./src/presenter/movieList.js");
/* harmony import */ var _view_footer_statistics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/footer-statistics */ "./src/view/footer-statistics.js");
/* harmony import */ var _mock_film__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock/film */ "./src/mock/film.js");
/* harmony import */ var _mock_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mock/filter */ "./src/mock/filter.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/render */ "./src/utils/render.js");











const NUM_OF_FILMS = 24;
const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);
const footerElement = document.querySelector(`.footer`);
let films = [];

for (let i = 0; i < NUM_OF_FILMS; i++) {
  films.push(Object(_mock_film__WEBPACK_IMPORTED_MODULE_6__["generateFilm"])());
}
Object(_utils_render__WEBPACK_IMPORTED_MODULE_8__["render"])(headerElement, new _view_menu__WEBPACK_IMPORTED_MODULE_0__["default"](), _utils_render__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].BEFOREEND);
Object(_utils_render__WEBPACK_IMPORTED_MODULE_8__["render"])(mainElement, new _view_filter__WEBPACK_IMPORTED_MODULE_1__["default"](Object(_mock_filter__WEBPACK_IMPORTED_MODULE_7__["generateFilter"])(films)), _utils_render__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].BEFOREEND);
Object(_utils_render__WEBPACK_IMPORTED_MODULE_8__["render"])(mainElement, new _view_sort__WEBPACK_IMPORTED_MODULE_2__["default"](), _utils_render__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].BEFOREEND);
Object(_utils_render__WEBPACK_IMPORTED_MODULE_8__["render"])(mainElement, new _view_films_container__WEBPACK_IMPORTED_MODULE_3__["default"](), _utils_render__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].BEFOREEND);
const filmsElement = mainElement.querySelector(`.films`);

const movieList = new _presenter_movieList__WEBPACK_IMPORTED_MODULE_4__["default"](filmsElement);
movieList.init(films);

const footerStatisticsElement = footerElement.querySelector(`.footer__statistics`);
Object(_utils_render__WEBPACK_IMPORTED_MODULE_8__["render"])(footerStatisticsElement, new _view_footer_statistics__WEBPACK_IMPORTED_MODULE_5__["default"](films.length), _utils_render__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].BEFOREEND);


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
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");





const MAX_NUM_SEN_SHORT_DESCRIPTION = 5;
const MAX_HOURS_DURATION = 2;
const MAX_MIN_DURATION = 59;
const MAX_NUM_OF_COMMENTS = 5;
const MIN_NUM_OF_RATING = 7;
const MAX_NUM_OF_RATING = 10;
const FILMS_AGE_RATING_MULTIPLY = 4;
const MAX_NUM_OF_GENRE = 3;
const WEEKS_OF_YEAR = 50;
const DEEP_YEAR_FILM = 68;
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

const generateTitle = () => {
  return FILMS_TITLE[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, FILMS_TITLE.length - 1)];
};

const generatePoster = () => {
  return FILMS_POSTER[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, FILMS_POSTER.length - 1)];
};

const generateProducer = () => {
  return FILMS_PRODUCER[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, FILMS_PRODUCER.length - 1)];
};

const generateScreenwriter = () => {
  return FILMS_SCREENWRITER[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, FILMS_SCREENWRITER.length - 1)];
};

const generateCountry = () => {
  return FILMS_COUNTRY[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, FILMS_COUNTRY.length - 1)];
};

const generateCast = () => {
  return FILMS_CAST[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, FILMS_CAST.length - 1)];
};


const generateGenres = () => {
  let detailsGenre = [];
  for (let i = 0; i < Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(1, MAX_NUM_OF_GENRE); i++) {
    detailsGenre.push(FILMS_GENRE[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, FILMS_GENRE.length - 1)]);
  }
  return detailsGenre;
};

const generateAgeRating = () => {
  return Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(1, FILMS_AGE_RATING_MULTIPLY) * FILMS_AGE_RATING_MULTIPLY + `+`;
};

const generateDuration = () => {
  return `${Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, MAX_HOURS_DURATION)}h ${Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, MAX_MIN_DURATION)}m`;
};

const generateDescription = () => {
  const numOfSentence = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(1, MAX_NUM_SEN_SHORT_DESCRIPTION);
  let filmDescription = ``;

  for (let i = 0; i < numOfSentence; i++) {
    filmDescription += FILM_DESCRIPTIONS[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, FILM_DESCRIPTIONS.length - 1)] + ` `;
  }
  return filmDescription;
};

const generateDate = () => {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(1, 5), `h`).format(`YYYY/MM/DD hh:mm`);
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
      text: commentText[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, commentText.length - 1)],
      emotion: commentEmotionals[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, commentEmotionals.length - 1)],
      author: commentAuthors[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, commentAuthors.length - 1)],
      date: commentDates[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, commentDates.length - 1)]
    };
    filmComments.push(filmComment);
  }
  return filmComments;
};

const generateFilm = () => {


  const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().subtract(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(1, DEEP_YEAR_FILM), `year`).subtract(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(1, WEEKS_OF_YEAR), `week`);
  return {
    id: Object(nanoid__WEBPACK_IMPORTED_MODULE_1__["nanoid"])(),
    poster: generatePoster(),
    title: generateTitle(),
    originalTitle: generateTitle(),
    rating: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(MIN_NUM_OF_RATING, MAX_NUM_OF_RATING),
    producer: generateProducer(),
    screenwriters: generateScreenwriter(),
    cast: generateCast(),
    release: date.format(`YYYY`),
    date: date.format(`DD MMMM YYYY`),
    duration: generateDuration(),
    country: generateCountry(),
    genres: generateGenres(),
    description: generateDescription(),
    ageRating: generateAgeRating(),
    comments: generateFilmComments(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, MAX_NUM_OF_COMMENTS)),
    isWatchlist: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, 1)),
    isWatched: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, 1)),
    isFavorite: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, 1)),
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
    }
    if (film.isWatched) {
      filmsFilter.favorites++;
    }
    if (film.isFavorite) {
      filmsFilter.history++;
    }
  });
  return filmsFilter;
};


/***/ }),

/***/ "./src/presenter/movie.js":
/*!********************************!*\
  !*** ./src/presenter/movie.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Movie; });
/* harmony import */ var _view_film_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/film-card */ "./src/view/film-card.js");
/* harmony import */ var _view_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/details */ "./src/view/details.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");





class Movie {
  constructor(container, changeData, prevDetails) {
    this._container = container;
    this._filmCardComponent = null;
    this._detailsComponent = null;
    this._changeData = changeData;
    this._prevDetails = prevDetails;
    this._onAddWatchedClick = this._onAddWatchedClick.bind(this);
    this._onAddWatchlistClick = this._onAddWatchlistClick.bind(this);
    this._onAddFavoriteClick = this._onAddFavoriteClick.bind(this);
    this._onDetailsClick = this._onDetailsClick.bind(this);
    this._onDetailsEscKeydown = this._onDetailsEscKeydown.bind(this);
  }

  init(film) {
    this._film = film;
    this._isDetailsOpened = false;
    const prevFilmComponent = this._filmCardComponent;
    this._filmCardComponent = new _view_film_card__WEBPACK_IMPORTED_MODULE_0__["default"](this._film);
    this._filmCardComponent.setOnAddWachedClick(this._onAddWatchedClick);
    this._filmCardComponent.setOnAddWatchlistClick(this._onAddWatchlistClick);
    this._filmCardComponent.setOnAddFavoriteClick(this._onAddFavoriteClick);
    this._filmCardComponent.setClickHandler(this._onDetailsClick);

    if (prevFilmComponent === null) {
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["render"])(this._container, this._filmCardComponent, _utils_render__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].BEFOREEND);
      return;
    } else {
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._filmCardComponent, prevFilmComponent);
    }
    if (this._detailsComponent) {
      if (document.body.contains(this._detailsComponent.getElement())) {
        this._onDetailsClick();
      }
    }
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevFilmComponent);
  }

  _onDetailsClick() {
    this._prevDetails();
    const prevDetailsComponent = this._detailsComponent;
    this._detailsComponent = new _view_details__WEBPACK_IMPORTED_MODULE_1__["default"](this._film);
    this._detailsComponent.setOnDetailsAddWachedClick(this._onAddWatchedClick);
    this._detailsComponent.setOnDetailsAddWatchlistClick(this._onAddWatchlistClick);
    this._detailsComponent.setOnDetailsAddFavoriteClick(this._onAddFavoriteClick);
    this._detailsComponent.closeBtnElement.addEventListener(`click`, () => {
      this._closeDetails();
    });

    document.addEventListener(`keydown`, this._onDetailsEscKeydown);

    if (!document.body.contains(this._detailsComponent.getElement())) {
      document.body.appendChild(this._detailsComponent.getElement());
      document.body.classList.add(`hide-overflow`);
      this._isDetailsOpened = true;
    } else {
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._detailsComponent, prevDetailsComponent);
    }
    if (prevDetailsComponent) {
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevDetailsComponent);
    }
  }

  _onDetailsEscKeydown(evt) {
    if (evt.key === _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__["constants"].ESC) {
      this._closeDetails();
    }
  }

  _closeDetails() {
    this._isDetailsOpened = false;
    this._detailsComponent.getElement().remove();
    this._detailsComponent.removeElement();
    document.body.classList.remove(`hide-overflow`);
    document.removeEventListener(`keydown`, this._onDetailsEscKeydown);
  }

  _onAddWatchedClick() {
    this._changeData(
        Object.assign(
            {},
            this._film,
            {
              isWatched: !this._film.isWatched
            }
        )
    );
  }

  _onAddWatchlistClick() {
    this._changeData(
        Object.assign(
            {},
            this._film,
            {
              isWatchlist: !this._film.isWatchlist
            }
        )
    );
  }

  _onAddFavoriteClick() {
    this._changeData(
        Object.assign(
            {},
            this._film,
            {
              isFavorite: !this._film.isFavorite
            }
        )
    );
  }

  destroy() {
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._filmCardComponent);
  }
}


/***/ }),

/***/ "./src/presenter/movieList.js":
/*!************************************!*\
  !*** ./src/presenter/movieList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovieList; });
/* harmony import */ var _view_films_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/films-list */ "./src/view/films-list.js");
/* harmony import */ var _movie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie */ "./src/presenter/movie.js");
/* harmony import */ var _view_show_more_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/show-more-button */ "./src/view/show-more-button.js");
/* harmony import */ var _view_films_extra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/films-extra */ "./src/view/films-extra.js");
/* harmony import */ var _view_no_movies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/no-movies */ "./src/view/no-movies.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");









class MovieList {
  constructor(container) {
    this._container = container;
    this._filmsList = new _view_films_list__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this._moreButton = new _view_show_more_button__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this._noMovie = new _view_no_movies__WEBPACK_IMPORTED_MODULE_4__["default"]();

    this._onFilmChange = this._onFilmChange.bind(this);
    this._onFilmExtraChange = this._onFilmExtraChange.bind(this);
    this._closePrevDetails = this._closePrevDetails.bind(this);
    this._NUM_CARDS_OF_FILMS = 20;
    this._NUM_CARDS_OF_EXTRA_FILM = 2;
    this._NUM_RENDER_CARDS = 5;
    this._topRatedFilms = [];
    this._mostCommentedFilm = [];
    this._filmsToRender = [];
  }

  init(films) {
    this._films = films;
    if (this._films.length === 0) {
      this._renderNoMovies();
      return;
    } else {
      this._filmsToRender = films.slice(0, this._NUM_CARDS_OF_FILMS);
      this._topRatedFilms = films.slice(this._NUM_CARDS_OF_FILMS, this._NUM_CARDS_OF_FILMS + this._NUM_CARDS_OF_EXTRA_FILM);
      this._mostCommentedFilms = films.slice(this._NUM_CARDS_OF_FILMS + this._NUM_CARDS_OF_EXTRA_FILM, this._films.length);
      this._filmsListContainerElement = this._filmsList.getElement().querySelector(`.films-list__container`);
      this._moviePresenter = {};
      this._moviePresenterExtra = {};
      this._renderFilmsList();
      this._renderFilmsExtraList(`Top Rated`, this._topRatedFilms);
      this._renderFilmsExtraList(`Most Commented`, this._mostCommentedFilms);
    }
  }

  _renderNoMovies() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["render"])(this._container, this._noMovie, _utils_render_js__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);
  }

  _renderFilmsList() {
    if (this._NUM_CARDS_OF_FILMS === this._filmsToRender.length) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["render"])(this._container, this._filmsList, _utils_render_js__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);
      this._renderShowMoreButton();
      this._moreButton.getElement().addEventListener(`click`, () => {
        this._renderFilmsList();
      });
    }
    for (const film of this._filmsToRender.slice(0, this._NUM_RENDER_CARDS)) {
      const moviePresenter = new _movie__WEBPACK_IMPORTED_MODULE_1__["default"](this._filmsListContainerElement, this._onFilmChange, this._closePrevDetails);
      moviePresenter.init(film);
      this._moviePresenter[film.id] = moviePresenter;
    }
    this._filmsToRender.splice(0, this._NUM_RENDER_CARDS);
    if (this._filmsToRender.length === 0) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["remove"])(this._moreButton);
    }
  }

  _renderShowMoreButton() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["render"])(this._filmsList.getElement(), this._moreButton, _utils_render_js__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);
  }

  _renderFilmsExtraList(title, films) {
    const filmsExtraListComponent = new _view_films_extra__WEBPACK_IMPORTED_MODULE_3__["default"](title);
    const filmsExtraListContainer = filmsExtraListComponent.getElement().querySelector(`.films-list__container`);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["render"])(this._container, filmsExtraListComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);
    for (const film of films) {
      const moviePresenterExtra = new _movie__WEBPACK_IMPORTED_MODULE_1__["default"](filmsExtraListContainer, this._onFilmExtraChange, this._closePrevDetails);
      moviePresenterExtra.init(film);
      this._moviePresenterExtra[film.id] = moviePresenterExtra;
    }
  }

  _clearFilmsList() {
    Object
      .values(this._moviePresenter)
      .forEach((presenter) => presenter.destroy());
    this._moviePresenter = {};
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["remove"])(this._moreButton);
  }

  _onFilmChange(updatedFilm) {
    this._films = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_6__["updateItem"])(this._films, updatedFilm);
    this._moviePresenter[updatedFilm.id].init(updatedFilm);
  }

  _onFilmExtraChange(updatedFilm) {
    this._films = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_6__["updateItem"])(this._films, updatedFilm);
    this._moviePresenterExtra[updatedFilm.id].init(updatedFilm);
  }

  _closePrevDetails() {
    Object
      .values(this._moviePresenter)
      .forEach((movie) => {
        if (movie._isDetailsOpened) {
          movie._closeDetails();
        }
      });

    Object
      .values(this._moviePresenterExtra)
      .forEach((movie) => {
        if (movie._isDetailsOpened) {
          movie._closeDetails();
        }
      });
  }
}


/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! exports provided: getRandomInteger, updateItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1)
  ];
};


/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/*! exports provided: constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return constants; });
const constants = {
  ESC: `Escape`,
};


/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: RenderPosition, render, createElement, replace, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract.js */ "./src/view/abstract.js");



const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const render = (container, child, place) => {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  if (child instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    child = child.getElement();
  }
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      container.append(child);
      break;
  }
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const replace = (newChild, oldChild) => {
  if (oldChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error(`Can't replace unexisting elements`);
  }

  parent.replaceChild(newChild, oldChild);
};

const remove = (component) => {
  if (!(component instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};


/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Abstract; });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");



class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`);
    }
    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/details.js":
/*!*****************************!*\
  !*** ./src/view/details.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Details; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");



class Details extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(film) {
    super();
    this._film = film;
    this._closeBtnElement = null;
    this._onDetailsAddWatchedClick = this._onDetailsAddWatchedClick.bind(this);
    this._onDetailsAddWatchlistClick = this._onDetailsAddWatchlistClick.bind(this);
    this._onDetailsAddFavoriteClick = this._onDetailsAddFavoriteClick.bind(this);
  }

  getTemplate() {
    const {poster, ageRating, title, originalTitle, rating, producer, screenwriters, cast, date, duration, country, genres, description, comments, isFavorite, isWatched, isWatchlist} = this._film;


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
                <td class="film-details__cell">${date}</td>
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
                <td class="film-details__cell">
                  ${genres.map((genre) => `<span class="film-details__genre">${genre}</span>`).join(` `)}
                </td>
              </tr>
            </table>

            <p class="film-details__film-description">${description}</p>
          </div>
        </div>

        <section class="film-details__controls">
          <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${isWatchlist ? `checked` : ``}>
          <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

          <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${isWatched ? `checked` : ``}>
          <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

          <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${isFavorite ? `checked` : ``}>
          <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
        </section>
      </div>

      <div class="film-details__bottom-container">
        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>

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
  </section>`;
  }

  get closeBtnElement() {
    if (!this._closeBtnElement) {
      this._closeBtnElement = this.getElement().querySelector(`.film-details__close-btn`);
    }
    return this._closeBtnElement;
  }

  _onDetailsAddWatchedClick(evt) {
    evt.preventDefault();
    this._callback.addDetailsWatchedClick();
  }

  _onDetailsAddWatchlistClick(evt) {
    evt.preventDefault();
    this._callback.addDetailsWatchlistClick();
  }

  _onDetailsAddFavoriteClick(evt) {
    evt.preventDefault();
    this._callback.addDetailsFavotiteClick();
  }

  setOnDetailsAddWachedClick(callback) {
    this._callback.addDetailsWatchedClick = callback;
    this.getElement().querySelector(`.film-details__control-label--watched`).addEventListener(`click`, this._onDetailsAddWatchedClick);
  }

  setOnDetailsAddWatchlistClick(callback) {
    this._callback.addDetailsWatchlistClick = callback;
    this.getElement().querySelector(`.film-details__control-label--watchlist`).addEventListener(`click`, this._onDetailsAddWatchlistClick);
  }

  setOnDetailsAddFavoriteClick(callback) {
    this._callback.addDetailsFavotiteClick = callback;
    this.getElement().querySelector(`.film-details__control-label--favorite`).addEventListener(`click`, this._onDetailsAddFavoriteClick);
  }
}


/***/ }),

/***/ "./src/view/film-card.js":
/*!*******************************!*\
  !*** ./src/view/film-card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmCard; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");



class FilmCard extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(film) {
    super();
    this._film = film;
    this._filmDetailsElement = [];
    this._clickHandler = this._clickHandler.bind(this);
    this._onAddWatchedClick = this._onAddWatchedClick.bind(this);
    this._onAddWatchlistClick = this._onAddWatchlistClick.bind(this);
    this._onAddFavoriteClick = this._onAddFavoriteClick.bind(this);
  }

  getTemplate() {
    const {poster, title, rating, release, duration, genres, description, comments, isFavorite, isWatched, isWatchlist} = this._film;

    return `<article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${release}</span>
      <span class="film-card__duration">${duration}</span>
      <span class="film-card__genre">${genres[0]}</span>
    </p>
    <img src="${poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <a class="film-card__comments">${comments.length} comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isWatchlist ? `film-card__controls-item--active` : ``}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isWatched ? `film-card__controls-item--active` : ``}" type="button">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite ${isFavorite ? `film-card__controls-item--active` : ``}" type="button">Mark as favorite</button>
    </div>
  </article>`;
  }

  _filmShowDetailsElement() {
    if (this._filmDetailsElement) {
      this._filmDetailsElement.push(this.getElement().querySelector(`.film-card__title`));
      this._filmDetailsElement.push(this.getElement().querySelector(`.film-card__poster`));
      this._filmDetailsElement.push(this.getElement().querySelector(`.film-card__comments`));
    }
    return this._filmDetailsElement;
  }

  _clickHandler() {
    this._callback.click(this._film);
  }

  _onAddWatchedClick(evt) {
    evt.preventDefault();
    this._callback.addWatchedClick();
  }

  _onAddWatchlistClick(evt) {
    evt.preventDefault();
    this._callback.addWatchlistClick();
  }

  _onAddFavoriteClick(evt) {
    evt.preventDefault();
    this._callback.addFavotiteClick();
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this._filmShowDetailsElement();
    this._filmDetailsElement.forEach((element) => {
      element.addEventListener(`click`, this._clickHandler);
    });
  }

  setOnAddWachedClick(callback) {
    this._callback.addWatchedClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--mark-as-watched`).addEventListener(`click`, this._onAddWatchedClick);
  }

  setOnAddWatchlistClick(callback) {
    this._callback.addWatchlistClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--add-to-watchlist`).addEventListener(`click`, this._onAddWatchlistClick);
  }

  setOnAddFavoriteClick(callback) {
    this._callback.addFavotiteClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--favorite`).addEventListener(`click`, this._onAddFavoriteClick);
  }
}



/***/ }),

/***/ "./src/view/films-container.js":
/*!*************************************!*\
  !*** ./src/view/films-container.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsContainer; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");



class FilmsContainer extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

  getTemplate() {
    return `<section class="films"></section>`;
  }
}


/***/ }),

/***/ "./src/view/films-extra.js":
/*!*********************************!*\
  !*** ./src/view/films-extra.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsExtra; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");



class FilmsExtra extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(listTitle) {
    super();
    this._listTitle = listTitle;
  }

  getTemplate() {
    return `<section class="films-list films-list--extra">
    <h2 class="films-list__title">${this._listTitle}</h2>
    <div class="films-list__container"></div>
  </section>`;
  }
}


/***/ }),

/***/ "./src/view/films-list.js":
/*!********************************!*\
  !*** ./src/view/films-list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsList; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");



class FilmsList extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

  getTemplate() {
    return `<section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container"></div>
  </section>`;
  }
}


/***/ }),

/***/ "./src/view/filter.js":
/*!****************************!*\
  !*** ./src/view/filter.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


class Filter extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(filmsFilter) {
    super();
    this._filters = filmsFilter;
  }

  getTemplate() {
    const {watchlist, favorites, history} = this._filters;
    return `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchlist}</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${history}</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favorites}</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
  }
}


/***/ }),

/***/ "./src/view/footer-statistics.js":
/*!***************************************!*\
  !*** ./src/view/footer-statistics.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterStatistics; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");



class FooterStatistics extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(numberOfFilms) {
    super();
    this._numberOfFilms = numberOfFilms;
  }

  getTemplate() {
    return `<p>${this._numberOfFilms} movies inside</p>`;
  }
}


/***/ }),

/***/ "./src/view/menu.js":
/*!**************************!*\
  !*** ./src/view/menu.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


class Menu extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {

  getTemplate() {
    return `<section class="header__profile profile">
    <p class="profile__rating">Movie Buff</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`;
  }
}


/***/ }),

/***/ "./src/view/no-movies.js":
/*!*******************************!*\
  !*** ./src/view/no-movies.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoMovies; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");



class NoMovies extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

  getTemplate() {
    return `<section class="films"><section class="films-list">
    <h2 class="films-list__title">There are no movies in our database</h2>
    </section></section>`;
  }
}


/***/ }),

/***/ "./src/view/show-more-button.js":
/*!**************************************!*\
  !*** ./src/view/show-more-button.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MoreButton; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");



class MoreButton extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

  getTemplate() {
    return `<button class="films-list__show-more">Show more</button>`;
  }
}


/***/ }),

/***/ "./src/view/sort.js":
/*!**************************!*\
  !*** ./src/view/sort.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sort; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");



class Sort extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

  getTemplate() {
    return `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`;
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map