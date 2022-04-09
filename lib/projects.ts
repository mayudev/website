export interface IProject {
  name: string;
  description: string;
  url: string;
  image?: string;
}

export const projects: IProject[] = [
  {
    name: "anistats",
    description: "An extended statistics page for AniList",
    url: "https://mayudev.github.io/anistats/",
  },
  {
    name: "Kaomoji Picker",
    description: "A picker for kaomoji, Japanese emoticons",
    url: "https://github.com/mayudev/kaomoji-panel",
  },
];
