import { Link } from "react-router-dom";
import "../styles/Technologies.scss";

const Technologies: React.FC = () => {
  interface Data {
    name: string;
    url: string;
  }

  const DATA: Data[] = [
    {
      name: "React & React Native",
      url: "https://github.com/MikeNotu/front-portfolio/blob/master/src/views/LandingPage.tsx",
    },
    {
      name: "Hooks",
      url: "https://github.com/MikeNotu/chess-champions/blob/master/src/components/Challenge.js",
    },
    {
      name: "Typescript",
      url: "https://github.com/MikeNotu/front-portfolio/blob/master/src/components/Navbar.tsx",
    },
    {
      name: "HTML",
      url: "https://github.com/MikeNotu/Bateman/blob/master/index.html",
    },
    {
      name: "CSS (Bootstrap, Flexbox, SCSS, BEM , Styled Components & Atomic Design)",
      url: "https://github.com/MikeNotu/front-portfolio/blob/master/src/styles/Technologies.scss",
    },
    {
      name: "Javascript (ES5 & ES6)",
      url: "https://github.com/MikeNotu/visual-leet/blob/master/src/components/Leet0001TwoSum.js",
    },
    {
      name: "Git & GitHub",
      url: "https://github.com/MikeNotu",
    },
    {
      name: "State Management (Redux & React Context)",
      url: "https://codesandbox.io/s/t3w0i?file=/src/client/views/ReduxPractice.tsx",
    },
    {
      name: "React Testing Library & Jest",
      url: "https://codesandbox.io/s/t3w0i?file=/src/__tests__/testing2.test.js",
    },
    {
      name: "Material UI (MUI), i18next, AsyncStorage & NetInfo",
      url: "https://github.com/MikeNotu/front-portfolio/blob/master/src/components/Navbar.tsx",
    },
  ];

  return (
    <div className="technologies">
      <ul className="technologies__description">
        <p className="technologies__description--sec1">
          Technologies I've used
        </p>

        {DATA.map((data) => {
          return (
            <Link
              key={data.name}
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
              to={{
                pathname: data.url,
              }}
              target="_blank"
            >
              <li className="technologies__description--sec2">{data.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Technologies;
