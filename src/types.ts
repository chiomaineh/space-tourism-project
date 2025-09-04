// Destination type
export type Destination = {
  name: string;
  description: string;
  distance: string;
  travelTime: string;
  image: string;
};

// Crew type
export type CrewMember = {
  name: string;
  position: string;
  description: string;
  image: string;
};

// Technology type
export type Technology = {
  name: string;
  description: string;
  image: string;   // landscape
  image2: string;  // portrait
};
