// eventReducers.js
import {
  EVENT_LIST_REQUEST,
  EVENT_LIST_SUCCESS,
  EVENT_LIST_FAIL,
  EVENT_DETAILS_REQUEST,
  EVENT_DETAILS_SUCCESS,
  EVENT_DETAILS_FAIL,
  EVENT_CREATE_REQUEST,
  EVENT_CREATE_SUCCESS,
  EVENT_CREATE_FAIL,
  EVENT_CREATE_RESET,
} from "../constants/eventConstants";
const initialState = {
  loading: false,
  error: null,
  events: [],
};

export const eventListReducer = (state = initialState, action) => {
  switch (action.type) {
    case EVENT_LIST_REQUEST:
      return { ...state, loading: true, error: null };

    case EVENT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.payload,
        error: null,
      };

    case EVENT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export const eventDetailsReducer = (state = { event: {} }, action) => {
  switch (action.type) {
    case EVENT_DETAILS_REQUEST:
      return { ...state, loading: true, error: null };

    case EVENT_DETAILS_SUCCESS:
      return { ...state, loading: false, event: action.payload, error: null };

    case EVENT_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export const eventCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case EVENT_CREATE_REQUEST:
      return { ...state, loading: true, error: null };

    case EVENT_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        event: action.payload,
        error: null,
      };

    case EVENT_CREATE_FAIL:
      return { ...state, loading: false, error: action.payload };

    case EVENT_CREATE_RESET:
      return {};

    default:
      return state;
  }
};
