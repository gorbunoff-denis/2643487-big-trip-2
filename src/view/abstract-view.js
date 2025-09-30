import {createElement} from '../render.js';

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error('Cannot instantiate AbstractView directly');
    }
    this.element = null;
  }

  getTemplate() {
    throw new Error('getTemplate must be implemented in subclass');
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}


