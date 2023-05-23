export type Program = {
  id: number,
  title: string,
  description: string,
  type: string,
  image: string
  rating: string,
  genre: string,
  year: number,
  language: string,
};

export type Context = {
  data: Program[],
  isloading: boolean;
  isError: boolean;
};

export type Nav = {
  title:  string,
  type: 'series' | 'movie' | null;
  path: string;
  location: string;
};
