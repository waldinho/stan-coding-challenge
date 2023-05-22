export type Program = {
    id: number,
    title: string,
    description?: string,
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