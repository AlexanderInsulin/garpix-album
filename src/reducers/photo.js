import actions from '../actions/';
import {v4} from 'uuid';

const initialState = {
  uuid: v4(),
  name: '',
  imageURL: '',
}

const photo = (state = initialState, action) => {
  switch (action.type) {
    case actions.photo.ADD_PHOTO:
      return {
        uuid: v4(),
        name: action.photoName,
        imageURL: action.photoImageURL
      }
    default:
      return state;
  }
}

export default photo;
