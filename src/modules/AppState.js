export const initialState = {
  isLoad: false,
  isFirstOpen: true,
}

export const START = 'AppState/START';
export const END = 'AppState/END';
export const SET_FIRST_OPEN = 'AppState/SET_FIRST_OPEN';

export function setAppOpened(value) {
  return {
    type: SET_FIRST_OPEN,
    payload: value
  };
}

export default function AppStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case START:
      return {
        ...state,
        isLoad: true,
      };
    case END:
      return {
        ...state,
        isLoad: false,
      };
    case SET_FIRST_OPEN:
      return {
        ...state,
        isFirstOpen: action.payload,
      };
    default:
      return state;
  }
}
