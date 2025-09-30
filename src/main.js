import TripPresenter from './presenter/trip-presenter.js';

const pageHeaderElement = document.querySelector('.page-header');
const filtersContainerElement = pageHeaderElement.querySelector('.trip-controls .trip-controls__filters');

const pageMainElement = document.querySelector('.page-main');
const tripEventsSectionElement = pageMainElement.querySelector('.trip-events');

const tripPresenter = new TripPresenter({
  headerContainer: pageHeaderElement,
  filtersContainer: filtersContainerElement,
  eventsContainer: tripEventsSectionElement,
});

tripPresenter.init();


