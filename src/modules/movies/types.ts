export type MovieApi = {
  title: string;
  release_date: string;
  episode_id: number;
  characters: string[];
};

export type Movie = {
  title: string;
  releaseDate: Date;
  releaseYear: number;
  episodeId: number;
  characters: string[];
};

export type Character = {
  name: string;
  gender: string;
  species: string[];
  url: string; // used as id
};

export type Species = {
  name: string;
  classification: string;
};

export type MovieList = Movie[];
