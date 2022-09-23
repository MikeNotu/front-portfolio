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
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Img_Chess from "../media/Chess.jpg";
import Img_OldWebsite from "../media/OldWebsite.jpg";
import Img_AndroidApp from "../media/AndroidApp.jpg";
import Img_NeuralNetwork from "../media/NeuralNetwork.jpg";
import Img_GitHub from "../media/GitHub.jpg";
import Img_ReduxTestingHocs from "../media/ReduxTestingHocs.jpg";

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
  text: string;
  date: string | null;
  description: string;
  url: string | null;
  image: string;
}

const DATA: Data[] = [
  {
    title: "Technologies Project",
    text: "React, Redux, Typescript, React Testing Library + Jest, React Router, HOCs & SCSS",
    date: "Dec 30, 2021",
    description:
      "Project created to demonstrate implementation of multiple technologies working together.",
    url: "  https://codesandbox.io/s/bateman-redux-typescript-t3w0i",
    image: Img_ReduxTestingHocs,
  },
  {
    title: "Chess Champions",
    text: "React, Javascript, Fetch, Material UI(MUI), React Router & SCSS",
    date: "Jul 11, 2021",
    description: "Loremloremlorem",
    url: "https://mikenotu.github.io/chess-champions/",
    image: Img_Chess,
  },
  {
    title: "Titulo2",
    text: "Loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
    date: "Mar 30, 2021",
    description: "Loremloremlorem2",
    url: "https://mikenotu.github.io/Bateman/",
    image: Img_OldWebsite,
  },
  {
    title: "Talk & Play",
    text: "Loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
    date: "Jun 8, 2020",
    description: "Loremloremlorem2",
    url: "https://www.youtube.com/watch?v=1U1sspCSeUo",
    image: Img_AndroidApp,
  },
  {
    title: "Titulo2",
    text: "Loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
    date: "Nov 22, 2019",
    description: "Loremloremlorem2",
    url: "https://www.youtube.com/watch?v=hTg2xmiK1qU",
    image: Img_NeuralNetwork,
  },
  {
    title: "My GitHub",
    text: "Loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
    date: null,
    description: "Loremloremlorem2",
    url: "https://github.com/MikeNotu",
    image: Img_GitHub,
  },
];

const Cards: React.FC = () => {
  //   const [expanded, setExpanded] = React.useState(false);
  const [expanded, setExpanded] = React.useState([false, false]);

  const handleExpandClick = (index: number) => {
    // setExpanded(!expanded);
    let finalValue: boolean[] = expanded;

    finalValue[index] = !finalValue[index];
    // alert(
    //   `index: ${index} expanded: ${expanded} finalValue: ${finalValue}`
    // );
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
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
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
                {data.text}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
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
                <Typography>{data.description}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        );
      })}
    </Grid>
  );
};

export default Cards;
