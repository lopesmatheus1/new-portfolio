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
