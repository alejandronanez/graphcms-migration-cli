type Specie = {};
type HealthConditions = {};
type Size = {};
type ApplicationStatus = {};

export type Pet = {
  name: string;
  background: string;
  adopted: boolean;
  birthday: string;
  joinedOn: string;
  livesWithOtherAnimals: boolean;
  goodForKids: boolean;
  picture: string;
  specie?: Specie;
  healthConditions?: HealthConditions;
  size?: Size;
};

export type Person = {
  githubId: string;
  username: string;
  email: string;
  name: string;
  url: string;
};

export type Application = {
  applicationStatus: ApplicationStatus;
};
