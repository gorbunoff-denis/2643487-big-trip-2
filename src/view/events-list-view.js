import AbstractView from './abstract-view.js';

function createEventsListTemplate() {
  return (`\n<ul class="trip-events__list"></ul>`);
}

export default class EventsListView extends AbstractView {
  getTemplate() {
    return createEventsListTemplate();
  }
}


