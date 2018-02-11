import album from './album';
import actions from '../actions';

const galery = (state = [], action) => {
  switch (action.type) {
    case actions.album.ADD_ALBUM:
      return [...state, album(undefined, action)]
    default:
      return state.map((a) => album(a, action));
  }
}

export default galery;
