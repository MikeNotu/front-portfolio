import "../MyName/MyName.scss";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";

function MyName() {
  return (
    <div>
      <Avatar
        alt="Hello"
        src="https://media.istockphoto.com/vectors/thumb-up-emoticon-vector-id157030584?k=20&m=157030584&s=612x612&w=0&h=TsRUZrgOW19D1f3WMleDrgGL-xfI6g0ZYhJDp58lS0E="
      />
      <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
      <h1 className="blue">Test</h1>
    </div>
  );
}

export default MyName;
