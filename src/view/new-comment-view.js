import SmartView from "./smart-view";
import {UserAction, UpdateType} from "../const";
import he from "he";
import dayjs from "dayjs";


export default class NewComment extends SmartView {
  constructor() {
    super();
    this._localComment = {
      comment: ``,
      date: ``,
      emotion: `smile`,
    };
    this._onEmojiClick = this._onEmojiClick.bind(this);
    this._onCommentTyping = this._onCommentTyping.bind(this);
    this._onAddNewComment = this._onAddNewComment.bind(this);
    this._currentScrollTop = 0;
    this._setInnerHandlers();
  }

  getTemplate() {
    const {emotion} = this._localComment;
    return `<div class="film-details__new-comment">
    <div class="film-details__add-emoji-label">
      <img src="images/emoji/${emotion}.png" width="55" height="55" alt="emoji-${emotion}">
    </div>

    <label class="film-details__comment-label">
      <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
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
  </div>`;
  }

  restoreHandlers() {
    this.getElement().scrollTop = this._currentCoords;
    this._setInnerHandlers();
  }

  _setInnerHandlers() {
    this.getElement()
      .querySelectorAll(`.film-details__emoji-item`)
      .forEach((emoji) => {
        emoji.addEventListener(`click`, this._onEmojiClick);
      });
    this.getElement()
      .querySelector(`.film-details__comment-input`)
      .addEventListener(`input`, this._onCommentTyping);
    this._onNewCommentKeydown();
  }

  _onCommentTyping(evt) {
    this._localComment.comment = he.encode(evt.target.value);
  }

  _onEmojiClick(evt) {
    evt.preventDefault();
    this._currentCoords = this.getElement().scrollTop;
    this.updateLocalComment({
      emotion: evt.target.value,
    });
    this.getElement()
      .querySelectorAll(`.film-details__emoji-item`)
      .forEach((element) => {
        if (element.value === evt.target.value) {
          element.checked = true;
        } else {
          element.checked = false;
        }
      });
  }

  _onAddNewComment(evt) {
    evt.preventDefault();
    this._localComment.date = dayjs().format(`YYYY-MM-DDTHH:mm:ss.SSS[Z]`);
    this._callback.addNewComment(
        UserAction.ADD_COMMENT,
        UpdateType.ADD_COMMENT,
        this._localComment
    );
    this.updateLocalComment({
      comment: ``,
      date: ``,
      emotion: `smile`,
    });
    this.getElement().querySelector(`.film-details__comment-input`).disabled = true;
  }

  _onNewCommentKeydown() {
    this.getElement()
      .querySelector(`.film-details__comment-input`)
      .addEventListener(`keydown`, (evt) => {
        if (evt.keyCode === 13 && (evt.metaKey || evt.ctrlKey)) {
          this._onAddNewComment(evt);
        }
      });
  }

  setOnAddNewComment(callback) {
    this._callback.addNewComment = callback;
  }
}
