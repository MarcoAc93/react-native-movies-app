import { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { MovieDetailsType } from '../interfaces/movieInterface';
import { CreditsResponseType, CastType } from '../interfaces/creditsInterface';

interface MovieDetails {
	isLoading: boolean;
	movieFull?: MovieDetailsType;
	cast: CastType[];
};

export const useMovieDetails = (movieId: number) => {
	const [state, setState] = useState<MovieDetails>({
		isLoading: true,
		movieFull: undefined,
		cast: []
	});

	const getMovieDetails = async () => {
		const movieDetailsPromise = movieDB.get<MovieDetailsType>(`/${movieId}`);
		const castPromise = movieDB.get<CreditsResponseType>(`/${movieId}/credits`);

		const [
			movieDetailsResp,
			castPromiseResp
		] = await Promise.all([
			movieDetailsPromise,
			castPromise
		]);

		setState({
			isLoading: false,
			movieFull: movieDetailsResp.data,
			cast: castPromiseResp.data.cast
		});
	}

	useEffect(() => {
		getMovieDetails();
	}, []);

	return {
		...state
	};
};
