import * as actions from './photoActions';

describe('photo actions', () => {

  it('should create add photo action', () => {
    let name = 'test name';
    let href = 'http://www.text2image.com/user_images/text2image_F64329_20180209_034923.png';
    expect(actions.addPhoto(name, href)).toEqual({
      type: actions.ADD_PHOTO,
      name: name,
      imageURL: href,
    })
  });

  it('should create edit photo action', () => {
    let uuid = '123';
    let newName = 'new name';
    expect(actions.editPhoto(uuid, newName)).toEqual({
      type: actions.EDIT_PHOTO,
      uuid: uuid,
      newName: newName
    })
  });

  it('should create delete photo action', () => {
    let uuid = '123';
    expect(actions.deletePhoto(uuid)).toEqual({
      type: actions.DELETE_PHOTO,
      uuid: uuid
    })
  });
});
