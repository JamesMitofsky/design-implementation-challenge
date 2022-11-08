import { AppBar, Toolbar } from "@mui/material";
import { Image } from "mui-image";
import Logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Image src={Logo} alt="logo" width={30} />
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
