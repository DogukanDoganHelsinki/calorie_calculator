export const INITIAL_STATE = {
  loading: false,
  post: {},
  error: false,
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        loading: true,
        error: false,
        post: {},
      };

    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        post: action.payload,
      };

    case "FETCH_ERROR":
      return {
        error: true,
        loading: false,
        post: {},
      };

    default:
      break;
  }
};

export const ACTION_TYPES = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
};
