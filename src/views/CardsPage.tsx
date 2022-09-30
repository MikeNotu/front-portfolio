import Cards from "../components/Cards";
import Img_Chess from "../media/Chess.jpg";
import Img_OldWebsite from "../media/OldWebsite.jpg";
import Img_AndroidApp from "../media/AndroidApp.jpg";
import Img_NeuralNetwork from "../media/NeuralNetwork.jpg";
import Img_GitHub from "../media/GitHub.jpg";
import Img_ReduxTestingHocs from "../media/ReduxTestingHocs.jpg";
import Img_TypescriptWebsite from "../media/TypescriptWebsite.jpg";

export interface Data {
  title: string;
  date: string | null;
  technologies: string;
  long_description: string;
  url: string | null;
  image: string;
  repository: string | null;
}

const DATA: Data[] = [
  {
    title: "In Depth TypeScript",
    date: "Sep 27, 2022",
    technologies: "React, TypeScript, HTML, Git, CSS & GitHub ",
    long_description: "Project to practice Advanced TypeScript Features.",
    url: "https://mikenotu.github.io/in-depth-typescript/",
    image: Img_TypescriptWebsite,
    repository: "https://github.com/MikeNotu/in-depth-typescript",
  },
  {
    title: "Technologies Project",
    date: "Dec 30, 2021",
    technologies:
      "React, Redux, Typescript, React Testing Library + Jest, React Router, HOCs, HTML, Git, GitHub & SCSS",
    long_description:
      "Project to demonstrate the implementation of multiple technologies working together.",
    url: "https://t3w0i.csb.app/",
    image: Img_ReduxTestingHocs,
    repository: "https://codesandbox.io/s/bateman-redux-typescript-t3w0i",
  },
  {
    title: "Chess Champions",
    date: "Jul 11, 2021",
    technologies:
      "React, Javascript, REST API, Fetch, Material UI(MUI), Material Table, React Router, HTML, Git, GitHub & SCSS",
    long_description:
      "Chess Website that displays the top Blitz players from wwww.chess.com using a Get Request(REST) in a table that allows filtering of any of the properties and exporting the table as a PDF file or an Excel file. It also loads a different chess puzzle each day.",
    url: "https://mikenotu.github.io/chess-champions/",
    image: Img_Chess,
    repository: "https://github.com/MikeNotu/chess-champions",
  },
  {
    title: "Old Portfolio",
    date: "Mar 30, 2021",
    technologies: "HTML, CSS, Bootstrap, Font Awesome, Git & GitHub",
    long_description:
      "Old portfolio used to demostrate knowledge in Frontend Development, Android Development, Python, ASP.NET Core, C#, Git & GitHub.",
    url: "https://mikenotu.github.io/Bateman/",
    image: Img_OldWebsite,
    repository: "https://github.com/MikeNotu/Bateman",
  },
  {
    title: "Talk & Play",
    date: "Jun 8, 2020",
    technologies: "Android & Java",
    long_description:
      "Android app that helps kids learn basic vocabulary by using voice recognition. The app works in both English and Spanish.",
    url: "https://www.youtube.com/watch?v=1U1sspCSeUo",
    image: Img_AndroidApp,
    repository: null,
  },
  {
    title: "Convolutional Neural Network",
    date: "Nov 22, 2019",
    technologies: "Python & OpenCV",
    long_description:
      "Convolutional Neural Network that can differentiate between a Kimono and a Mexican Dress.",
    url: "https://www.youtube.com/watch?v=hTg2xmiK1qU",
    image: Img_NeuralNetwork,
    repository: null,
  },
  {
    title: "My GitHub",
    date: null,
    technologies: "Git & GitHub",
    long_description: "GitHub with personal Projects.",
    url: "https://github.com/MikeNotu",
    image: Img_GitHub,
    repository: "https://github.com/MikeNotu?tab=repositories",
  },
];

const CardsPage: React.FC = () => {
  return (
    <div>
      <div>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          This website is a Porfolio of some of my Personal Projects.
        </h1>
      </div>
      <Cards DATA={DATA} />
    </div>
  );
};

export default CardsPage;
