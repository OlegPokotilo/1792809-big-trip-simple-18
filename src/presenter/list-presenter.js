import FiltersView from '../view/filters-view.js';
import SortingView from '../view/sorting-view.js';
import PointEditView from '../view/point-edit-view.js';
import TripPointView from '../view/trip-point-view.js';
import EventListView from '../view/event-list-view.js';
import {render} from '../render.js';

export default class ListPresenter {
  sortingView = new SortingView();
  filtersView = new FiltersView();
  eventListView = new EventListView();

  init = (container) => {
    this.container = container;

    render(this.sortingView, this.container);
    render(this.eventListView, this.container);
    render(new TripPointView(), this.eventListView.getElement());
    render(new PointEditView(), this.eventListView.getElement());

    for (let i = 0; i < 3; i++) {
      render(new TripPointView(), this.eventListView.getElement());
    }
  };
}

