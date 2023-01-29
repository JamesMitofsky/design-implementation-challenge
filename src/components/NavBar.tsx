import { AppBar, Toolbar } from "@mui/material";
import { Image } from "mui-image";
import Logo from "../assets/logo.png";
import AvatarImage from "./AvatarImage";
import UserImage from "../assets/user.png";
import { Box } from "@mui/system";

const NavBar = () => {
  return (
    <AppBar color="inherit" position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Image src={Logo} alt="logo" width={20} />
        </Box>
        <AvatarImage imageURL={UserImage} />
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
