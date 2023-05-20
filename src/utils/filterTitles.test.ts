
import filterTitles from './filterTitles';
import * as mockData from '../api/data.json';

describe('filterTitles', () => {
  it('filters by series', () => {
    expect(filterTitles(mockData.titles, 'series').length).toEqual(19);
  });

  it('filters by movie', () => {
    expect(filterTitles(mockData.titles, 'movie').length).toEqual(11);
  });
});