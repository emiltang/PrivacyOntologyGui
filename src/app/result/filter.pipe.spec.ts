import {FilterPipe} from './filter.pipe';

describe('FilterContextPipe', () => {
  it('create an instance', () => {
      const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
});
