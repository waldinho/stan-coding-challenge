
import filterTitles from './filterTitles';
import * as mockData from '../api/data.json';

describe('filterTitles', () => {
  it('filters by series', () => {
    expect(filterTitles(mockData.titles, 'type', 'series').length).toEqual(19);
  });

  it('filters by movie', () => {
    expect(filterTitles(mockData.titles, 'type', 'movie').length).toEqual(11);
  });

  it('filters by id', () => {
    expect(filterTitles(mockData.titles, 'id', 67298).length).toEqual(1);
  });
});