import * as actions from './albumActions';

describe('album actions', () => {

  it('should create add album action', () => {
    let name = 'test name';
    expect(actions.addAlbum(name)).toEqual({
      type: actions.ADD_ALBUM,
      albumName: name,
    });
  });

  it('should create edit album action', () => {
    let uuid = '123';
    let newName = 'new name';
    expect(actions.editAlbum(uuid , newName)).toEqual({
      type: actions.EDIT_ALBUM,
      albumUuid: uuid,
      albumNewName: newName,
    });
  });

  it('should create delete album action', () => {
    let uuid = '123';
    expect(actions.deleteAlbum(uuid)).toEqual({
      type: actions.DELETE_ALBUM,
      albumUuid: uuid,
    });
  });

  it('should create add photo to album action', () => {
    let uuid = '123';
    let photoName = '';
    let photoImageURL = '';
    expect(actions.addPhoto(uuid, photoName, photoImageURL)).toEqual({
      type: actions.ADD_PHOTO,
      albumUuid: uuid,
      photoName: photoName,
      photoImageURL: photoImageURL,
    });
  });
});
