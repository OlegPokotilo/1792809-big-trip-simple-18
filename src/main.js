import FiltersView from './view/filters-view.js';
import SortingView from './view/sorting-view.js';
import CreationFormView from './view/creationForm-view.js';
import FormEditorView from './view/editForm-view.js';
import {render} from './render.js';

const siteMainElement = document.querySelector('.page-body');
const siteFiltersElement = siteMainElement.querySelector('.trip-controls__filters');
const siteTripEventsElement = siteMainElement.querySelector('.trip-events');

render(new FiltersView(), siteFiltersElement);
render(new SortingView(), siteTripEventsElement);
render(new CreationFormView(), siteTripEventsElement);
render(new FormEditorView(), siteTripEventsElement);
