import "../styles/Jumbotron.scss";
import Img_Mike from "../media/Mike2022ImageGray.png";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
const Jumbotron: React.FC = () => {
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-sm center-image">
            <img
              src={Img_Mike}
              className="img-fluid my-image"
              alt="MikeBateman"
            ></img>
          </div>
          <div className="col-sm jumbotron__description">
            <p className="jumbotron__description--sec1">Michael Bateman</p>
            <p className="jumbotron__description--sec2">
              {`React & React Native Developer`}
            </p>
            <p className="jumbotron__description--icons">
              <FaReact
                style={{
                  color: "#61DBFB",
                  backgroundColor: "#323330",
                  borderRadius: 5,
                  borderStyle: "solid",
                  borderWidth: 1,
                }}
              />{" "}
              <FaHtml5
                style={{
                  color: "#e34c26",
                  backgroundColor: "#ebebeb",
                  borderRadius: 5,
                  borderStyle: "solid",
                  borderWidth: 1,
                }}
              />{" "}
              <FaCss3Alt
                style={{
                  color: "#264de4",
                  backgroundColor: "#ebebeb",
                  borderRadius: 5,
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderColor: "#264de4",
                }}
              />{" "}
              <FaJs
                style={{
                  color: "#F0DB4F",
                  backgroundColor: "#323330",
                  borderRadius: 5,
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderColor: "#323330",
                }}
              />{" "}
              <FaGithub
                style={{
                  color: "white",
                  backgroundColor: "#323330",
                  borderRadius: 5,
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderColor: "#323330",
                }}
              />{" "}
              <FaGitAlt
                style={{
                  color: "#F1502F",
                  backgroundColor: "white",
                  borderRadius: 5,
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderColor: "#3E2C00",
                }}
              />
            </p>
            <p className="jumbotron__description--sec3">
              {`I'm a Software Engineering, specialized in FrontEnd
        Development (React & React Native).`}
            </p>
            <p className="jumbotron__description--sec3">
              I'm always happy and willing to learn any technology that's needed
              for a project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
