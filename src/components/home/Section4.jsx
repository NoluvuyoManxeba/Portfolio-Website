import ConstraintedBox from "@/components/common/ConstraintedBox";
import ResponsiveBox from "@/components/common/ResponsiveBox";
import Carousel from "@/components/common/carousel/Carousel";
import ProjectItem from "@/components/common/ProjectItem";

const projects = [
  {
    title: "To do list App",
    description:
      "A simple Todo List App built with JavaScript. All datas are stored in localstorage. It helps users check list out their plans and tick as they do them.",
    icon: "/logo/reactjs.webp",
    sceenshots: [],
    githubUrl: "https://github.com/NoluvuyoManxeba/To-Do-List",
    repoType: "public",
    tags: ["React.js", "Redux", "Material UI"],
  },
  {
    title: "Lets Hike Cape Town Website",
    description:
      "A web site developed using Javascript, HTML,  and CSS. It focuses on hiking around Cape Town", 
    icon: "/logo/reactjs.webp",
    sceenshots: [],
    githubUrl: "https://github.com/NoluvuyoManxeba/Lets-Hike-Cape-Town-Web",
    repoType: "public",
    tags: ["Javascript", "Redux", "Material UI", "Stripe"],
  },
  {
    title: "Awesome T's Website",
    description:
      "A clothing brand website",
    icon: "/logo/reactjs.webp",
    sceenshots: [],
    githubUrl: "https://github.com/NoluvuyoManxeba/Clothing-Brand",
    repoType: "public",
    tags: ["React.js", "Redux", "Material UI"],
  },
  {
    title: "Nationality Predictor App",
    description:
      "An app that predicts your nationality by just giving it your name.",
    icon: "/logo/reactjs.webp",
    sceenshots: [],
    githubUrl: "https://github.com/NoluvuyoManxeba/Nationality-Predictor",
    repoType: "pubic",
    tags: ["React.js", "Redux", "Material UI"],
  },
  {
    title: "Hang-Man Game",
    description:
      "A classic game of hangman is a word game in which one player has to guess a word that the other player has thought of, by guessing the letters in it. Every time they guess a wrong letter, part of a picture of a person being hanged is drawn, and if the picture is completed the person guessing has lost.",
    icon: "/logo/reactjs.webp",
    sceenshots: [],
    githubUrl: "https://github.com/NoluvuyoManxeba/Hang-Man-Game",
    repoType: "private",
    tags: ["React.js", "Redux", "Material UI"],
  },
  
];

const HomeSection4 = () => {
  return (
    <ResponsiveBox classNames="bg-[var(--bgColor)]">
      <ConstraintedBox classNames="p-4 py-16">
        <h2 className="text-center mx-auto">
          Recent <span className="text-[var(--primaryColor)]">Projects</span>
        </h2>

        <Carousel classes="mt-12 w-full">
          {projects.map((project, index) => {
            return <ProjectItem key={`service-${index}`} project={project} />;
          })}
        </Carousel>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection4;
