import { AppBar, Toolbar } from "@mui/material";
import { Image } from "mui-image";
import Logo from "../assets/logo.png";
import ImageIcon from "./ImageIcon";
import UserImage from "../assets/user.png";
import { Box } from "@mui/system";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Image src={Logo} alt="logo" width={30} />
        </Box>
        <ImageIcon profileImage={UserImage} />
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
