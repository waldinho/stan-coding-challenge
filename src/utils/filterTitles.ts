import { Program } from '../types/general'

const filterTitles = (titles: Program[], field: string, value: 'movie' | 'series' | number) => {       
    const selected = titles.filter((title) => title[field] === value);
    return selected; 
}
  
export default filterTitles;