import { AppBar, Toolbar } from "@mui/material";
import { Image } from "mui-image";
import Logo from "../assets/logo.png";
import AvatarImage from "./AvatarImage";
import UserImage from "../assets/user.png";
import { Box } from "@mui/system";
import { grey } from "@mui/material/colors";

export default function NavBar() {
  return (
    <AppBar
      color="inherit"
      position="static"
      elevation={0}
      sx={{
        borderBottom: 1,
        borderTop: 1,
        borderColor: "secondary.main",
        height: 85,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <AvatarImage imageURL={Logo} size={30} />
        </Box>
        <AvatarImage imageURL={UserImage} size={40} />
      </Toolbar>
    </AppBar>
  );
}
