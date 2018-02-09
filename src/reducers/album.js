import actions from '../actions/';
import {v4} from 'uuid';

let initialState = {
  uuid: 0,
  name: '',
  photos: []
}

const album = (state = initialState, action) => {
  switch (action.type) {
    case actions.album.ADD_ALBUM:
      return {
        uuid: v4(),
        name: action.name,
        photos: []
      }
      case actions.album.EDIT_ALBUM:
        return Object.assign(state, {name: action.newName})
    default:
      return state;
  }
}

export default album;
