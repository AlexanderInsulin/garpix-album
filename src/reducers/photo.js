import actions from '../actions/';
import {v4} from 'uuid';

const initialState = {
  uuid: 0,
  name: '',
  imageURL: '',
}

const photo = (state = initialState, action) => {
  switch (action.type) {
    case actions.photo.ADD_PHOTO:
      return {
        uuid: v4(),
        name: action.name,
        imageURL: action.imageURL
      }
    default:
      return state;
  }
}

export default photo;
