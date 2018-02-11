import * as actions from './photoActions';

describe('photo actions', () => {

  it('should create add photo action', () => {
    let name = 'test name';
    let href = 'http://www.text2image.com/user_images/text2image_F64329_20180209_034923.png';
    expect(actions.addPhoto(name, href)).toEqual({
      type: actions.ADD_PHOTO,
      photoName: name,
      photoImageURL: href,
    })
  });

  it('should create edit photo action', () => {
    let uuid = '123';
    let newName = 'new name';
    expect(actions.editPhoto(uuid, newName)).toEqual({
      type: actions.EDIT_PHOTO,
      photoUuid: uuid,
      photoNewName: newName
    })
  });
});
