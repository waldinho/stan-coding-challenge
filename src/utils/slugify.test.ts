
import slugify from './slugify';

describe('slugify', () => {
  it('slugifies string', () => {
    expect(slugify('Dr. Death')).toEqual('dr-death');
  });
});