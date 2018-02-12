import * as photoActions from './photoActions';
import axios from 'axios';

export const UPLOAD_PHOTO = 'UPLOAD_PHOTO';
export const ADD_ALBUM = 'ADD_ALBUM';
export const EDIT_ALBUM = 'EDIT_ALBUM';
export const ADD_PHOTO = 'ADD_PHOTO';
export const DELETE_PHOTO = 'DELETE_PHOTO';

export const addAlbum = (name) => ({
  type: ADD_ALBUM,
  albumName: name
})

export const editAlbum = (uuid, newName) => ({
  type: EDIT_ALBUM,
  albumUuid: uuid,
  albumNewName: newName
})

export const addPhoto = (uuid, photoName, photoImageURL) => ({
  ...photoActions.addPhoto(photoName, photoImageURL),
  albumUuid: uuid,
})

export const deletePhoto = (albumUuid, photoUuid) => ({
  type: DELETE_PHOTO,
  albumUuid: albumUuid,
  photoUuid: photoUuid
})

export const uploadPhoto = (uuid, name, image) => {
  return (dispatch) => {
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () =>
    axios.post('https://api.imgur.com/3/image',{
        title: name,
        image: reader.result.replace('data:image/png;base64', ''),
      },{
        headers: {'Authorization':'Client-ID 6a5400948b3b376'},

      }).then(res => dispatch(addPhoto(uuid, name, res.data.data.link)))
  }
}
