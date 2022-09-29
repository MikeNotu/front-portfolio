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
import { COLORS } from "../constants";
import { Data } from "../views/CardsPage";

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

const Cards = ({ DATA: DATA }: { DATA: Data[] }) => {
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
          <Card
            key={index}
            sx={{ width: 345, margin: 3, mb: "auto", fontFamily: "sans-serif" }}
          >
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
