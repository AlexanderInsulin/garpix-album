import * as actions from '../actions/photoActions';
import photo from './photo';
import {v4} from 'uuid';

jest.mock('uuid', () => {
  return {
      v4: jest.fn(() => 1)
  };
});

describe('photo reducer', () => {

  it('should create photo', () => {
    let name = 'photo name';
    let href = 'http://www.text2image.com/user_images/text2image_F64329_20180209_034923.png';
    let a = photo(undefined, actions.addPhoto(name, href));
    expect(a).toEqual({
      uuid: v4(),
      name: name,
      imageURL: href
    })
  });
})
