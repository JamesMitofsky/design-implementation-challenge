import { AppBar, Toolbar } from "@mui/material";
import { Image } from "mui-image";
import Logo from "../assets/logo.png";
import ImageIcon from "./ImageIcon";
import UserImage from "../assets/user.png";
import { Box } from "@mui/system";
import Divider from "./Divider";

const NavBar = () => {
  return (
    <>
      <AppBar color="inherit" position="static" elevation={0}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Image src={Logo} alt="logo" width={20} />
          </Box>
          <ImageIcon profileImage={UserImage} />
        </Toolbar>
      </AppBar>
      <Divider />
    </>
  );
};
export default NavBar;
