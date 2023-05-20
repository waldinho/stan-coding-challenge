import { Program } from '../types/general'

const filterTitles = (titles: Program[], type?: 'movie' | 'series') => titles.filter(title => title.type === type);
  
export default filterTitles;