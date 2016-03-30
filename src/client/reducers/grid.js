import Immutable from 'immutable';

export default (state = Immutable.List(mock), action) => {
  switch(action.type) {
    case 'addLayer':
      return state.push(action.layer);
      break;
    default:
      return state;
      break;
  }
}