import actions from '../actions/';
import {v4} from 'uuid';
import photo from './photo';

let initialState = {
  uuid: v4(),
  name: '',
  photos: []
}

const album = (state = initialState, action) => {
  switch (action.type) {
    case actions.album.ADD_ALBUM:
      return {
        uuid: v4(),
        name: action.albumName,
        photos: []
      }
      case actions.album.EDIT_ALBUM:
        if (state.uuid !== action.albumUuid) {
          return state;
        }
        return {...state, name: action.albumNewName}
      case actions.album.ADD_PHOTO:
        if (state.uuid !== action.albumUuid) {
          return state;
        }
        return {...state, photos: [...state.photos, photo(undefined, actions.photo.addPhoto(action.photoName, action.photoImageURL))]}
      case actions.album.DELETE_PHOTO:
        return {...state, photos: state.photos.filter(p => p.uuid != action.photoUuid)};
    default:
      return state;
  }
}

export default album;
