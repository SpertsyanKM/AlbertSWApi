export type MovieApi = {
  title: string;
  release_date: string;
  episode_id: number;
};

export type Movie = {
  title: string;
  releaseDate: Date;
  releaseYear: number;
  episodeId: number;
};

export type MovieList = Movie[];
