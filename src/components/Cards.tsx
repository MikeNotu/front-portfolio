import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CodeIcon from "@mui/icons-material/Code";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Img_Chess from "../media/Chess.jpg";
import Img_OldWebsite from "../media/OldWebsite.jpg";
import Img_AndroidApp from "../media/AndroidApp.jpg";
import Img_NeuralNetwork from "../media/NeuralNetwork.jpg";
import Img_GitHub from "../media/GitHub.jpg";
import Img_ReduxTestingHocs from "../media/ReduxTestingHocs.jpg";
import { COLORS } from "../constants";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface Data {
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

const Cards: React.FC = () => {
  const [expanded, setExpanded] = React.useState([false, false]);

  const handleExpandClick = (index: number) => {
    let finalValue: boolean[] = expanded;

    finalValue[index] = !finalValue[index];
    setExpanded([...finalValue]);
  };

  return (
    <Grid alignItems="center" justifyContent="center" container margin={1}>
      {DATA.map((data, index) => {
        return (
          <Card key={index} sx={{ maxWidth: 345, margin: 3, mb: "auto" }}>
            <CardHeader
              avatar={
                <Avatar
                  alt="Mike Bateman"
                  src="https://avatars.githubusercontent.com/u/43997532?v=4"
                ></Avatar>
              }
              title={data.title}
              subheader={data.date}
            />
            {data.url !== null ? (
              <Link
                to={{
                  pathname: data.url,
                }}
                target="_blank"
              >
                <CardMedia
                  component="img"
                  height="194"
                  image={data.image}
                  alt={data.title}
                />
              </Link>
            ) : (
              <CardMedia
                component="img"
                height="194"
                image={data.image}
                alt={data.title}
              />
            )}

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {data.technologies}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="repository">
                {data.repository !== null ? (
                  <Link
                    to={{
                      pathname: data.repository,
                    }}
                    target="_blank"
                  >
                    <CodeIcon sx={{ color: COLORS.customGray }} />
                  </Link>
                ) : null}
              </IconButton>
              <ExpandMore
                expand={expanded[index]}
                onClick={() => {
                  handleExpandClick(index);
                }}
                aria-expanded={expanded[index]}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography>{data.long_description}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        );
      })}
    </Grid>
  );
};

export default Cards;
