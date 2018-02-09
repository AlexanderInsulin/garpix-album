import * as actions from './albumActions';

describe('album actions', () => {

  it('should create add album action', () => {
    let name = 'test name';
    expect(actions.addAlbum(name)).toEqual({
      type: actions.ADD_ALBUM,
      name: name,
    });
  });

  it('should create edit album action', () => {
    let uid = '123';
    let newName = 'new name';
    expect(actions.editAlbum(uid , newName)).toEqual({
      type: actions.EDIT_ALBUM,
      uid: uid,
      newName: newName,
    });
  });

  it('should create delete album action', () => {
    let uid = '123';
    expect(actions.deleteAlbum(uid)).toEqual({
      type: actions.DELETE_ALBUM,
      uid: uid,
    });
  });
});
