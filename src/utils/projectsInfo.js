import HowToLearnImg from "../images/projects/How to Learn.png";
import RussianTravelImg from "../images/projects/Russian Travel.png";
import MestoImg from "../images/projects/Mesto.png";

import ReactIcon from "../images/skills/react.svg";
import ExpressIcon from "../images/skills/express.svg";
import HtmlIcon from "../images/skills/html5.svg";
import CssIcon from "../images/skills/css3.svg";
import GithubIcon from "../images/skills/github-90.png";
import NodeJsIcon from "../images/skills/nodejs.svg";

export const PROJECTS_INFO = [
  {
    id: "1",
    title: "Mesto",
    description:
      "Регистрируйтесь, делитесь фото в общей ленте вместе с друзьями. Ставьте лайки.Мини Instagram.",
    websiteUrl: "https://fe1ch.github.io/react-mesto-auth/",
    githubUrl: "https://github.com/Fe1ch/react-mesto-auth",
    githubIcon: GithubIcon,
    image: MestoImg,
    techIcons: [
      { name: "HTML", icon: HtmlIcon },
      { name: "CSS", icon: CssIcon },
      { name: "React", icon: ReactIcon },
      { name: "Sass", icon: NodeJsIcon },
      { name: "Express", icon: ExpressIcon },
    ],
  },
  {
    id: "2",
    title: "Russian Travel",
    description: "Адаптивный сайт. О путешествии по нашей необъятной стране.",
    websiteUrl: "https://fe1ch.github.io/russian-travel/",
    githubUrl: "https://github.com/Fe1ch/russian-travel",
    githubIcon: GithubIcon,
    image: RussianTravelImg,
    techIcons: [
      { name: "HTML", icon: HtmlIcon },
      { name: "CSS", icon: CssIcon },
    ],
  },
  {
    id: "3",
    title: "How to Learn",
    description: "Статичный сайт. Подсказки по эффективному обучению.",
    websiteUrl: "https://fe1ch.github.io/how-to-learn/",
    githubUrl: "https://github.com/Fe1ch/how-to-learn",
    githubIcon: GithubIcon,
    image: HowToLearnImg,
    techIcons: [
      { name: "HTML", icon: HtmlIcon },
      { name: "CSS", icon: CssIcon },
    ],
  },
];
