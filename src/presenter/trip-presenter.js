import {render, RenderPosition} from '../render.js';
import FilterView from '../view/filter-view.js';
import SortView from '../view/sort-view.js';
import EventsListView from '../view/events-list-view.js';
import EditFormView from '../view/edit-form-view.js';
import EventPointView from '../view/event-point-view.js';

export default class TripPresenter {
  constructor({headerContainer, filtersContainer, eventsContainer}) {
    this.headerContainer = headerContainer;
    this.filtersContainer = filtersContainer;
    this.eventsContainer = eventsContainer;
    this.eventsListComponent = null;
  }

  init() {
    render(new FilterView(), this.filtersContainer);
    render(new SortView(), this.eventsContainer);

    this.eventsListComponent = new EventsListView();
    render(this.eventsListComponent, this.eventsContainer);

    render(new EditFormView(), this.eventsListComponent.getElement(), RenderPosition.AFTERBEGIN);

    render(new EventPointView(), this.eventsListComponent.getElement());
    render(new EventPointView(), this.eventsListComponent.getElement());
    render(new EventPointView(), this.eventsListComponent.getElement());
  }
}


