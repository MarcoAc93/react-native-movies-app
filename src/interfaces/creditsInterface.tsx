export interface CreditsResponseType {
	id: number;
	cast: CastType[];
	crew: CastType[];
};

export interface CastType {
	adult: boolean;
	gender: number;
	id: number;
	known_for_department: DepartmentType;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: null | string;
	cast_id?: number;
	character?: string;
	credit_id: string;
	order?: number;
	department?: DepartmentType;
	job?: string;
};

export enum DepartmentType {
	Acting = "Acting",
	Art = "Art",
	Camera = "Camera",
	CostumeMakeUp = "Costume & Make-Up",
	Creator = "Creator",
	Crew = "Crew",
	Directing = "Directing",
	Editing = "Editing",
	Lighting = "Lighting",
	Production = "Production",
	Sound = "Sound",
	VisualEffects = "Visual Effects",
	Writing = "Writing",
};
