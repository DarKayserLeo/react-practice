const initState = {
  workshopTypes: [],
};

export default function AppReducer(state = initState, action) {
  switch (action.type) {
    case 'WORKSHOP_TYPE':
      return { ...state, workshopTypes: [...state.workshopTypes, ...action.payload] };
    case 'REMOVE_WORKSHOP_TYPE':
      return { ...state, workshopTypes: action.payload };
    default: //default case just return current state
      return state;
  }
}
