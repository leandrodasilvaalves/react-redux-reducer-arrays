import counterReducer, {
  INITIAL_STATE as COUNTER_INITIAL_STATE
} from "./counterReducer";

const INITIAL_STATE = [
  COUNTER_INITIAL_STATE,
  COUNTER_INITIAL_STATE,
  COUNTER_INITIAL_STATE
];

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type.startsWith("counter/")) {
    return [
      ...state.slice(0, action.payload),
      counterReducer(state[action.payload], action),
      ...state.slice(action.payload + 1)
    ];
  }
  return state;
};

export default reducer;
