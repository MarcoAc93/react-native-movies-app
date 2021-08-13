export interface MoviesResponseType {
    dates?:        DatesTypes;
    page:          number;
    results:       MovieType[];
    total_pages:   number;
    total_results: number;
}

export interface DatesTypes {
    maximum: string;
    minimum: string;
}

export interface MovieType {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguageType;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      string;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export enum OriginalLanguageType {
    En = "en",
    Es = "es",
    Ja = "ja",
    Zh = "zh",
}

export interface MovieDetailsType {
    adult:                 boolean;
    backdrop_path:         string;
    belongs_to_collection: null;
    budget:                number;
    genres:                GenreType[];
    homepage:              string;
    id:                    number;
    imdb_id:               string;
    original_language:     string;
    original_title:        string;
    overview:              string;
    popularity:            number;
    poster_path:           string;
    production_companies:  ProductionCompanyType[];
    production_countries:  ProductionCountryType[];
    release_date:          string;
    revenue:               number;
    runtime:               number;
    spoken_languages:      SpokenLanguageType[];
    status:                string;
    tagline:               string;
    title:                 string;
    video:                 boolean;
    vote_average:          number;
    vote_count:            number;
}

export interface GenreType {
    id:   number;
    name: string;
}

export interface ProductionCompanyType {
    id:             number;
    logo_path:      string;
    name:           string;
    origin_country: string;
}

export interface ProductionCountryType {
    iso_3166_1: string;
    name:       string;
}

export interface SpokenLanguageType {
    english_name: string;
    iso_639_1:    string;
    name:         string;
}

