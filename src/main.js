import FiltersView from './view/filters-view.js';
import ListPresenter from './presenter/list-presenter.js';
/* import TripMainButtonView from './view//trip-main-button-view.js'; */
import {render} from './render.js';

const listPresenter = new ListPresenter();
const siteBodyElement = document.querySelector('.page-body');
const siteFiltersElement = siteBodyElement.querySelector('.trip-controls__filters');
const siteTripEventsElement = siteBodyElement.querySelector('.trip-events');

/* const siteTrip = siteBodyElement.querySelector('.trip-main');       здесь проверил, что кнопка отрисовывается
render(new TripMainButtonView(), siteTrip); */

render(new FiltersView(), siteFiltersElement);
listPresenter.init(siteTripEventsElement );


