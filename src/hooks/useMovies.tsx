import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MoviesResponseType, MovieType } from '../interfaces/movieInterface';

interface MoviesState {
	nowPlaying: MovieType[];
	popular: MovieType[];
	topRated: MovieType[];
	upcoming: MovieType[];
}

export const useMovies = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [moviesState, setMoviesState] = useState<MoviesState>({
		nowPlaying: [],
		popular: [],
		topRated: [],
		upcoming: [],
	});

	const getMovies = async () => {
		const nowPlayingPromise = movieDB.get<MoviesResponseType>('/now_playing');
		const popularPromise = movieDB.get<MoviesResponseType>('/popular');
		const topRatedPromise = movieDB.get<MoviesResponseType>('/top_rated');
		const upcomingPromise = movieDB.get<MoviesResponseType>('/upcoming');

		const resps = await Promise.all([
			nowPlayingPromise,
			popularPromise,
			topRatedPromise,
			upcomingPromise
		]);

		setMoviesState({
			nowPlaying: resps[0].data.results,
			popular: resps[1].data.results,
			topRated: resps[2].data.results,
			upcoming: resps[3].data.results,
		});
		setIsLoading(false);
	};

	useEffect(() => {
		getMovies();
	}, []);

	return {
		...moviesState,
		isLoading,
	};
};
