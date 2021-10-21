import {
  FETCH_USER_BOOKINGS_INIT,
  FETCH_USER_BOOKINGS_SUCCESS,
  FETCH_USER_BOOKINGS_FAIL
} from "actions/types";

const initialState = {
  data: [],
  errors: [],
  isFetching: false
};

export const userBookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_BOOKINGS_INIT:
      return {
        ...state,
        data: [],
        errors: [],
        isFetching: true
      };
    case FETCH_USER_BOOKINGS_SUCCESS:
      return {
        ...state,
        data: action.userBookings,
        errors: [],
        isFetching: false
      };
    case FETCH_USER_BOOKINGS_FAIL:
      return {
        ...state,
        data: [],
        errors: action.errors,
        isFetching: false
      };
    default:
      return state;
  }
};
