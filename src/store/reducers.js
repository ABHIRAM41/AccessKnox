import { ADD_WIDGET, REMOVE_WIDGET, SEARCH_WIDGETS } from "./actions";
import data from "../data";

const initialState = {
  categories: data.categories,
  searchQuery: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      return {
        ...state,
        categories: state.categories.map((category) => {
          if (category.id === action.payload.categoryId) {
            return {
              ...category,
              widgets: [...category.widgets, action.payload.widget],
            };
          }
          return category;
        }),
      };
    case REMOVE_WIDGET:
      return {
        ...state,
        categories: state.categories.map((category) => {
          if (category.id === action.payload.categoryId) {
            return {
              ...category,
              widgets: category.widgets.filter(
                (widget) => widget.id !== action.payload.widgetId
              ),
            };
          }
          return category;
        }),
      };
    case SEARCH_WIDGETS:
      return {
        ...state,
        searchQuery: action.payload.query,
      };
    default:
      return state;
  }
};

export default rootReducer;
