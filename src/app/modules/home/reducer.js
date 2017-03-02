let initialState = {
  data: {}
};
export default function mentors(state = initialState, action = {}) {
  switch(action.type) {
    case 'FETCH_MENTORS_SUCCESS':
      return {
        ...state,
        data: action.data.data
      };
    default:
      return state;
  }



}
