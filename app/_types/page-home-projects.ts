export type Category = {
  category: "frontEnd" | "backEnd" | "outros" | "linguagens";
};
export type Technologies = {
  iconSVG: {
    url: string;
  };
  name: string;
  color?: string;
  category: Category;
};

export type HeroesContents = {
  resume: {
    url: string;
  };
  image: {
    url: string;
  };
  description: string;
};

export type Projects = {
  deployLink: string;
  description: string;
  githubLink: string;
  title: string;
  image: {
    url: string;
  };
  technologies: Technologies[];
};

export type TechnologiesResponse = {
  technologies: Technologies[];
};

export type ProjectResponse = {
  projects: Projects[];
};

export type HeroResponse = {
  heroes: HeroesContents[];
};
