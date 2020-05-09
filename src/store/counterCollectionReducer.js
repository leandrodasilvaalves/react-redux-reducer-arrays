import counterReducer, {
  INITIAL_STATE as COUNTER_INITIAL_STATE
} from "./counterReducer";

export const ADD_COUNTER = "ADD_COUNTER";
export const addCounterAction = () => ({
  type: ADD_COUNTER
});

const INITIAL_STATE = [
  COUNTER_INITIAL_STATE,
  COUNTER_INITIAL_STATE,
  COUNTER_INITIAL_STATE
];

const reducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  if (action.type.startsWith("counter/")) {
    return [
      ...state.slice(0, action.payload),
      counterReducer(state[action.payload], action),
      ...state.slice(action.payload + 1)
    ];
  }

  if (action.type === ADD_COUNTER) {
    return [...state, COUNTER_INITIAL_STATE];
  }

  return state;
};

export default reducer;
